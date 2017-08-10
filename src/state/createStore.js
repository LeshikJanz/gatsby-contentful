import { createStore as reduxCreateStore, compose } from "redux"
import reducer from './reducers';

const devtools = typeof window !== 'undefined' ? window.devToolsExtension : (() => (noop) => noop);

const enhancers = [
  devtools(),
];

const initialState = { count: 0 }

const createStore = () => reduxCreateStore(reducer, initialState, compose(...enhancers))
export default createStore