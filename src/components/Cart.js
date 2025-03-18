// import React from 'react'
// import { useSelector } from 'react-redux'

// const Cart = () => {
//     const cardItems=useSelector((store)=>store.cart.items);
//   return (
//     <div className="text-center m-10 p-10"><h1 className='text-2xl font-bold'>
        
        
//         Cart
//         </h1>
//         </div>
    
// )
// }

// export default Cart

import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';


const Cart= (props) => {
  const  {item}=props;
//   console.log(item)
const dispatch =useDispatch()
    const handleAddItem=(item)=>{
dispatch(addItem(item))
    }
  return (
    // <div>{item.name} </div>
    <div
                                
                                style={{
                                    display: 'flex',
                                    marginBottom: '15px',
                                    padding: '15px',
                                    background: '#f8f9fa',
                                    borderRadius: '8px',
                                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                                    alignItems: 'center',
                                    transition: 'all 0.3s',
                                }}
                            >
                                {/* Image Section */}
                                <div style={{ flex: '0 0 120px', paddingRight: '20px' }}>
                                    <img
                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,/${item.card.info.imageId}`}
                                        alt={item.card.info.name}
                                        style={{
                                            width: '100%',
                                            height: '120px',
                                            objectFit: 'cover',
                                            borderRadius: '8px', // Rounded image
                                        }}
                                    />
                                </div>

                                {/* Content Section */}
                                <div style={{ flex: 1 }}>
                                    <h5
                                        style={{
                                            fontSize: '1.2em',
                                            fontWeight: '600',
                                            marginBottom: '10px',
                                            color: '#333',
                                        }}
                                    >
                                        {item.card.info.name}
                                    </h5>
                                    <p
                                        style={{
                                            fontSize: '1em',
                                            fontWeight: 'bold',
                                            color: '#333',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        ₹{(item.card.info.price / 100) || (item.card.info.defaultPrice / 100)}
                                    </p>
                                    <p style={{ fontSize: '14px', color: '#6c757d', marginBottom: '10px' }}>
                                        {item.card.info.description || 'No description available.'}
                                    </p>

                                    {/* Rating */}
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <span style={{ color: '#f39c12', marginRight: '5px' }}>★</span>
                                        <small style={{ color: '#6c757d', fontSize: '12px' }}>
                                            {item.card.info.ratings?.aggregatedRating?.rating || 'N/A'} (
                                            {item.card.info.ratings?.aggregatedRating?.ratingCount || 0})
                                        </small>
                                    </div>

                                    {/* Button and Save */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '14px',
                                                color: '#28a745',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            Save ₹108
                                        </span>
                                        <button
                                            style={{
                                                padding: '8px 15px',
                                                fontSize: '14px',
                                                backgroundColor: '#007BFF',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s',
                                            }}
                                            onClick={() => handleAddItem(item)}
                                        >
                                            ADD
                                        </button>
                                    </div>
                                </div>
                            </div>
  )
}

export default Cart;