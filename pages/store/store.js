import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux"
import rootReducer from "../reducer";
import {createWrapper} from 'next-redux-wrapper'

import thunk from 'redux-thunk'
export const store =()=> createStore(rootReducer, applyMiddleware(thunk))
export  const wrapper = createWrapper(store)