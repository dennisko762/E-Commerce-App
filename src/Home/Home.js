import React from "react";
import Product from "../Product/Product";
import "./Home.css";
import { CssBaseline, Grid } from '@material-ui/core'
import useStyles from '../Product/styles'

function Home({ products, onAddToCart }) {


  const classes = useStyles();


  return (
    <>
      <CssBaseline />

      <div className="home">

        <main className="products">
          <div className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4} >
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} onAddToCart={onAddToCart}>

                  </Product>
                </Grid>
              ))}

            </Grid>
          </div>
        </main>
      </div >
    </>
  );
}

export default Home;
