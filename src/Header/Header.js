import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../Firebase/firebase";

import { useStateValue } from "../Providers/StateProvider";
import { AppBar, Toolbar, IconButton, MenuItem, Badge, Menu, CssBaseline, Typography, Button } from '@material-ui/core'
import "./Header.css";
import useStyles from './styles'
import { Label, ShoppingCart } from '@material-ui/icons';
import { RiShoppingBasketLine } from 'react-icons/ri'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MediaQuery from 'react-responsive'
import MenuIcon from '@material-ui/icons/Menu';
import Dropdown from 'react-bootstrap/Dropdown'
function Header({ totalItems }) {
  const [{ user }] = useStateValue();
  //const { lang, currentLangData } = useContext(LangContext);
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const location = useLocation();



  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';


  useEffect(() => {


  }, []);


  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
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
      {/* <MediaQuery minDeviceWidth={1024} >
        {(matches) =>
          matches ? */}
      <AppBar className={classes.appBar}  >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography className={classes.title}>
              Webshop
      </Typography></Link>


          <div className={classes.grow} />
          {/* This is yet to be implemented
                  <Tabs
                  className={classes.tabs}
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                 <Link style={{ textDecoration: "none" }} to="/">
                    <Tab className={classes.tab} label="Home" />

                  </Link>

                  <Tab className={classes.tab} label="Categories" />
                </Tabs> */}
          {/* <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    className={classes.input}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div> */}

          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="white">
              <Badge badgeContent={totalItems} color="secondary">
                <Link to="/shoppingCard">
                  <RiShoppingBasketLine className={classes.cart} />
                </Link>


              </Badge>
            </IconButton>
          </div>



        </Toolbar>

      </AppBar>

      {/* <div className={classes.root}>

               <AppBar className={classes.appBar}>
                 <Toolbar>

                   <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">

                      <MenuIcon style={{ marginLeft: "10%" }} />
                     </Dropdown.Toggle>

                     <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                     </Dropdown.Menu>
                   </Dropdown>

                    <div className={classes.search}>
                     <div className={classes.searchIcon}>
                       <SearchIcon />
                     </div>
                     <InputBase
                      placeholder="Search…"
                       className={classes.input}
                       inputProps={{ 'aria-label': 'search' }}
                     />
                   </div> 
                  <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="white">
                     <Badge badgeContent={totalItems} color="secondary">
                        <Link to="/shoppingCard">
                         <RiShoppingBasketLine className={classes.cart} />
                       </Link>


                     </Badge>
                    </IconButton>
                  </div>

                 </Toolbar>

              </AppBar>
             </div> */}
      { renderMobileMenu}



      {/* </MediaQuery> */}


    </>
  );
}

export default Header;
