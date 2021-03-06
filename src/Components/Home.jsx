import React from 'react'
import LandingPage from './LandingPage'
import {useSelector} from 'react-redux'
import currencyFormatter from'currency-formatter';
import {Link} from 'react-router-dom'
function Home() {
    const {products} = useSelector(state => state.products)
    
    return (
        <>
            <LandingPage/>
            <div className="home__container">
               <h2>MyShop! <br/> Products</h2>
               <div className="cart__container">
               {products.map(product => (
                <div className="cart" key={product.id}>
                <div className="cart__body">
                <div className="img__box"> 
                    <Link to={`/details/${product.id}`} >
                        <img src={`images/${product.image}`} alt={product.name} className="cart__img"/>
                    </Link>
                </div>
                <div className="cart__content">
                    <p className="cart__brand">{product.brand}</p>
                    <p className="cart__title">{product.name} </p>
                    <div className="cart__prices">
                        <h2 className="main__price">{currencyFormatter.format(product.discountPrice,{code: 'USD'})}</h2> 
                        <h3 className="actual__price">{currencyFormatter.format(product.price,{code: 'USD'})}</h3>
                        <p className="discound__price">({product.discount}%)</p>
                    </div>
                </div>
                </div>
            </div>
           ))}
               </div>
            </div>
        </>
    )
}

export default Home
