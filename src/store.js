import {combineReducers, createStore} from 'redux'
import ProductReducers from './Reducers/ProductsReducers'
import { devToolsEnhancer } from 'redux-devtools-extension';
const root = combineReducers({products: ProductReducers })

const store = createStore(root, devToolsEnhancer())


export default store;