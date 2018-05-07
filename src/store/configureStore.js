import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const middleware = [thunk, logger];
  const store = compose(
    applyMiddleware(...middleware)
  ) (createStore) (rootReducer, initialState)
  // const store = createStore(rootReducer, initialState);
  return store;
}