import React from 'react';
import ReactSVG from 'react-svg'

export const Home = () => {
    return (
        <ReactSVG
            src="home.svg"
            svgClassName="nav-svg"
            svgStyle={{
                width: 60
                }}/>
            )
}

export const Lamp = () => {
    return (
        <ReactSVG
            src="lamp.svg"
            svgClassName="nav-svg"
            svgStyle={{
                width: 60
                }}/>
            )
}

export const Climate = () => {
    return (
        <ReactSVG
        src="thermometer.svg"
        svgClassName="nav-svg"
        svgStyle={{
            width: 60
            }}/>
        )
}

export const Speakers = () => {
    return (
        <ReactSVG
        src="speaker.svg"
        svgClassName="nav-svg"
        svgStyle={{
            width: 60
            }}/>
        )
}
