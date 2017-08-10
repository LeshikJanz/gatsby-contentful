import { createReducer } from '../../../utils/createReducer';
import setNews from "../actions";

const initialState = [];

export default createReducer({
  [setNews]: ( state, payload ) => ({
    ...state,
    ...payload
  })
}, initialState);
