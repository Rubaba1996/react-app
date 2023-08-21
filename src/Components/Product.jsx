import './Product.css'
import React from 'react'

const Product = (props) => {
    let check = props.basket.find((a)=>a.id ==props.id) &&
    props.basket.find((a)=>a.id==props.id).count
  return (
    <div className='product'>
    <img className="im1" src={props.image} alt=""/>
    <h2 className='h21'>{props.name}</h2>
    <h1 className='h2'>{props.price} AZN</h1>
    <div>
    <button 
    disabled={!check}
    onClick={()=>props.removeFromBasket(props.id)}
    >Sell</button>
     <input type="number"
     onChange={(e)=>props.fromInput(props.id, e.target.value)}
     value={check ? check : ""}
     />
     <button 
     disabled={props.price > props.result}
     onClick={()=>props.addToBasket(props.id)}
     >Buy</button>
     </div>
     
    </div>

  )
}

export default Product