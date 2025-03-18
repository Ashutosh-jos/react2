import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    const [list,setlist]=useState([]);
    
    const {resId}=useParams()
    useEffect(()=>{
        fetchData()
    },[])
    let a=[];
    let aa=[]
    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.75521&lng=75.8968202&restaurantId=" +
                resId +
                "&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await response.json();
        const k = json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards//[1]?.card?.card?.itemCards;

        if (k && k.length > 0) {
            let a = [];
            for (let i = 0; i < k.length; i++) {
                a.push(k[i])//.card.info);
              

            }
            setlist(a);
        } else {
            setlist([]); // Set an empty array if no items found
        }
    };
    const category = list.filter((res) => {
        return (
            res.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            res.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
    });
    // console.log(list)
    // console.log(category)
   

if (list.length===0){
    return<h1>item is not available</h1>
}


return (
     <div className="menu-list">
            <div className="text-center">
                {category.map((res) => (
                    <RestaurantCategory
                        key={res.card.card.title}
                        data={res}
                    />
                ))}
            </div>
        </div>
);
};

export default RestaurantMenu;