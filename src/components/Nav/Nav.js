import React, {Fragment} from "react"
import { NavLink} from 'react-router-dom'

import {Home, Lamp, Climate, Speakers} from './../Svg/Svg'


class Nav extends React.Component {
    constructor() {
        super()

        this.state = {
            links: [
                <NavLink to="/" activeClassName="active">
                    <Home />
                    <p>Home</p>
                </NavLink>,
                <NavLink to="/Lamps" activeClassName="active">
                    <Lamp />
                    <p>Lights</p>
                </NavLink>,
                <NavLink to="/Climate" activeClassName="active">
                    <Climate />
                    <p>Climate</p>
                </NavLink>,
                <NavLink to="/Lamps" activeClassName="active">
                    <Speakers />
                    <p>Speakers</p>
                </NavLink>,
                <NavLink to="/Lamps" activeClassName="active">
                    <Lamp />
                    <p>Lamps</p>
                </NavLink>,
                <NavLink to="/Lamps" activeClassName="active">
                    <Lamp />
                    <p>Lamps</p>
                </NavLink>,
                <NavLink to="/Lamps" activeClassName="active">
                    <Lamp />
                    <p>Lamps</p>
                </NavLink>,
                <NavLink to="/Lamps" activeClassName="active">
                    <Lamp />
                    <p>Lamps</p>
                </NavLink>
        ]
        }
    }


  render() {
    return (
        <Fragment>

                <ul className="big big-border systems">

                  {this.state.links.map((link, i) => (<li className="system" key={i}>{link}</li>))}

                </ul>

            </Fragment>
    )
  }

}

export default Nav;
