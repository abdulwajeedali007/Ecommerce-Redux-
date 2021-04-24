import React from 'react'
import {FaOpencart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Navbar() {
    let count = 0
     count = useSelector(state => state.cartReducer.productIncart.length)

 
    
    return (
        <div className="navbar_container">
            <div className="navbar">
                <Link to="/" className="logo">
                  <h2><span>My</span>Shop</h2>
                </Link>
                <div className="addtocart">
                 <Link to="/cart" className="cartIcon">
                    <FaOpencart/>
                    <span className="count">{count}</span>
                 </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
