import { applyMiddleware, createStore } from "redux";
import reducers from './reducers';
import promise from "redux-promise-middleware"
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const middleware = applyMiddleware(promise(), thunk, createLogger())
const store = createStore(reducers, middleware);

export default store;