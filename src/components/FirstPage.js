import React from "react";
import usiu from "../images/usiu.png";
import user from "../images/user.png";
import "../css/search.css";

const FirstPage = () => {
  return (
    <header>
      <img id="logo" src={usiu}></img>
      <div id="leftheader"></div>
      <h1 ID="maintitle">USIU DIGITAL MARKETPLACE</h1>
      <h4 id="catchy">THE ENTIRE USIU MARKETPLACE AT YOUR FINGERTIPS</h4>
      <div id="rightheader"></div>
      <div id="user">
        <a href="#"><img src={user}></img></a>
        <div id="links">
          <button>BUY</button>
          <button>SELL</button>
          <button>SIGN OUT</button>
        </div>
      </div>
      <div id="bottomheader"></div>
    </header>
  );
};

export default FirstPage;