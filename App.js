// import React from "react";
// import ReactDOM from "react-dom";
const parent=React.createElement("div",{id:'parent'},[
    React.createElement("div",{id:'child'},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am h2 tag"),

    ]),
    React.createElement("div",{id:'child2'},[
        React.createElement("h1",{},"i am h1 tag"),
        React.createElement("h2",{},"i am h2 tag"),

    ]),
    

]);

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//git config --global user.email "jashutosh2016@gmail.com.com"
