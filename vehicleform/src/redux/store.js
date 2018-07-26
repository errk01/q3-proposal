import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import partsReducer from './partsReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({part:partsReducer, form: formReducer})

let middleware =[thunk, logger]

export default () => createStore(rootReducer, applyMiddleware(...middleware))