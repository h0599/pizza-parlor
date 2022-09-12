import React from "react";
import axios from "axios";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Checkout from "../Checkout/Checkout";
import { HashRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import PizzaList from "../PizzaList/PizzaList";
import Admin from "../Admin/Admin";
import CustomerInfoForm from "../CustomerInfoForm/CustomerInfoForm";

function App() {

 
  const [customerInfo, setCustomerInfo] = useState([]);

  
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchPizza();
  }, []);

  const fetchPizza = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        console.log("GET /api/piza list is", response);
        dispatch({
          type: "SET_PIZZA_LIST",
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("Error getting pizza list", response);
      });
  };

  return (
    <Router>
      <div className="App"></div>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Thee Pizza Parlor </h1>
        </header>

        <Route path="/" exact>
          <PizzaList />
        </Route>

        <Route path="/customer-info-form" exact>
          <CustomerInfoForm setCustomerInfo={setCustomerInfo}/>
        </Route>

        <Route path="/checkout" exact>
          <Checkout customerInfo={customerInfo}/>
        </Route>

        <Route path="/admin" exact>
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
