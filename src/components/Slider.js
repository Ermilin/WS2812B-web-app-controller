import React from "react";
import { CircleSlider } from "react-circle-slider";
import {connect} from "react-redux"

import { setBrightness } from "./../actions/brightnessActions";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sliderValue: 0 };
    }

 //   handleChange = sliderValue => {
 //    console.log(`Changed value ${sliderValue}`);
 //    this.setState({sliderValue})
 //    this.props.setBrightness(sliderValue)
 //
 //   };

 componentWillMount() {
     localStorage.getItem('sliderValue') && this.setState({
         sliderValue: localStorage.getItem('sliderValue')
     })
 }

 componentWillUpdate() {
   localStorage.setItem('sliderValue', this.state.sliderValue)
 }


    render() {

        return (
            <div className="lights-slider">
                <CircleSlider
                    value={this.state.sliderValue}
                    onChange={this.handleChange}
                    size={300}
                    knobRadius={15}
                    progressWidth={15}
                    circleWidth={15} />
                <h1>{this.state.sliderValue}</h1>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      brightness: state.brightness
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBrightness: (brightness) => {
            dispatch(setBrightness(brightness));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
