import * as actionTypes from '../action/type';
const isEmpty = require('is-empty');

const initialState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state
    }
}


export default authReducer;