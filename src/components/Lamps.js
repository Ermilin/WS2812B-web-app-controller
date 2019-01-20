import React, {Fragment} from "react"
import {connect} from "react-redux"
import { setBrightness } from "./../actions/brightnessActions";



import Rgb from './chat/Rgb';
import Slider from './Slider'
import CheckboxContainer from "./SelectLights/CheckboxContainer"

class Lamps extends React.Component {


render(){
    return (
        <Fragment>
            <div className="big big-border">

            </div>
            <div className="big big-border lights">
              <div className="medium select-lights">
                <CheckboxContainer
                    lux={this.props.brightness.brightness}
                    />
              </div>

              <div className="medium">
              <Rgb />
                <Slider />


              </div>

            </div>

        </Fragment>


    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Lamps);
