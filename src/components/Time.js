import React from "react"

export default class Time extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString()
        };
      }

      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.intervalID);
      }

      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
      }

      render() {
        return (
        <h1>
            {this.state.time}
        </h1>

        );
      }
    }
