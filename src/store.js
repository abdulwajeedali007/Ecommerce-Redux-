import {combineReducers, createStore} from 'redux'
import ProductReducers from './Reducers/ProductsReducers'
import { devToolsEnhancer } from 'redux-devtools-extension';
import cartReducer from './Reducers/CartReducer'
const root = combineReducers({products: ProductReducers, cartReducer })

const store = createStore(root, devToolsEnhancer())


export default store;