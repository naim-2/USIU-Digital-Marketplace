import React from "react";
import usiu from "../images/usiu.png";
import user from "../images/user.png";
import "../css/search.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/" target="_parent"><img id="logo" src={usiu}></img></Link>
      <div id="leftheader"></div>
      <h1 id="maintitle">USIU DIGITAL MARKETPLACE</h1>
      <h4 id="catchy">THE ENTIRE USIU MARKETPLACE AT YOUR FINGERTIPS</h4>
      <div id="rightheader"></div>
      <div id="user">
        <a href="#"><img src={user}></img></a>
        <div id="links">
          <Link to="./signup" target="_parent"><button>SIGN UP</button></Link>
          <Link to="/login" target="_parent"><button>LOG IN</button></Link>
        </div>
      </div>
      <div id="bottomheader"></div>
    </header>
  );
};

export default Header;