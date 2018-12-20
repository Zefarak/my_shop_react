import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './views/Homepage/Homepage.js';
import LoginRegisterPage from './components/LoginRegisterPage.js'
import PrivateRouter from './helpers/PrivateRoutes.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter key='1'>
      <Switch key='01'>
        <PrivateRouter key='002' exact path="/" component={Homepage} />
        <Route key='003' exact path='/login/' component={LoginRegisterPage} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
