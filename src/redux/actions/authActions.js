import { AUTH_ENDPOINT } from '../../helpers/endpoints.js';
import { AUTH_REQUEST, AUTH_RECEIVE, INVALID_AUTH } from '../../redux/action_types.js';
import { RECEIVE_AUTH } from '../../../../django_react_nutrition/frontend/src/redux/actions/actions_types.js';

export function requestToken() {
    return {
        type: REQUEST_AUTH
    }
}

export function receiveToken(responseData) {
    if (responseData.non_field_errors !== undefined) {
        return {
            type: INVALID_AUTH,
            isFething: false,
            responseData
        }
    } else {
        return {
            type: RECEIVE_AUTH,
            isFething: false,
            responseData
        }
    }
}


export function fetchToken(username, password) {
    return dispatch => {
        dispatch(requestToken());
        const my_credentials = {
            username: username,
            password: password
        };
        return fetch(AUTH_ENDPOINT, )
    }
}