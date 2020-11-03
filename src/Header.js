import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth, admin } from "./firebase";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import { fetchMock } from "./fetchMock";
import { useState, useEffect } from "react";
import LangContext from "./LangContext";
import LangSwitch from "./LangSwitch";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [state, setState] = useState([]);
  const { lang, currentLangData } = useContext(LangContext);

  //---to use the language we inject it into our state and we repeat it everytime "lang" changes
  useEffect(() => {
    fetchMock(lang).then(setState);
  }, [lang]);

  const handleSign = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        ></img>
      </Link>

      <div className="header_search">
        <input className="header_searchIn" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>
      <LangSwitch />
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleSign} className="header_option dropdown">
            <div className="dropdown-content">
              <div className="signInDiv">
                <button className="sign-In">Sign In</button>
                <p className="newCustomer">
                  New customer{" "}
                  <a href="click Here" target="_blank">
                    click here
                  </a>
                </p>
              </div>

              <div className="lowerDiv">
                <div className="Lists">
                  <h5>Your Lists</h5>
                  <ul className="list">
                    <li>Create a List</li>
                    <li>Find a List or Registry</li>
                    <li>Find a Gift</li>
                    <li>Save Items from the Web</li>
                    <li>Wedding Registry</li>
                    <li>Baby Registry</li>
                    <li>Friends & Family Gifting</li>
                    <li>AmazonSmile Charity Lists</li>
                    <li>Paintry Lists</li>
                    <li>Your Hearts</li>
                    <li>Explore Idea Lists</li>
                    <li>Explore Showroom</li>
                  </ul>
                </div>
                <div className="YourAccount">
                  <h5>Your Account</h5>
                  <ul className="list">
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Your Recommendations</li>
                    <li>Memberships & Subscriptions</li>
                    <li>Your Garage</li>
                    <li>Your Fanshop</li>
                    <li>Your Content and Devices</li>
                    <li>Your Music Library</li>
                    <li>Your Amazon Drive</li>
                    <li>Your Prime Video</li>
                    <li>Your Kindle Unlimited</li>
                    <li>Your Watchlist</li>
                    <li>Your Video Purchases</li>
                    <li>Your Android Apps % Devices</li>
                    <li>item4</li>
                  </ul>
                </div>
              </div>
            </div>

            <span className="optionLineOne">
              Hello{" "}
              {user ? auth.currentUser.displayName : currentLangData.lang.guest}
            </span>

            <span className="optionLineTwo">
              {user
                ? currentLangData.lang.signOut
                : currentLangData.lang.signIn}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="optionLineOne">{currentLangData.lang.returns}</span>

          <span className="optionLineTwo">{currentLangData.lang.orders}</span>
        </div>

        <div className="header_option">
          <span className="optionLineOne">{currentLangData.lang.yours} </span>
          <span className="optionLineTwo">Prime</span>
        </div>
        <Link to="/shoppingCard">
          <div className="header_optionBasket">
            <div className="basketInfo">
              <ShoppingBasketIcon></ShoppingBasketIcon>
              <span id="basketTag">{currentLangData.lang.yourBasket}</span>
            </div>

            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
