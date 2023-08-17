import React, {useState, useEffect} from 'react';
import "../css/signup.css";
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import usersdetails from "./users";
import "../css/toggleswitch.css";

function SignUp() {
    const  [email, setEmail] =  useState("");
    const  [username, setUsername] =  useState("");
    const  [password, setPassword] =  useState("");
    const  [phonenumber, setPhonenumber] =  useState("");
    const  [location, setLocation] =  useState("");

    const [users, setUsers] = useState(usersdetails);

    const history = useHistory();

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

    const  handleEmail = (event) => {
		setEmail(event.target.value);
	};
	const  handleUsername = (event) => {
		setUsername(event.target.value);
	};
    const  handlePassword = (event) => {
		setPassword(event.target.value);
	};
    const  handlePhonenumber = (event) => {
		setPhonenumber(event.target.value);
	};
    const  handleLocation = (event) => {
		setLocation(event.target.value);
	};

    function handleSubmit(e) {
        e.preventDefault();
      
        const newUser = {
          id: new Date().getTime(),
          email: email.trim(),
          username: username.trim(),
          password: password.trim(),
          phonenumber: phonenumber.trim(),
          location: location.trim(), 
        };
        var count = 0;

        for(let i=0; i<users.length; i++){
            if(users[i].email==newUser.email){
                count = 20;
            }
        }

        if (newUser.password.length > 7 && newUser.phonenumber.length == 10 && count == 0) {
            setUsers([...users].concat(newUser));
            setEmail("");
            setUsername("");
            setPassword("");
            setPhonenumber("");
            setLocation("");
            alert("Successfully signed up. Please log in! ");
            history.push('./login');
        } else if(newUser.password.length < 8){
            alert("Password is too short!");
            setPassword("");
        } else if(newUser.phonenumber.length != 10){
            alert("Wrong phone number!")
            setPhonenumber("");
        } else{
            alert("Email already exists!")
            setEmail("");
            count = 0;
        }
      }

    return(
        <div class="signupSection">
            <div class="info">
                <h2>Welcome to USIU Digital Marketplace.</h2>
                <br></br>
                <p>Just a few clicks away...</p>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Link to="./login" target="_parent"><button class="signupbuttons">LOG IN</button></Link>
            </div>
            <form onSubmit={handleSubmit} class="signupForm" name="signupform">
                <h2>Sign Up</h2>
                <ul class="noBullet">
                <li>
                    <label for="email"></label>
                    <input type="email" class="inputFields" id="email" name="email" placeholder="Email" value={email} onChange={handleEmail} required/>
                </li>
                <li>
                    <label for="username"></label>
                    <input type="text" class="inputFields" id="username" name="username" placeholder="Username" value={username} onChange={handleUsername} required/>
                </li>
                <li>
                    <label for="password"></label>
                    <input type="password" class="inputFields" id="password" name="password" placeholder="Password" value={password} onChange={handlePassword} required/>
                </li>
                <li>
                    <label for="phonenumber"></label>
                    <input type="tel" class="inputFields" id="phonenumber" name="phonenumber" placeholder="0712345678" value={phonenumber} onChange={handlePhonenumber} required/>
                </li>
                <li>
                    <label for="location"></label>
                    <input type="text" class="inputFields" id="location" name="location" placeholder="Location" value={location} onChange={handleLocation} required/>
                </li>
                <li id="center-btn">
                    <input type="submit" id="join-btn" name="join" alt="Join" value="JOIN"></input>
                </li>
                </ul>
            </form>
        </div>
    )
}

export default SignUp;