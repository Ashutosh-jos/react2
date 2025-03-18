import React, { useState } from 'react';

import Cart from './Cart';

const RestaurantCategory = ({ data }) => {
    // Destructure nested properties
    const { title, itemCards } = data?.card?.card || {};

    // State to manage accordion open/close
    const [isOpen, setIsOpen] = useState(false);

  
    // If data or nested properties are not available, return null or a fallback UI
    if (!data || !data.card || !data.card.card) {
        return null; // or return a loading/error message
    }

    return (
        <div style={{ marginLeft: '230px' }}>
            <div
                className="m-3"
                style={{
                    textAlign: 'center',
                    margin: 'auto',
                    background: 'white',
                    padding: '5px',
                    cursor: 'pointer',
                    width: '700px',
                    marginLeft: '300px',
                    borderRadius: '8px',
                    boxShadow: '5px 5px 2px rgb(158, 137, 231)',
                }}
            >
                {/* Accordion Header */}
                <div
                    onClick={() => setIsOpen(!isOpen)} // Toggle accordion on click
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1em',
                        padding: '5px 0',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        color: 'rgb(83, 83, 85)',
                    }}
                >
                    {title} {isOpen ? '▲' : '▼'} {/* Add an arrow to indicate state */}
                </div>

                {/* Accordion Content (Conditionally Rendered) */}
                {isOpen && itemCards && (
                    <div style={{ marginTop: '20px' }}>
                        {itemCards.map((item, index) => (
                           <Cart key={index} item={item}/>
                        ))}
                    </div>
                )}
            </div>

            {/* Render the Cart component outside the loop */}
            {/* <Cart item={item} /> */}
        </div>
    );
};

export default RestaurantCategory;