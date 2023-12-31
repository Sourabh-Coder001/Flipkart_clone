import {createStore ,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { getProductsReducer,getProductDeatailsReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/cartReducer';
const reducer=combineReducers({
    getProducts: getProductsReducer,
    getProductDeatails:getProductDeatailsReducer,
    cart:cartReducer
})
const middelware=[thunk];



const store=createStore (
    reducer,
    composeWithDevTools(applyMiddleware(...middelware))
)
export default store;