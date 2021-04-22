import {combineReducers, createStore} from 'redux'
import ProductReducers from './Reducers/ProductsReducers'

const root = combineReducers({products: ProductReducers })

const store = createStore(root)


export default store;