import React, {useState, useEffect} from 'react';
import "../css/signup.css";
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import gooddetailsarray from "./array";
import "../css/toggleswitch.css";

function AddProduct() {
    const  [type, setType] =  useState("");
    const  [image, setImage] =  useState("");
    const  [price, setPrice] =  useState("");
    const  [name, setName] =  useState("");
    const  [desc, setDesc] =  useState("");
    const  [gender, setGender] =  useState("");
    const  [size, setSize] =  useState("");
    const  [condition, setCondition] =  useState("");

    const [gooddetails, setGooddetails] = useState(gooddetailsarray);

    const history = useHistory();

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

    const  handleType = (event) => {
		setType(event.target.value);
	};
	const  handleImage = (event) => {
		setImage(URL.createObjectURL(event.target.image));
	};
    const  handlePrice = (event) => {
		setPrice(event.target.value);
	};
    const  handleName = (event) => {
		setName(event.target.value);
	};
    const  handleDesc = (event) => {
		setDesc(event.target.value);
	};
    const  handleGender = (event) => {
		setGender(event.target.value);
	};
    const  handleSize = (event) => {
		setSize(event.target.value);
	};
    const  handleCondition = (event) => {
		setCondition(event.target.value);
	};

    function handleSubmit(e) {
        e.preventDefault();
      
        const newGooddetail = {
          id: new Date().getTime(),
          type: type.trim(),
          image: image.trim(),
          price: price.trim(),
          name: name.trim(),
          desc: desc.trim(),
          loc: "Nairobi, Nairobi CBD",
          gender: gender.trim(), 
          size: size.trim(),
          seller: "nsalim",
          phonenumber: "0794321011",
          email: "nsalim@gmail.com",
          condition: condition.trim(),
        };

        for(let i=0; i<gooddetails.length; i++){
            if(gooddetails[i].name==newGooddetail.name){
                alert("Item already exists! Try changing the name. ");
                setName("");
            }
            else{
                setGooddetails([...gooddetails].concat(newGooddetail));
                history.push({pathname: './viewproducts', newGooddetail});
                return;
            }
        }
    }

    return(
        <div class="signupSection">
            <div class="info">
                <h2>Let's Add Your Product</h2>
                <br></br>
                <p>Just a few clicks away...</p>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
            <form onSubmit={handleSubmit} class="signupForm" name="signupform">
                <h2>Add Product</h2>
                <ul class="noBullet">
                    <div id="half">
                <li>
                    <label for="type"></label>
                    <input type="text" class="inputFields" id="type" name="type" placeholder="Category" value={type} onChange={handleType} required/>
                </li>
                <li>
                    <label for="price"></label>
                    <input type="number" class="inputFields" id="price" name="price" placeholder="Price" value={price} onChange={handlePrice} required/>
                </li>
                </div>

                <div id="topmarginreduce">
                <input type="file" class="inputFields" onChange={handleImage} />
                <img src={image} />
                </div>

                
                <li>
                    <label for="name"></label>
                    <input type="text" class="inputFields" id="name" name="name" placeholder="Name" value={name} onChange={handleName} required/>
                </li>
                <li>
                    <label for="desc"></label>
                    <input type="text" class="inputFields" id="desc" name="desc" placeholder="Description" value={desc} onChange={handleDesc} required/>
                </li>
                <div id="third">
                <li>
                    <label for="gender"></label>
                    <input type="text" class="inputFields" id="gender" name="gender" placeholder="Gender" value={gender} onChange={handleGender} required/>
                </li>
                <li>
                    <label for="size"></label>
                    <input type="text" class="inputFields" id="size" name="size" placeholder="Size" value={size} onChange={handleSize} required/>
                </li>
                <li>
                    <label for="condition"></label>
                    <input type="text" class="inputFields" id="condition" name="condition" placeholder="Condition" value={condition} onChange={handleCondition} required/>
                </li>
                </div>
                <li id="center-btn">
                    <input type="submit" id="join-btn" name="join" alt="Join" value="ADD"></input>
                </li>
                </ul>
            </form>
        </div>
    )
}

export default AddProduct;