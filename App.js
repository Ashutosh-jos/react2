import React from "react";
import ReactDOM from "react-dom/client";
// const parent=React.createElement("div",{id:'parent'},[
//     React.createElement("div",{id:'child'},[
//         React.createElement("h1",{},"i am h1 tag"),
//         React.createElement("h2",{},"i am h2 tag"),

//     ]),
//     React.createElement("div",{id:'child2'},[
//         React.createElement("h1",{},"i am h1 tag"),
//         React.createElement("h2",{},"i am h2 tag"),

//     ]),
    

// ]);


// // jsx=>Babel transpiles it to React.createElement=>React.element-jsobject=>HTMLElement(render)
// const parent = <h1 id="heading"> ashutosh</h1>
// console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


const Title=()=>{
    return <h1 className="title" tabIndex={4}>Title</h1>
};

//this is call as component composition because in one functional component we pass another  functional component
// cross side scripting attrack ye ata hai by api when we run inside the {}
// but this bracket clean the data then run it again
const Header=()=>(
    <>
    <Title/>
{/* any js inside it */}
    {console.log("ashutosh")}
     <h1 className="header">ishu</h1>
     </>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(Header());

