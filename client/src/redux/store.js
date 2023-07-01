import {createStore, combineReducers,applyMiddleware} from "redux"

import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import { getProductDetailsReducer, getProductsReducer } from "./reducers/productReducer";

const reducer= combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer
})

const middleware= [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

//npm i redux is used to creace store combine reducers and apply middlewares
// npm i redux-thunk this is a middleware for redux
// npm i redux-devtools-extensions is used to apply any crome extensiond in the store 
// npm i react-redux it provide a provider to apply this store globally

//1. apply provider and value in index.js
