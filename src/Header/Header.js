import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Badge,
  Menu,
  Typography,
} from "@material-ui/core";
import "./Header.css";
import useStyles from "./styles";
import { ShoppingCart } from "@material-ui/icons";
import { RiShoppingBasketLine } from "react-icons/ri";

function Header({ totalItems }) {
  //const { lang, currentLangData } = useContext(LangContext);
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  useEffect(() => {}, []);

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography className={classes.title}>Webshop</Typography>
          </Link>

          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton aria-label="Show cart items">
              <Badge badgeContent={totalItems} color="secondary">
                <Link to="/shoppingCard">
                  <RiShoppingBasketLine className={classes.cart} />
                </Link>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
    </>
  );
}

export default Header;
