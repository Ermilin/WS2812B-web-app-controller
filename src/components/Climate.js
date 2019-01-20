import React, {Fragment} from "react"

class Climate extends React.Component {
    constructor(){
      super();

      this.state = {

      }

    }


    render() {

        return (
            <Fragment>
                <div className="big big-border">
                    <div class="w3-container">
                      <h1>RGB Color</h1>
                      <div class="w3-cell-row">
                        <div class="w3-container w3-cell w3-mobile">
                          <p><input type="range" min="0" max="255" value="0" class="slider" id="redSlider"/></p>
                          <p><input type="range" min="0" max="255" value="0" class="slider" id="greenSlider"/></p>
                          <p><input type="range" min="0" max="255" value="0" class="slider" id="blueSlider"/></p>
                        </div>
                        <div class="w3-container w3-cell w3-mobile" id="colorShow">
                          <div></div>
                        </div>
                      </div>
                      <p>Or pick a color:
                        <input type="color"/></p>
                    </div>
                </div>
                <div className="big big-border lights">
                  <div className="medium select-lights">



                  </div>

                  <div className="medium">
                  </div>

                </div>

            </Fragment>


        )
    }


}

export default Climate;
