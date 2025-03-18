import { useContext, useEffect,useState } from "react";
import myobj from "../utils/mockData";
import Card from "./Card";
import Shimmer from "./Shimmer";
import Body from "./Body";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Slider from "react-slick";  // Import the slick slider
import UserData from "../utils/UserData";

const Body2=()=>{

    const [list,setlist]=useState([]);
    const [filtereslist,setfiltereslist]=useState([])
    const [Search,setSearch]=useState("")
    const [imm, setImm] = useState([]);
    const onlineStatus = useOnlineStatus();
    const {loginuser,setusername}=useContext(UserData)
     
    // const arr=useState(myobj);
    // [list,setlist]=arr
// console.log("render")
    useEffect(()=>{
      fetchData();
    },[])
  let a=[];
    const fetchData = async () => {
     
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.75521&lng=75.8968202&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"        
                );
           const json = await response.json();





           let im = [];
           let images = json.data.cards[0].card.card.imageGridCards.info;
           
           for (let j = 0; j < images.length; j++) {
             im.push(images[j].imageId);
           }
           setImm(im);










         //   console.log(json);
           let k=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
           // console.log(k);
           for (let i=0; i<k.length; i++) {
          //  console.log(k[i].info);
           a.push(k[i].info)
        
        
      } 
        setlist(a);
        setfiltereslist(a);

    };
   
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6, // Show 6 images at a time
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024, // For screens smaller than 1024px
          settings: {
            slidesToShow: 4, // Show 4 images at a time on smaller screens
          }
        },
        {
          breakpoint: 768, // For screens smaller than 768px
          settings: {
            slidesToShow: 2, // Show 2 images at a time on mobile screens
          }
        }
      ]}

    // conditional Rendering
    if (list.length ==0){
      return <Shimmer/>;
    };
    if (onlineStatus===false){
      return <h3>Oops !
        <pre>check your internet.... </pre></h3>}
    return(  <div style={{  marginTop: "10px" }}>
   
    <h1>Near Restaurants You</h1>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
  {/* Left Side: Reset and Filter Buttons */}
  <div>
    <button
      className="reset btn btn-outline-danger me-3 px-4 py-2 rounded-3 shadow-sm"
      onClick={() => {
        setfiltereslist(list);
      }}
    >
      <i className="fas fa-undo me-2"></i> Reset
    </button>
    <button
      className="ashu btn btn-outline-primary px-4 py-2 rounded-3 shadow-sm"
      onClick={() => {
        const filterdarray = filtereslist.filter((res) => res.avgRating > 4.3);
        setfiltereslist(filterdarray);
      }}
    >
      <i className="fas fa-filter me-2"></i> Filter 4.3
    </button>
  </div>
<input value={loginuser}
onChange={(e)=>{
  setusername(e.target.value)
}}
/>



  {/* Right Side: Search Input and Button */}
  <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
    <input
      className="form-control me-2 shadow-sm rounded-3"
      // style={{marginLeft: "950px"}}
      value={Search}
      onChange={(e)=>{
        setSearch(e.target.value)
      }}
      placeholder="Search"
      aria-label="Search"
    />
    
    <button 
      className="btn btn-outline-success px-4 py-2 rounded-3 shadow-sm" 
      type="submit" 
      onClick={() => {
        const filterseacrh = list.filter((res) =>
          res.name.toLowerCase().includes(Search.toLowerCase())
        );
        if (filterseacrh.length > 0) {
          setfiltereslist(filterseacrh);
        } else {
          alert("👎🏻👎🏻 There is no item found");
        }
      }}>
      <i className="fas fa-search me-2"></i> Search
    </button>
</form>
</div>
{/* Carousel Section */}
      <div style={{ width: "80%", margin: "20px auto", background:"white" }}>
        <Slider {...sliderSettings}>
          {imm.map((res, index) => (
            <div key={index}>
              <img
                style={{
                  width: "160px", // Smaller image size
                  height: "auto",
                  borderRadius: "10px",
                  margin: "0 auto"
                }}
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + res}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px",marginLeft:"10px",marginTop:"-11px" }}>
          {/* <Card resData={myobj[1]}/>   
          <Card resData={myobj[2]}/>    */}
               {/* <Card name={myobj[1].name}/> */}

               {filtereslist.map((restaurant) => (
          <Link to={"/restaurants/"+restaurant.id} ><Card key={restaurant.id} resData={restaurant} /></Link>

          // {myobj.map((restaurant,index) => (
          //   <Card key={index} resData={restaurant} />
        ))
       }
  
      
  
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}



        </div>
        <Body/>
      </div>
  )};

  export default Body2