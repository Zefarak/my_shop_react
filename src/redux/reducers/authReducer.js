import { RECEIVE_USER, RECEIVE_AUTH, REQUEST_USER, REQUEST_AUTH } from '../action_types.js'

const tokenInitialState = {
    token: null,
    isFetching: false,
    invalid_message: null
}

export function authReducer(state=tokenInitialState, action) {
    switch(action.type) {
        case REQUEST_AUTH:
            return Object.assign({}, state, {
                isFetching: action.isFetching
            })
        case RECEIVE_AUTH:
            return Object.assign({}, state, {
                token: action.responseData,
                isFetching: false,
                invalid_message: null
            })
        default:
            return state
    }
}



