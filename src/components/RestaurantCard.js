import React from 'react'

 const RestaurantCard = (props) => {
    const {res}=props
  return (
    <>
    <div className="image-container">
                  <img
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fit/${res.imageId}`}
                            alt={res.name}
                            className="menu-image"
                        />
                    </div>
                    <div className="menu-details">
                    {/* {res.isBestseller && <label className="badge bg-success">Bestseller</label>} */}
                        <h2 className="menu-name">{res.name}</h2>
                        <div className="price-rating-container">
                            <span className="menu-price">₹{res.defaultPrice / 100 || res.price / 100}</span>
                            <span className="menu-rating">{`⭐ ${res.ratings?.aggregatedRating?.rating || 'Not Rated'}`}</span>
                        </div>
                    </div>
    </>
  )
}

export const withbestseller=(RestaurantCard)=>{
    return()=>{
        return(
            <div>
<label>isBestseller</label>
<RestaurantCard {...props}/>
            </div>
        )
}}
export default RestaurantCard