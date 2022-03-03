import {createStore, combineReducers} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import commandReducer from './reducers/command'
import messageReducer from './reducers/message'

const reducer = combineReducers({
  message: messageReducer,
  command: commandReducer
})

export default createStore(reducer, composeWithDevTools())