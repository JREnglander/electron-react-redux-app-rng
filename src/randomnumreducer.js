import { createStore } from 'redux';

var rand = require('random-number');
const randOps = {
    min: 0,
    max: 10,
    integer: true
};

const randNumReducer = function (state = 0, action) {
    switch (action.type) {
        case "GENERATE-RAND":
            return state = rand(randOps);
        default:
            return state;
    }
};

var store = createStore(randNumReducer);

export default store;