import *as typeAction from "../constant/typeAction";

const initState={
    carts:[],
    selectedCart:null,
};

const productReducer=(state=initState,action)=>{
    switch (action.type) {
        case typeAction.DELETE_PRODUCT:
            return{
                ...state,
                carts:state.carts.filter((e)=>e.id !==action.payload) ,
            };
    
        default:
            break;
    }
    return state;
};

export default productReducer;