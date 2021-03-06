import React from 'react';
import { withRouter } from "react-router-dom";
import { Container, Header, Form, Button} from 'semantic-ui-react';
import {lookupOptionsNoToken, LOGIN_ENPOINT } from '../helpers/endpoints.js';


class LoginRegisterPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            message: ''
        }
    }

    onInputChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        const thisComp = this;
        const data = this.state;
        fetch(LOGIN_ENPOINT, lookupOptionsNoToken(data))
        .then(resp=> resp.json())
        .then(respData =>{
            console.log(respData)
            if (respData.refresh !== undefined) {
                localStorage.setItem('token', respData.access)
                localStorage.setItem('refresh-token', respData.refresh)
                thisComp.props.history.push("/");
            } else {
                thisComp.setState({
                    message: "No active account found with the given credentials"
                })
            }   
        })
    }

    render(){
        const { username, password, message } = this.state;
        return (
            <div>
                <Container style={{ marginTop: '3em' }}>
                    <Header as='h1'>Login</Header>
                    <Form>
                        <Form.Field>
                        <label>Username</label>
                            <input name='username' value={username} onChange={this.onInputChange} placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                        <label>Password</label>
                        <input type='password' name='password' value={password} onChange={this.onInputChange} placeholder='Password' />
                        </Form.Field>
                        <Button onClick={this.onSubmitForm} type='submit'>Submit</Button>
                    </Form>
                    {message.length > 0 ?
                    <p>{message}</p>: <p></p>}
                </Container>
            </div>
        )
    }
}

export default withRouter(LoginRegisterPage);