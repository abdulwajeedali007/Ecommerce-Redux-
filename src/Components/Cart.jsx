import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineDelete, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Cart.scss'
import currencyFormatter from 'currency-formatter'
function Cart() {
    const {productIncart,totalPrice, totalQuantity} = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

   
    return (
        <div>
           
        {productIncart.length > 0 ? 
            
            <div className="items__container">
              <h2>Total products are {productIncart.length}</h2>
            <div className="container">
            <div className="row__main">
               <div className="col-9">  
                 <div className="row">
                        <div className="col-2">
                            <div className="img__box">
                                <p>Picture</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <p>
                                Name
                            </p>
                        </div>
                        <div className="col-2">
                            <p >
                                Price
                            </p>
                        </div>
                        <div className="col-2">
                            <p >
                                Quantity
                            </p>
                        </div>
                        <div className="col-2">
                            <p >
                                Total Price
                            </p>
                        </div>
                        <div className="col-2">
                            <p >
                                Remove
                            </p>
                        </div>
                  </div>
               </div>
               
               <div className="col-9-2" >
               {productIncart.map(item =>(
                  
                    <div className="row" key={item.id}>
                        <div className="col-2">
                            <div className="image__box">
                               <img src={`images/${item.image}`} alt=""/>
                            </div>
                        </div>
                        <div className="col-2">
                            <p className="item__title">
                            {item.name}
                            </p>
                        </div>
                        <div className="col-2">
                            <p className="item__price">
                            {currencyFormatter.format(item.discountPrice, {code: 'USD'} ) + 'X' +item.quantity}
                            </p>
                        </div>
                        <div className="col-2">
                            <p className="item__quantity">
                                <span className="dec btn" onClick={()=> dispatch({type: 'DEC', payload: item.id})}><AiOutlineMinus/></span>
                                <span className="quantity btn">{item.quantity}</span>
                                <span className="inc btn" onClick={()=> dispatch({type: 'INC', payload: item.id})}><AiOutlinePlus/></span>
                            </p>
                        </div>
                        <div className="col-2">
                            <p className="item__totalprice">
                            {currencyFormatter.format(item.discountPrice * item.quantity, {code: 'USD'})}
                            </p>
                        </div>
                        <div className="col-2">
                            <p className="item__remove" onClick={()=> dispatch({type: 'REMOVE', payload: item.id})}>
                              <AiOutlineDelete/>
                            </p>
                        </div>
                        
                    </div>
                    ))}
                </div>
               
               
            </div>
            <div className="row__main2">
            
                <div className="col-3">

                <div className="row">
                    <div className="col-2">
                    <p >Summary</p>
                    </div>
            </div>
                </div>

                <div className="col-3-1">
                  <div className="row">
                      <div className="col-2">
                         <p className="total__quantity">Total Items: {totalQuantity}</p>
                          <hr/>
                         <p className="total__price">Total Price: {currencyFormatter.format(totalPrice, {code: 'USD'} )}</p>

                         <button className="checkOUT" onClick={()=> alert("Checkout under implementation")}>Checkout</button>
                      </div>
                  </div>
               </div>
               
            </div>
            </div>
        </div>
        :
        <div  class="empty__container">
          <p className="cart__empty">Cart is Empty</p>
          <br/>
          <Link to="/" ><button className="backtohome">Home</button></Link>
        </div>
        
        }
        </div>
    )
}

export default Cart
