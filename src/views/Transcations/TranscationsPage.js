import React from 'react';
import { BILL_LIST_ENDPOINT, BILL_CATEGORY_LIST_ENDPOINT, lookupOptionsGET, receiveDataFromEndpoint } from '../../helpers/endpoints';
import { Container, Header, Grid, Image, List } from 'semantic-ui-react';
import Navbar from '../../components/Navbar/Navbar.js';


class TranscationPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            token: localStorage.getItem('token'),
            orders: [],
            next: null,
            previous: null,
            count: 0,

            bills: []
        }
    }

    getBills(token){
        const thisComp = this;
        const bills = 'bills'
        fetch(BILL_CATEGORY_LIST_ENDPOINT, lookupOptionsGET(token))
        .then(resp=>resp.json())
        .then(respData=>{
            receiveDataFromEndpoint(respData, thisComp, bills)
        })

    }

    getOrders(token){
        const thisComp = this;
        const orders = 'orders'
        fetch(BILL_LIST_ENDPOINT, lookupOptionsGET(token))
        .then(resp=>resp.json())
        .then(respData=>{
            receiveDataFromEndpoint(respData, thisComp, orders)
        }
        )
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        this.setState({
            token: token
        })
        this.getBills(token)
        this.getOrders(token)
    }

    render() {
        const { bills, orders } = this.state;
        console.log(bills)
        return (
            <div>
                <Navbar />
                <Container style={{ marginTop: '3em' }}>
                    <Header as='h1'>Transcations</Header>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                        <Grid.Column>
                            <Header as='h4'>Bills Invoices</Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4'>Payroll Invoices</Header>
                            <List divided relaxed>
                                {bills.map((bill, index)=>(
                                    <List.Item>
                                        <List.Icon name='green arrow alternate circle right' size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a'>{bill.title}</List.Header>
                                            <List.Description as='a'>{bill.tag_balance}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                ))}   
                            </List>

                        </Grid.Column>
                        </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
      <Header as='h4'>Bills</Header>
            <List divided relaxed>
                {bills.map((bill, index)=>(
                    <List.Item>
                        <List.Icon name='green arrow alternate circle right' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>{bill.title}</List.Header>
                            <List.Description as='a'>{bill.tag_balance}</List.Description>
                        </List.Content>
                    </List.Item>
                ))}   
            </List>
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
                </Container>
            </div>
        )
    }

}

export default TranscationPage;