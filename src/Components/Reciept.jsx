import React from 'react'
import './Reciept.css'

const Reciept = (props) => {
  return (
    <div className='result'>
        <hr/>
        <ul className='list'>
            {props.basket.map(a=>{
                let product= props.products.find((b)=> b.id== a.id)
                return(
                    <li key={a.id}>
                    {product.name} -- {a.count}x --{product.price * a.count}AZN
                    </li>
                )
            })}
            {props.total ? <h1>Total - {props.total}</h1> : ""}
        </ul>
    </div>
  )
}

export default Reciept