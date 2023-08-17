import React, {useEffect, useState} from "react";
import handbags from "../images/handbags.png";
import laptops from "../images/laptops.png";
import shoes from "../images/shoes.png";
import smartphones from "../images/smartphones.png";
import watches from "../images/watches.png";
import clothes from "../images/clothes.png";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import usersdetails from "./users";

const Sell = (props) => {
    const { email, password } =
    (props.location && props.location.newUser) || {};

    const [users, setUsers] = useState(usersdetails);
    
    useEffect(() => {
        //const json = localStorage.getItem("users");
        const json = localStorage.getItem("users");
        const loadedUsers = JSON.parse(json);
        if (loadedUsers) {
          setUsers(loadedUsers);
        }
      }, []);

    useEffect(() => {
        if(users.length > 0) {
            const json = JSON.stringify(users);
            localStorage.setItem("users", json);
        }
      }, [users]);
      console.log(email);

    return (
        <div class="cont1">
            <div id="search">
            <div id="links2">
                <button class="links2">
                    <Link to="./addproduct" target="_parent" style={{color:"#FFCB05"}}>Add a Product</Link>
                </button>
                <button class="links2">
                    <Link to="./viewproducts" target="_parent" style={{color:"#FFCB05"}}>View My Products</Link>
                </button>
            </div>
            </div>
        </div>
    )
}

export default Sell;