import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(logger)
  ) (createStore) (rootReducer, initialState)
  // const store = createStore(rootReducer, initialState);
  return store;
}