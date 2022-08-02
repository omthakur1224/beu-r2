import React, { useState,useEffect } from 'react'

function Right1({cart,setCart}) {
    const [total,setTotal]=useState(0);
    // let sum=(cart.reduce((prev,next)=>{prev+next},0));
    useEffect(() => {
        let sum=0;
        for(let i=0;i<cart.length;i++){
            sum+=cart[i].price;

        }
        console.log(sum,"sum")
      setTotal(sum);
    }, [cart])

  return (
    <div style={{
        "display":"flex",
        "flexDirection":"column"
    }}>
    <h1>Cart </h1>
       {cart.length>0?
       <>
            {cart.map((product,i)=>
            <div key={i} style={{
                "display":"flex",
                "justifyContent":"center",
                "alignContent":"center",
                // "margin":"center"
            }}>
                <ul>{product.name}</ul>
                <ul>{product.price}</ul>

            </div> )}
          <h1>total <span>{total}</span></h1>  
       </> : 
       <h1>cart is empty</h1> 
       }
    </div>
  )
}

export default Right1
