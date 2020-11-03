import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductBasket from "./ProductBasket";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Register from "./Register";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders"

const promise = loadStripe(
  "pk_test_51HiJYeKu3e8b0VKUIbwpuEVL5AHLZVrdZArMY3XYQExN2uzYiSLRCPJzu7yVlMFTyPwpY3tWsGh7NcGDIS9znEQD00dXsZWqcl"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          {" "}
          /** what switch does is to find the FIRST component that matches the
          criteria instead of going through all of them Switch needs to be
          declared once and wraps all of the components that it should be
          applied to */
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/" exact component={Home}></Route>/**since the slash
          requirement includes all paths it needs to be "exact". That ensures
          that it needs to be a slash, and NO more */
          <Route path="/shoppingCard">
            <ProductBasket></ProductBasket>
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
