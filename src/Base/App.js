import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import ProductBasket from "../ProductBasket/ProductBasket";
import { useStateValue } from "../Providers/StateProvider";
import Register from "../Register/Register";
import "./App.css";
import 'dotenv'
import Checkout from '../Payment/Checkout/Checkout'
import { commerce } from '../lib/commerce'
import { CssBaseline } from "@material-ui/core";
import images from '../Images/Images'
import Banner from '../Banner/Banner'
import MediaQuery from 'react-responsive'
import Drawer from '@material-ui/core/Drawer';


function App() {
  const [mobileOpen, setMobileOpen] = useState(false);


  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([])
  const [errorMessage, setErrorMessage] = useState('');
  const [order, setOrder] = useState({});

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    fetchProducts();

    fetchCart();

    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        console.log(authUser);
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


  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data)
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart)
  }
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);


  return (
    <Router>
      <CssBaseline />

      <Header totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
      <Switch>
        <Route path="/orders">
          <Orders></Orders>
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/" exact>
          <MediaQuery minDeviceWidth={1024} >
            <Banner slides={images} />

          </MediaQuery>

          <Home products={products} onAddToCart={handleAddToCart} handleUpdateCartQty></Home>
          <Drawer></Drawer>
        </Route>
        <Route path="/shoppingCard">
          <ProductBasket cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}></ProductBasket>
        </Route>
        <Route path="/payment">
          <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}></Checkout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
