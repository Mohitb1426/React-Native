import { createStore, combineReducers } from 'redux';
import flightListReducer from '../reducers/flightListReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ flightList: flightListReducer });
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
