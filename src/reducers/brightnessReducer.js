const brightnessReducer = (state = {
    brightness: 0
}, action) => {
    switch (action.type) {
        case "SET_BRIGHTNESS":
            state = {
                
                brightness: action.payload
            };
            break;
        default:

        break;
    }
    return state;
};

export default brightnessReducer;
