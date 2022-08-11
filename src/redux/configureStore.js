import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import greetingReducer from './greetings/reducers';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
