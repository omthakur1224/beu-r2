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
  return (
    <div style={{
      "display":"flex",
      // "justifyContent":"space-around"
     }}>
      <Left cart={cart} setCart={setCart} Products={Products} />

      <Right1 cart={cart}/>
    </div>
  )
}

export default App
