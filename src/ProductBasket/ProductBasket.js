import React, { useContext, useEffect, useState } from "react";

import { fetchMock } from "../LangSwitchComponents/fetchMock";
import LangContext from "../LangSwitchComponents/LangContext";
import "./ProductBasket.css";
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from "./styles"
import { Link } from 'react-router-dom';
import CheckOutProduct from '../CheckOutProduct'

function ProductBasket({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) {
  const { lang, currentLangData } = useContext(LangContext);
  const [state, setState] = useState([]);
  const classes = useStyles();
  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  useEffect(() => {
    fetchMock(lang).then(setState);
  }, [lang]);


  if (!cart.line_items) return 'Loading';


  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CheckOutProduct item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/payment" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );




  return (
    <Container>

      <div className={classes.toolbar} />

      <Typography className={classes.title} variant="h3">
        Your Shopping Cart

    </Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart()}

    </Container>


  );
}

export default ProductBasket;