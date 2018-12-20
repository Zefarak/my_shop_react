import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { persistStore } from 'redux-persist';
import { createBrowserHistory } from "history";
import {Provider} from 'react-redux';
import configureStore from "./redux/store";

export const store = configureStore();
persistStore(store);
const hist = createBrowserHistory();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
