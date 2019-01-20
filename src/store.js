import {createStore, combineReducers} from "redux";

import brightness from "./reducers/brightnessReducer";


export default createStore(
    combineReducers({
        brightness
    }),
    {},

);
