import { createStore, applyMiddleware, compose } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
  reducers, 
  {}, // default state of the application
  compose(
    applyMiddleware(thunk),
    // applyMiddleware(createLogger()),  
  )
);

export default store;