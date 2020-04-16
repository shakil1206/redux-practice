import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";

const initialState = {
    cart: []
}

export const cardReducers = (state = initialState, action)=>{

    switch(action.type){
        case ADD_TO_CART:
            return {
                cart:[...state.cart, action.id]
            };
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item=>item!==id);
            return {cart: remainingCart}
        default:
            return state;
    }
}