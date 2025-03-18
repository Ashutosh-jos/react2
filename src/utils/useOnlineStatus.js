// import { useEffect, useState } from "react"

// const useOnlineStatus=()=>{
// const [update,setupadate]=useState(true)
// useEffect=(()=>{
//     window.addEventListener("offline",()=>{
//         setupadate(false);
//     })
//     window.addEventListener("online",()=>{
//         setupadate(true);
//     })
    
// },[])

// return update
// }

// export  default useOnlineStatus


import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);  // Corrected from useStatus to useState

  useEffect(() => {
    // Event listeners should be 'online' and 'offline'

    window.addEventListener("online",  () => setOnlineStatus(true));   // 'online' should be lowercase
    window.addEventListener("offline",  () => setOnlineStatus(false)); // 'offline' should be lowercase

    // Cleanup function to remove event listeners
    
  }, []);  // Empty dependency array to run this effect only once on mount

  return onlineStatus;
};

export default useOnlineStatus;



// if (onlineStatus===false){
//     return <h3>Oops !
//       <pre>check your internet.... </pre></h3>}
// const onlineStatus = useOnlineStatus();
{/* <i className="fas fa-undo me-2"></i> Reset */}
// <i className="fas fa-filter me-2"></i> Filter 4.3