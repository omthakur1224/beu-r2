import { useState } from 'react'
import logo from './logo.svg'
import Left from './components/Left'
import Right1 from './components/Right1'
import './App.css'

function App() {

  const Products = [

    {id: 1, name: "Product-1", price:100, count:0},
    
    {id: 2, name: "Product-2", price:200, count:0},
    
    {id: 3, name: "Product-3", price:300, count:0},
    
    ];
    const [cart,setCart]=useState([]);


    const handleRemove=(id)=>{
      if(cart.length>0){

          // let x=cart.map((e,i)=>{e.id!==id})
          // setCart(()=>cart.map((e,i)=>{e.id!==id}))
      }
      console.log(cart)
  }

  return (
    <div style={{
      "display":"flex", "justifyContent":"space-around",
      "alignContent":"center",
      // "justifyContent":"space-around"
     }}>
      <Left cart={cart} setCart={setCart} Products={Products} handleRemove={handleRemove} />

      <Right1 cart={cart} setCart={setCart}/>
    </div>
  )
}

export default App
