import React from "react";
import "../css/clothes.css";
import array from "./array.js";
import array2 from "./array2.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Clothes = (props) => {
  const goods = props.goods;

  function myFunction () {
      // Declare variables
      var input, filter, ul, li, a, i;
      input = document.getElementById("clothesmySearch");
      filter = input.value.toUpperCase();
    
      // let count = 0;
      // {array.map((item) => {
      //   if(item.type==goods){
      //     count += 1;
      //   }
      // })}
      
      // Loop through all list items, and hide those who don't match the search query
      if(document.getElementById("clothesmyMenu")!=null){
        ul = document.getElementById("clothesmyMenu");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
          if(li[i].getElementsByTagName("div")[0]!=null){
            a = li[i].getElementsByTagName("div")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
            } else {
              li[i].style.display = "none";
            }
          }
        }
      }
    }
  return (
    <div class="cont2">
        <div id="clothessearch">
            <input type="text" id="clothesmySearch" onKeyUp={myFunction} placeholder="Search.." title="Type in a category"></input>
            {/* array.id = {"5"};*/}
            <div id="dashboard">
              <div>
                <p>Menu</p>
                <ul id="menu">
                {array2.map((item2) => {
                  if(item2.type!=goods){
                    return(
                      <Link to={`/${item2.type}`} target="_parent" style={{color:'#FFCB05'}}><li>{item2.type}<br></br></li></Link>
                    )
                  }
                })}
                </ul>
              </div>
            </div>
            <h3 id="goodstitle">{goods.toUpperCase()}</h3>
            {array.map((item) => {
              if(item.type==goods){
              return(
                <Link to={`/${item.name}`} target="_parent">
            <ul id="clothesmyMenu">
            <li display="none"><img src={item.image}></img>
              <div id="details">
                <p class="blue">{item.price}<br></br></p>
                <p class="black">{item.name}<br></br></p>
                <p class="grey">{item.desc}<br></br></p>
                <p class="grey">{item.loc}<br></br></p>
                <p class="blue">{item.gender}  &nbsp;&nbsp;&nbsp;&nbsp; {item.size}<br></br></p>
              </div></li></ul></Link>
              );
            }}
            )}
        </div>
    </div>
  )
}

export default Clothes;