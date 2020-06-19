import { createStore } from 'redux';

var rand = require('random-number');

var initialState = {
    num: 0,
    min: 0,
    max: 10,
    integer: true
}

const randNumReducer = function (state = initialState, action) {
    let gen = rand.generator({
            min: state.min,
            max: state.max,
            integer: state.integer
    })
    switch (action.type) {
        case "GENERATE-RAND":
            return state = {
                num: gen(),
                min: state.min,
                max: state.max,
                integer: state.integer
            };
        case "CHANGE-MINIMUM":
            return state = {
                    num: state.num,
                    min: action.payload,
                    max: state.max,
                    integer: state.integer
                };
        case "CHANGE_MAXIMUM":
            return state = {
                num: state.num,
                min: state.min,
                max: action.payload,
                integer: state.integer
            }
        default:
            return state;
    }
};

var store = createStore(randNumReducer);

export default store;