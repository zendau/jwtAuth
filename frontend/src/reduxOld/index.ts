import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReduser";

import { composeWithDevTools } from 'redux-devtools-extension';



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export type AppDispatch = typeof store.dispatch