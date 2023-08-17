import React, {useState, useEffect} from 'react';
import "../css/signup.css";
import usersdetails from "./users";
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function LogIn() {

    const  [email, setEmail] =  useState('');
    const  [password, setPassword] =  useState('');
    const  [check, setCheck] =  useState(false);

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
    const  handlePassword = (event) => {
		setPassword(event.target.value);
	};
    const handleCheck = (event) => {
        setCheck(event.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
      
        const newUser = {
          email: email.trim(),
          password: password.trim(),
          check: check,
        };

        var users = usersdetails;

        for(let i=0; i<users.length; i++){
            if(users[i].email==newUser.email){
                if(users[i].password==newUser.password){
                    if(check==false){
                        alert("Successfully logged in! ");
                        history.push({pathname: './', newUser});
                        return;
                    }
                    else{
                        alert("Successfully logged in! ");
                        history.push({pathname: './sell', newUser});
                        return;
                    }
                }
                else{
                    reset();
                    return;
                }
            }
            else{
                reset();
            }
        }
    }
    function reset(){
        alert("Wrong email or password!")
        setEmail("");
        setPassword("");
    }

    return(
        <div>
            <div class="signupSection">
                <div class="info">
                    <h2>Welcome back to USIU Digital Marketplace.</h2>
                    <br></br>
                    <p>You are a few clicks away from viewing more products.</p>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <Link to="./signup" target="_parent"><button class="signupbuttons">SIGN UP</button></Link>
                </div>
                <form onSubmit={handleSubmit} class="signupForm" name="signupform">
                    <h2>Log In</h2>
                    <ul class="noBullet">
                    <li>
                        <label for="email"></label>
                        <input type="email" class="inputFields" id="email" name="email" placeholder="Email" value={email} onChange={handleEmail} required/>
                    </li>
                    <li>
                        <label for="password"></label>
                        <input type="password" class="inputFields" id="password" name="password" placeholder="Password" value={password} onChange={handlePassword} required/>
                    </li>
                    <div className="container">
                        <div className="toggle-switch">
                            <input type="checkbox" className="checkbox" name="person" id="person" onChange={handleCheck}/>
                            <label className="label" htmlFor="person">
                                <span className="inner" />
                                <span className="switch" />
                            </label>
                        </div>
                    </div>
                    <li id="center-btn">
                        <input type="submit" id="join-btn" name="join" alt="Join" value="JOIN"></input>
                    </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default LogIn;