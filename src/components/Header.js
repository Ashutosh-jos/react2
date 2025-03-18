import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserData from '../utils/UserData';
import { useSelector } from 'react-redux';
const Header = () => {
  const [btnlogin,setbtnlogin]=useState("Login")
  const onlineStatus=useOnlineStatus()
  const {loginuser}=useContext(UserData)
  const cardItems=useSelector((store)=>store.cart.items);
  // console.log(loginuser)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  p-0"style={{background:"white"}}>
      <img className="logo" src="https://img.freepik.com/premium-vector/burger-logo-design_599480-757.jpg?w=740" alt="Logo" />
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="visually-hidden">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Grocery">Grocery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart-({cardItems.length} items)</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link " to="/contact" >
              Contact
            </Link>
          </li>
        </ul>
        {/* Online Status Button */}
        <button
          className={`btn ${onlineStatus ? "btn-success" : "btn-danger"} btn-sm`}
          style={{
            fontSize: "14px",
            marginLeft: "15px",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {onlineStatus ? (
            <>
              <i className="fas fa-check-circle" style={{ marginRight: "5px" }}></i>
              Online
            </>
          ) : (
            <>
              <i className="fas fa-times-circle" style={{ marginRight: "5px" }}></i>
              Offline
            </>
          )}
        </button>
        
      </div>
      
      <button className="btn btn-outline-success"onClick={()=>{
        btnlogin==="Login"?
        setbtnlogin("Logout"):
        setbtnlogin("Login")
                }} type="login">{btnlogin}</button>
                <h3>{loginuser}</h3>
    </nav>
    </>
  );
};


export default Header;
