import React from "react";
import "./ProductBasket.css";
import Subtotal from "./Subtotal";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";
import { fetchMock } from "./fetchMock";
import { useState, useEffect } from "react";
import LangContext from "./LangContext";
import LangSwitch from "./LangSwitch";
import { useContext } from "react";
import { auth, admin } from "./firebase";

function ProductBasket({ title, image, price, rating }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const { lang, currentLangData } = useContext(LangContext);
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchMock(lang).then(setState);
  }, [lang]);

  return (
    <div className="basket_container">
      <div className="shoppingCard_left">
        <img
          classname="checkoutAd"
          src="https://images-na.ssl-images-amazon.com/images/G/03/credit/img20/EoSS/eos_2020_maple_ur_770x60._CB406658813_.jpg"
          alt=""
        ></img>

        <div className="shoppingCard">
          <h3>
            {currentLangData.lang.greeting},{" "}
            {user ? auth.currentUser.displayName : currentLangData.lang.guest}
          </h3>
          <h2 classname="checkout_title">Your shopping card</h2>

          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            ></CheckOutProduct>
          ))}

          {/* <div className="shoppingCard_row"></div>
          <div className="shoppingCard_row"></div>
          <div className="shoppingCard_row"></div> */}
        </div>
      </div>
      <div classname="shoppingCard_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default ProductBasket;
