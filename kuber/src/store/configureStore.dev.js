import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import loggerMiddleware from '../middlewares/LoggerMiddleware';

const store = createStore(
  combineReducers(reducer),
  applyMiddleware(
    thunk,
    loggerMiddleware
  )
);

export default store;