import * as actionTypes from "../constants/productConstant.js"

export const getProductsReducer=(state={products:[]} ,action)=>{
     switch(action.type){
        case actionTypes.GET_PRODUCT_SUCCESS:
            return{ products:action.payload}
        case actionTypes.GET_PRODUCT_FAIL:

        default:
            return state
     }
}

export const getProductDetailsReducer=(state={product:{}},action)=>{
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return{loading:true}
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {product:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_Fail:
            return{loading:false,error:action.payload}
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return { product:{}}
        default:
            return state
    }
}
