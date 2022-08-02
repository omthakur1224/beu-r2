import React from 'react'

function Right1({cart}) {
  return (
    <>
       {cart?
       <>
            {cart.map((product)=>
            <div style={{
                "display":"flex"
            }}>
                <ul>{product.name}</ul>
                <ul>{product.price}</ul>
            </div> )}
       </> : 
       <h1>cart is empty</h1> 
       }
    </>
  )
}

export default Right1
