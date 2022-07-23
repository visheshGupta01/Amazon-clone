import React, { useEffect } from "react";
import Header from "../src/components/header/header";
import Home from "../src/screens/home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from '../src/screens/checkout/checkout'
import Login from "./screens/login/login";
import { auth } from "./firebase";
import { useStateValue } from "./components/context api/stateProvider";
import Payment from "./screens/payment/payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KXNbLSCavaof5SkckIdopxi1vuCv5X7wUYUdKvxgvZLbWJbsNUtMAN10aUv2G3hw13yuLNaH58SGVEbuXGAk5IJ00B5iwUNhb"
);

function App() {

const [{},dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The User Is >>>", authUser)
      
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
  })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />            
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
