import React from 'react';

import { BILL_LIST_ENDPOINT, lookupOptionsGET, } from '../../helpers/endpoints'

class TranscationPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            token: localStorage.getItem('token'),
            bills: []
        }
    }

    getBills(token){
        const thisComp = this;
        fetch(BILL_LIST_ENDPOINT, lookupOptionsGET(token))
        .then(resp=>resp.json())
        .then(respData=>{
            thisComp.setState({
                bills: respData
            })
        }
        )
    }

    componentDidMount(){
        this.setState({
            token: localStorage.getItem('token')
        })
        this.getBills(localStorage.getItem('token'))
    }

}

