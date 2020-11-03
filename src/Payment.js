import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckOutProduct from "./CheckOutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import {db} from "./firebase";

function Payment() {
  const [{basket,user},dispatch]=useStateValue();
  const history=useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
   ///
  //this method charges the customer with the correct amount
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
  //stripe expects the total amount in cents hence we need to multiply the value by 100
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);

    }
    getClientSecret();
  }, [basket]);
 
  //---tha actual Payment process happens here--------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

  //-------here the amount we are charged and payment method is send-----------------------------------

    //once card payment has been confirmed the payment is processed
  //once its completed the user is send to the orders page
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      }).then(({ paymentIntent }) => {
          db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              })

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type:"EMPTY_BASKET"
        })
        history.replace("/orders");

      });
  };

  //listen for changes in the cardelement
  //and display any errors as the customer types their card details
  const handleChange = (e) => {
    
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout (<Link to="shoppingCard">{basket?.length} items</Link>)
        </h1>

        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Title</h3>
          </div>
          <div className="payment_adress">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Review items and delivery</h3>
          </div>
          <div className="paymentItems">
            {basket.map((item) => (
              <CheckOutProduct
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              ></CheckOutProduct>
            ))}
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="paymentDetails">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>
              <div className="payment-price">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"€"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error &&<div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
