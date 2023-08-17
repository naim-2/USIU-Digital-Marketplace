import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import usersdetails from "./users";

const HomePage = (props) => {
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

    var username = "";

    for(let i=0; i<users.length; i++){
        if(users[i].email==email){
            username = users[i].username;
        }
    }

    return (
        <div>
            <br></br>
            <h1>Welcome {username}!</h1>
            <Search />
        </div>
    )
}

export default HomePage;