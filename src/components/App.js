import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "../css/App.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Clothes from "./Clothes";
import array from "./array";
import GoodsDetails from "./GoodsDetails";
import Goods from "./Goods";
import Header from "./Header";
import Footer from "./Footer";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Bot from "./Bot";
import Sell from "./Sell";
import AddProduct from "./AddProduct";
import ViewProducts from "./ViewProduct";
import users from "./users";

function App() {
  {/*const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );*/}
  return (
    <div className="ui container">
      {/*<Goods/>*/}
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/clothes" component={() => <Clothes goods={"clothes"} />} />
        <Route path="/bags" component={() => <Clothes goods={"bags"} />} />
        <Route path="/laptops" component={() => <Clothes goods={"laptops"} />} />
        <Route path="/shoes" component={() => <Clothes goods={"shoes"} />} />
        <Route path="/smartphones" component={() => <Clothes goods={"smartphones"} />} />
        <Route path="/watches" component={() => <Clothes goods={"watches"} />} />
        {array.map((item) => {
          return (
            <Route path={`/${item.name}`} component={() => <GoodsDetails id={item.id} />} />
          )
        })}
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/sell" component={Sell} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/viewproducts" component={ViewProducts} />
        <Route path="./addproduct" component={AddProduct}/>
        <Route path="./viewproducts" component={ViewProducts}/>
      </Router>
      <Bot />
      <Footer />
    </div>
  );
}

export default App;
