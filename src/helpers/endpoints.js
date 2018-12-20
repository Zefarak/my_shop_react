export const HOST = 'http://127.0.0.1:8000';
export const AUTH_ENDPOINT = '/api/auth/';
export const LOGIN_ENPOINT = HOST +  '/api/auth/login/'


export const BILL_LIST_ENDPOINT = HOST + '/api/transcations/bill-list/'

export function lookupOptionsNoToken(data){
    return {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    }
}

export function lookupOptionsGET(token){
    return {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization':  'Bearer '+ token
        }
    }

}