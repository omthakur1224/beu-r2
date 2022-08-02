import React from 'react'
import {useState} from 'react'
function Left({cart,setCart,Products}) {
    
            const handleRemove=(id)=>{
               let x=cart.filter((e,i)=>{e.id!=id})
                setCart(x)
                console.log(cart)
            }

        
  return (
    <div>

       {Products.map((product,index)=> 
       <div key={product.id} style={{
        "display":"flex",
        
       }}>
            <ul>{product.name}</ul>
            <ul>{product.price}</ul>

            <div style={{
        "display":"flex",
        
       }}>
            <button onClick={()=>handleRemove(product.id)}>-</button>
                <ul>0</ul>
                <button onClick={()=>{setCart(product);console.log(cart)}}>+</button>
            </div>
       </div> )}
    </div>
  )
}

export default Left
