import React from "react";
import "./CheckOutProduct.css";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { useStateValue } from "./StateProvider";
import Translate from "react-translate-component";
import counterpart from "counterpart";
import en from "./lang/en";
import de from "./lang/de";

counterpart.registerTranslations("en", en);
counterpart.registerTranslations("de", de);
counterpart.setLocale("en");

function CheckOutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_img" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarRoundedIcon className="star" />
              </p>
            ))}{" "}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
