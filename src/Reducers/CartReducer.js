const initState = {
    productIncart: [],
    totalPrice: 0,
    totalQuantity: 0,
}

const cartReducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const exist = state.productIncart.find(product => product.id === action.product.id);
            if(exist){
                return state;
            }else{
                const totalPrice = state.totalPrice + action.product.discountPrice * action.product.quantity;
                const totalQuantity = state.totalQuantity + action.quantity;
                

                return {...state, productIncart: [...state.productIncart, action.product ], totalPrice, totalQuantity }
            }
        default:
           return state;
    }
}


export default cartReducer;