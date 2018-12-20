import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import Navbar from '../../components/Navbar/Navbar.js';


class Homepage extends React.Component {

    onLogout = () => {
        localStorage.setItem('token', '')
    }

    render() {

        return (
            <div>
                <Navbar />
                <Container style={{ marginTop: '3em' }}>
                    <Header as='h1'>Theming Examples</Header>
                    <Button onclick={this.onLogout}>Logout</Button>
                </Container>
            </div>
        )
    }
}


export default Homepage;