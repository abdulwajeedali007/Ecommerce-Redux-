const initState = {
    productIncart: [],
    totalPrice: 0,
    totalQuantity: 0,
}

const cartReducer = (state=initState, action) => {
    let findpro
    let index
    switch (action.type) {

        case 'ADD_TO_CART':
            const exist = state.productIncart.find(product => product.id === action.product.id);
            if(exist){
                return state;
            }else{

                const totalQuantity = state.totalQuantity + action.quant;
                const totalPrice = state.totalPrice + action.product.discountPrice * action.quant;
                action.product.quantity  = action.quant;
                return {...state, productIncart: [...state.productIncart, action.product ], totalPrice:totalPrice, totalQuantity:totalQuantity}
            }

            // inc
            case 'INC':
                 findpro = state.productIncart.find(product => product.id === action.payload)
                 index = state.productIncart.findIndex(product => product.id === action.payload)
                 findpro.quantity += 1;
                 state.productIncart[index] = findpro;

                 return {...state, totalPrice: state.totalPrice + findpro.discountPrice, totalQuantity: state.totalQuantity + 1}
                 
            case 'DEC':
                findpro = state.productIncart.find(product => product.id === action.payload)
                index = state.productIncart.findIndex(product => product.id === action.payload)
                if(findpro.quantity > 1){
                    findpro.quantity -= 1
                    return {...state, totalPrice: state.totalPrice - findpro.discountPrice, totalQuantity: state.totalQuantity - 1}
                }else{
                    return state
                }
            case 'REMOVE':
                const removingItem = state.productIncart.filter(product => product.id !== action.payload)
                return {...state, productIncart: removingItem}
        default:
           return state;
    }
}


export default cartReducer;