import React from "react";
import "./Product.css";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="info">
        <p id="title">{title}</p>
        <p className="product_price">
          <strong>{price}</strong>€
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarRoundedIcon className="star" />
              </p>
            ))}
        </div>
      </div>
      <img className="img" src={image} alt=""></img>
      {/* <img
        className="img"
        src="https://cdn1.appsisecommerce.com.br/clientes/cliente10694/produtos/29690/Z9823.jpg"
        height="250px"
        width="300px"
        alt=""
      ></img> */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
