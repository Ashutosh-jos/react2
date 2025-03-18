import { useEffect,useState } from "react";
import myobj from "../utils/mockData";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [list,setlist]=useState([]);
    const [filtereslist,setfiltereslist]=useState([])
    const [Search,setSearch]=useState("")
    // const arr=useState(myobj);
    // [list,setlist]=arr
// console.log("render")
    useEffect(()=>{
      fetchData();
    },[])
  let a=[];
    const fetchData = async () => {
      
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.23310&lng=78.16920&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const json = await response.json();
        const k=json.data.cards

        for (i=3; i<k.length; i++) {
          // optional chaning
        // console.log(k[i].card.card.info);
        a.push(k[i].card.card.info)
        
        
      } 
        setlist(a);
        setfiltereslist(a);

    };

    // conditional Rendering
    if (list.length ==0){
      return <Shimmer/>;
    };
    return(  <>
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
        const filterdarray = filtereslist.filter((res) => res.avgRating > 4.0);
        setfiltereslist(filterdarray);
      }}
    >
      <i className="fas fa-filter me-2"></i> Filter 4.0
    </button>
  </div>






  {/* Right Side: Search Input and Button */}
  <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
    <input
      className="form-control me-2 shadow-sm rounded-3"
      // style={{marginLeft: "990px"}}
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
  onClick={()=>{
     const filterseacrh= list.filter((res)=>
        res.name.toLowerCase().includes(Search.toLowerCase())
      );
      if (filterseacrh.length>0){
      setfiltereslist(filterseacrh)}
      else{
        alert("👎🏻👎🏻 There is no item found");
      }
    }}>
      <i className="fas fa-search me-2"></i> Search
    </button>
    </form>
</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px",marginLeft:"10px",marginTop:"-11px"}}>
          {/* <Card resData={myobj[1]}/>   
          <Card resData={myobj[2]}/>    */}
               {/* <Card name={myobj[1].name}/> */}

               {filtereslist.map((restaurant) => (
          <Card key={restaurant.id} resData={restaurant} />

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
      </>
  )};

  export default Body