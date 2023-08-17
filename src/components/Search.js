import React from "react";
import handbags from "../images/handbags.png";
import laptops from "../images/laptops.png";
import shoes from "../images/shoes.png";
import smartphones from "../images/smartphones.png";
import watches from "../images/watches.png";
import clothes from "../images/clothes.png";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Search = () => {
    function myFunction () {
        // Declare variables
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }
    return (
        <div class="cont1">
            <div id="search">
                <input type="text" id="mySearch" onKeyUp={myFunction} placeholder="Search.." title="Type in a category"></input>
                
                <ul id="myMenu">
                <li id="testingclothes"><Link to='/clothes' target="_parent">Clothes<br></br><img src={clothes}></img></Link></li>
                <li><Link to='/bags' target="_parent">Bags<br></br><img src={handbags}></img></Link></li>
                <li><Link to='/laptops' target="_parent">Laptops<br></br><img src={laptops}></img></Link></li>
                <li><Link to='/shoes' target="_parent">Shoes<br></br><img src={shoes}></img></Link></li>
                <li><Link to='/smartphones' target="_parent">Smartphones<br></br><img src={smartphones}></img></Link></li>
                <li><Link to='/watches' target="_parent">Watches<br></br><img src={watches}></img></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Search;