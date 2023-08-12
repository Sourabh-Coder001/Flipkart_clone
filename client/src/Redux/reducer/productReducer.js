import * as actionType from '../Constants/productConstants';


export const getProductsReducer=(state={products:[]},action)=>{
    switch(action.type){
         case actionType.GET_PRODUCTS_SUCCESS:
            return {products:action.payload}
         case actionType.GET_PRODUCTS_Fail:
            return{error:action.payload}
        default:
            return state
    }
}

export const getProductDeatailsReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCTS_DETAILS_REQUEST:
           return {loading:true}
        case actionType.GET_PRODUCTS_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}   
        case actionType.GET_PRODUCTS_DETAILS_FAIL:
           return{loading:false,error:action.payload}
        case actionType.GET_PRODUCTS_DETAILS_RESET:
            return {product:{}}
       default:
           return state
   }
}