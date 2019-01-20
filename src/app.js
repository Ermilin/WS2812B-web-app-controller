import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import {Provider} from "react-redux";
import store from "./store";

import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import './app.scss';
import Time from './components/Time'
import Chat from './components/chat/Chat';
import Home from './components/Home'
import Lamps from './components/Lamps'
import Climate from './components/Climate'
import Nav from "./components//Nav/Nav"
import Rgb from './components/chat/Rgb';


class App extends React.Component{

    render(){
        return(
            <React.Fragment>

             <Time />
                <div className="row">

                    <div className="big big-border">

                    </div>

                    <Nav/>
    
    
                    <Switch>
                        <Route path="/" component={Home} exact={true}/>
                        <Route path="/Lamps" component={Lamps}/>
                        <Route path="/Climate" component={Climate}/>
                        <Route component={Error}/>
                    </Switch>

                </div>

            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);