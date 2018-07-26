import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootswatch/dist/solar/bootstrap.min.css';
import {fetch_cars} from './redux/action'
import {fetch_part} from './redux/partsAction'

const newStore = store();

//newStore.dispatch(fetch_cars())
newStore.dispatch(fetch_part())


ReactDOM.render(
  <Provider store={newStore}>
   <App />
 </Provider>,
  document.getElementById('root')
);

