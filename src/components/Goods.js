import React from "react";
import "../css/goods.css";
import array from "./array.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Goods = () => {


    return (
        <div>
            <main class="container">

            {/* Left Column / Headphones Image */}
            <div class="left-column">
                <img data-image="black" src="../images/polo.png"></img>
                <img data-image="blue" src="../images/blue.png"></img>
                <img data-image="red" class="active" src="images/red.png"></img>
            </div>
            
            {/* Right Column */}
            <div class="right-column">

                {/* Product Description */}
                <div class="product-description">
                <span>Headphones</span>
                <h1>Beats EP</h1>
                <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
                </div>

                {/* Product Configuration */} 
                <div class="product-configuration">
            
                {/* Product Color */} 
                <div class="product-color">
                    <span>Color</span>
            
                    <div class="color-choose">
                    <div>
                        <input data-image="red" type="radio" id="red" name="color" value="red" checked></input>
                        <label for="red"><span></span></label>
                    </div>
                    <div>
                        <input data-image="blue" type="radio" id="blue" name="color" value="blue"></input>
                        <label for="blue"><span></span></label>
                    </div>
                    <div>
                        <input data-image="black" type="radio" id="black" name="color" value="black"></input>
                        <label for="black"><span></span></label>
                    </div>
                    </div>
            
                </div>
            
                {/* Cable Configuration */}
                <div class="cable-config">
                    <span>Cable configuration</span>
            
                    <div class="cable-choose">
                    <button>Straight</button>
                    <button>Coiled</button>
                    <button>Long-coiled</button>
                    </div>
            
                    <a href="#">How to configurate your headphones</a>
                </div>
                </div>

                {/* Product Pricing */}
                <div class="product-price">
                <span>148$</span>
                <a href="#" class="cart-btn">Add to cart</a>
                </div>
            </div>
            </main>
        </div>
    )
}

export default Goods;