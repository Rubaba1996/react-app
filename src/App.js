import { useState,useEffect } from 'react';
import './App.css';
import Header from'./Components/Header';
import Product from './Components/Product';
import Reciept from './Components/Reciept';

function App() {
  const [products,setProducts] = useState([
    {
    id:1,
    name:"Big Mac",
    price:2,
    image: "https://neal.fun/spend/images/big-mac.jpg",
    },
    {
    id:2,
    name:"Flip Flops",
    price:3,
    image: "https://neal.fun/spend/images/flip-flops.jpg",
    },
    {
    id:3,
    name:"Airpods",
    price:199,
    image: "https://neal.fun/spend/images/airpods.jpg",
    },
    {
    id:4,
    name:"Rolex Watch",
    price:1500,
    image: "https://neal.fun/spend/images/rolex.jpg",
    },
    {
    id:5,
    name:"Mona Lisa",
    price:7800,
    image: "https://neal.fun/spend/images/mona-lisa.jpg",
    },
  ]);
  const [balance, setBalance] = useState(15000);
  const [basket, setBasket] = useState([]);
  const [total,setTotal] = useState(0);
  const addToBasket = (id) =>{
    let find = basket.find((a)=>a.id === id)
    if(find){
      find.count++;
      setBasket([...basket.filter((a)=>a.id!==id),find]);
    }else{
      setBasket([...basket,
        {
          id:id,
          count:1
        }

      ])
    }    
    // console.log(basket)
  }
  const removeFromBasket = (id) =>{
    let find = basket.find((a)=>a.id === id);
    if(find){
    find.count--;
    if(find.count === 0){
    setBasket([...basket.filter((a)=>a.id !== id)]);
    }else{
    setBasket([...basket.filter((a)=>a.id !== id),find])
    }
    }
    // console.log(basket)
  } 
  useEffect(()=>{
   setTotal(
    basket.reduce((a,b)=>{
      return a + products.find((c)=>c.id == b.id).price * b.count
    },0)
   )
  },[basket]);
  const fromInput = (id,value)=>{
    let find = basket.find((a)=>a.id === id);
    if(find){
    if(value === 0 || value ===""){
      setBasket([...basket.filter((a)=>a.id!==id)])
    }else{
      find.count=value
      setBasket([...basket.filter((a)=>a.id!==id),find])
    }
  }else {
      setBasket([...basket,{id:id,count:1}])
    }
  }
  return (
    <div>
     <Header result={balance-total}/>
     <div className='products'>
      {products.map(a=>(
        <Product
        key={a.id}
        id={a.id}
        name={a.name}
        image={a.image}
        price={a.price}
        addToBasket={addToBasket}
        removeFromBasket={removeFromBasket}
        fromInput={fromInput}
        basket={basket}
        result={balance-total}
        />
      ))}

     </div>
     <div className='total'>
    <Reciept basket={basket} total={total} products={products}/> </div>
     
    </div>
  );
}

export default App;
