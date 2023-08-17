import React from "react";
import "../css/clothes.css";
import array from "./array.js";
import "../css/button.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const GoodsDetails = (props) => {
  const id = props.id;

  function myFunction () {
      // Declare variables
      var input, filter, ul, li, a, i;
      input = document.getElementById("clothesmySearch");
      filter = input.value.toUpperCase();
      ul = document.getElementById("clothesmyMenu");
      li = ul.getElementsByTagName("li");
    
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
  return (
    <div id="cont3">
        <div id="clothessearch">
            {/* array.id = {"5"};*/}
            {array.map((item) => {
              if(item.id==id){
              return(
                <div>
                  <ul id="clothesmyMenu2">
                  <li display="none"><img src={item.image}></img>
                  <div id="details">
                    <p class="blue">{item.price}<br></br></p>
                    <p class="black">{item.name}<br></br></p>
                    <p class="grey">{item.desc}<br></br></p>
                    <p class="grey">{item.loc}<br></br></p>
                    <p class="blue">{item.gender}  &nbsp;&nbsp;&nbsp;&nbsp; {item.size}<br></br></p>
                  </div></li></ul>
                  <button class="button-82-pushable" role="button">
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">
                      <a style={{color:'white'}} href={`tel:${item.phonenumber}`}>Call: &nbsp; {item.phonenumber}</a>
                    </span>
                  </button>
                  <button class="button-82-pushable" role="button">
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">
                      <a style={{color:'white'}} href={`mailto:${item.email}`}>Email: &nbsp; {item.email}</a>
                    </span>
                  </button>
                  <p id="warning">
                    Don't send any pre-payments.
                    Meet the seller at a safe public place.
                    Inspect the goods to make sure they meet your needs
                    and pay if you're satisfied.
                  </p>
                </div>
              );
              
            }}
            )}
        </div>
    </div>
  )
}

export default GoodsDetails;