import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div className="landing">
            <img src="images/LandingPage-Image.jpg" alt="Landingpage"/>
            <div className="content_area">
               <p>Welcome</p>
               <h2>MyShop</h2>
               <h3>One place for all your <span>fashion</span> trends</h3>
               <br/><br/>
               <Link className="checkoutcart" to="/cart">Check Out Cart</Link>
            </div>
        </div>
    )
}

export default LandingPage
