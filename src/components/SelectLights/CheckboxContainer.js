
import React, {Fragment} from 'react';
import Checkbox from './Checkbox';

class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        brightness: this.props.lux,
        checkboxes: [
          {
            name: 'Vardagsrum 1',
            key: 'vardagsrum1',
            label: 'Vardags rum 1',
            brightness: 20,
            status: false
          },
          {
            name: 'Vardagsrum 2',
            key: 'vardagsrum2',
            label: 'Vardags rum 2',
            brightness: 0,
            status: false
          },
          {
            name: 'Sovrum 1',
            key: 'sovrum1',
            label: 'Sov Rum 1',
            brightness: 0,
            status: false
          },
          {
            name: 'Sovrum 2',
            key: 'sovrum2',
            label: 'Sov Rum 2',
            brightness: 0,
            status: false
          },
          {
            name: 'Kök',
            key: 'kitchen',
            label: 'kitchen',
            brightness: 0,
            status: false
          },
      ]

    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    localStorage.getItem('checkboxes') && this.setState({
      checkboxes: JSON.parse(localStorage.getItem('checkboxes'))
    });
  }

  componentWillUpdate(nextProps, nextState, e, val) {
      console.log(this.state.checkboxes)
      console.log(nextState.checkboxes)
    localStorage.setItem('checkboxes', JSON.stringify(nextState.checkboxes))

  }

  handleChange(e,val) {
    const item = e.target.name;
    const index = this.state.checkboxes.findIndex(x=> x.key === item);
    const lightStatus = this.state.checkboxes[index].status

      this.setState({
        checkboxes: [
           ...this.state.checkboxes.slice(0,index),
           Object.assign({}, this.state.checkboxes[index], {status: !lightStatus, brightness: this.props.lux}),
           ...this.state.checkboxes.slice(index+1)
        ]
    });

  }



  render() {

    return (
      <Fragment>
        {
          this.state.checkboxes.map(item => (
              <Fragment key={item.key}>
                  <Checkbox id={item.key} name={item.key} onChange={this.handleChange} checked={item.status} />
                  <label htmlFor={item.key} key={item.key}>{item.name}
                      <br />
                      Brightness: {item.status ? this.props.lux : item.brightness}</label>


              </Fragment>
          ))


        }
      </Fragment>



    );
  }
}

export default CheckboxContainer;
