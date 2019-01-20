import React from 'react';
import Users from "./Users";
import Messages from "./Messages";
import EnterChat from "./EnterChat";
import socketIOClient from 'socket.io-client';




class Rgb extends React.Component {

    constructor(props){
        super(props);
        this.socket = null;
        this.state = {
            username : localStorage.getItem('username') ? localStorage.getItem('username') : 'admin',
            uid : localStorage.getItem('uid') ? localStorage.getItem('uid') : this.generateUID(),
            chat_ready : false,
            users : [],
            messages : [],
            message : '',
            color : ''
        }
    }

    componentDidMount(){
        if(this.state.username.length) {
            this.initChat();
        }
    }

    generateUID(){
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 15; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        localStorage.setItem('uid', text);
        return text;
    }

    setUsername(username, e){
        this.setState({
            username : username
        }, () => {
            this.initChat();
        });
    }

    sendMessage(message, e){
        console.log(message);
        this.setState({
            messages : this.state.messages.concat([{
               username : localStorage.getItem('username'),
               uid : localStorage.getItem('uid'),
               message : message,
           }])
        });
        this.socket.emit('message', {
            username : localStorage.getItem('username'),
            uid : localStorage.getItem('uid'),
            message : message,
        });
        this.scrollToBottom();
    }

    hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
    
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    setColor(e){ // e = value from color input
        let color = this.hexToRgb(e)
        console.log(color);
        this.setState({
            color: e
        })

        this.socket.emit('color', {
            color : color,
        });
    }

    scrollToBottom(){
        let messages = document.getElementsByClassName('messages')[0];
        messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    }

    initChat(){
        localStorage.setItem('username', this.state.username);
        this.setState({
            chat_ready : true,
        });
        this.socket = socketIOClient('ws://192.168.0.4:8000', {
            query : 'username='+this.state.username+'&uid='+this.state.uid
        });

        this.socket.on('updateUsersList', function (users) {
            console.log(users);
            this.setState({
                users : users
            });
        }.bind(this));

        this.socket.on('message', function (message) {
            this.setState({
                messages : this.state.messages.concat([message])
            });
            this.scrollToBottom();
        }.bind(this));
    }

    render() {
        return (
            <div className="chat" style={{ backgroundColor: this.state.color}}>

                    <React.Fragment>

                        <input type="color" onChange={(e) => this.setColor(e.target.value)} />

                    </React.Fragment>

            </div>
        )
    }
}

export default Rgb;