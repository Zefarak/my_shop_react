export const HOST = 'http://127.0.0.1:8000';
export const AUTH_ENDPOINT = '/api/auth/';
export const LOGIN_ENPOINT = HOST +  '/api/auth/token/'

export const BILL_LIST_ENDPOINT = HOST + '/api/transcations/bill-list/'
export const BILL_CATEGORY_LIST_ENDPOINT = HOST + '/api/transcations/bill-category-list/'

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


export function receiveDataFromEndpoint(respData, thisComp, name){
    if(respData.results !== undefined) {
        thisComp.setState({
            [name]: respData.results,
            next: respData.next,
            previous: respData.previous
        
        })
    } else {
        thisComp.setState({
            [name]: respData,
            next: null,
            previous: null
        })
    }
}