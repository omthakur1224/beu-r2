import React from 'react'
import {useState} from 'react'
function Left({cart,setCart,Products,handleRemove}) {

        
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
                <button onClick={()=>setCart(()=>{return [...cart,product] ; return cart})}>+</button>
            </div>
       </div> )}
    </div>
  )
}

export default Left
