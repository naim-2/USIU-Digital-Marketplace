import React, {useEffect, useState} from "react";
import handbags from "../images/handbags.png";
import laptops from "../images/laptops.png";
import shoes from "../images/shoes.png";
import smartphones from "../images/smartphones.png";
import watches from "../images/watches.png";
import clothes from "../images/clothes.png";
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import "../css/tables.css";
import goods from "./array";

const ViewProduct = () => {
    //console.log(email);
    
    //const email = props.email;
    const [gooddetails, setGooddetails] = useState(goods);

    useEffect(() => {
        //const json = localStorage.getItem("users");
        const json = localStorage.getItem("gooddetails");
        const loadedUsers = JSON.parse(json);
        if (loadedUsers) {
          setGooddetails(loadedUsers);
        }
      }, []);

    useEffect(() => {
        if(gooddetails.length > 0) {
            const json = JSON.stringify(gooddetails);
            localStorage.setItem("gooddetails", json);
        }
      }, [gooddetails]);
      

    return (
        <div class="cont1">
            <div id="search">
                <table id="movebottom">
                    <tr>
                        <th colspan="7">Your Products</th>
                    </tr>
                    {goods.map((details) => {
                            return(
                                <div>
                                    <tr>
                                        <td rowspan="2"><img src={details.image}></img></td>
                                        <td>Category: {details.type}</td>
                                        <td>Name: {details.name}</td>
                                        <td>Price: {details.price}</td>
                                        <td>Gender/Company: {details.gender}</td>
                                        <td>Size/Type: {details.size} </td>
                                        <td>Condition: {details.condition} </td>
                                    </tr>
                                    <tr>
                                        <td colspan="7">Description: {details.desc} </td>
                                    </tr>
                                </div>
                            )})}
                </table> 
            <div id="links2">
                <button class="links2" id="movetop">
                    <Link to="./addproduct" target="_parent" style={{color:"#FFCB05"}}>Add Product</Link>
                </button>
            </div>
            </div>
        </div>
    )
}

export default ViewProduct;