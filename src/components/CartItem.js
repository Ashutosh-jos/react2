import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart';

const CartItem = () => {
    const cardItems=useSelector((store)=>store.cart.items);
    // console.log(cardItems)
  return (
    <div className="text-center m-10 p-10"><h1 className='text-2xl font-bold'>
        
        
        Cart
        </h1>
        {cardItems.map((res,index)=>
        (
            <Cart key={index} item={res}/>
        )
        )}
        </div>
    
)
}

export default CartItem