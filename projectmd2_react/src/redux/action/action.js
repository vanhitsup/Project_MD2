import * as typeAction from "../constant/typeAction";

export const delete_product=(id)=>{
    return{
        type:typeAction.DELETE_PRODUCT,
        payload:id,
    };
};