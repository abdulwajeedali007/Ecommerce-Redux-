import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import currencyFormatter from'currency-formatter';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai' 
function Details() {
    const {id} = useParams();
    const dispatch = useDispatch()
    
    

       const {product} = useSelector(state => state.products);

        //    count state 
        const [quantity, setQuantity] = useState(1); 
        
        console.log(product);

        const decQuantity = () => {
           if(quantity > 1){
                setQuantity(quantity - 1)
           }
        }


        useEffect(() => {
            dispatch({type: 'PRODUCT', id})
         }, [id])
       
      

        
    return (
        <div>
            
        <div className="product__container">
        <div className="row">
            <div className="col-4">
                <div className="img__box">
                   <img src={`/images/${product.image}`} alt={product.name}/>
                </div>
            </div>
            <div className="col-6">
            <div className="content__area">
                <p className="product__title">{product.name}</p>
                <div className="prices__area">
                   <h4>{currencyFormatter.format(product.discountPrice,{code: 'USD'})}</h4>
                   <h3>{currencyFormatter.format(product.price,{code: 'USD'})}</h3> 
                </div>
                <br/>
                <div className="buttons">
                   <span className="dec btn" onClick={decQuantity}><AiOutlineMinus/></span>
                   <span className="quantity btn">{quantity}</span>
                   <span className="inc btn" onClick={() => setQuantity(quantity+1)}><AiOutlinePlus/></span>

                   <button className="addtocart">ADD TO CART</button>


                   
                   <h3 className="details__title">Details</h3>
                   <p className="description">{product.desc}</p>
                </div>
            </div>
            </div>
        </div>
     </div>
            
        </div>
    )
}

export default Details
