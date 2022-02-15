import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Payment = (props) => {
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;

  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

  const [protection, setProtection] = useState(0.4);
  const [port, setPort] = useState(0.8);
  const [total, setTotal] = useState(protection + port + price);

  return (
    <div className="payment-wrapper">
      <div className="payment-details-wrap">
        <p>Résumé de la commande</p>
        <div className="payment-line">
          <p className="payment-title">Commande</p>
          <p className="">{price.toFixed(2).replace(".", ",")} €</p>
        </div>
        <div className="payment-line">
          <p className="payment-title">Frais protection acheteurs</p>
          <p className="">{protection.toFixed(2).replace(".", ",")} €</p>
        </div>
        <div className="payment-line">
          <p className="payment-title">Frais de port</p>
          <p className="">{port.toFixed(2).replace(".", ",")} €</p>
        </div>

        <div className="payment-line">
          <p className="payment-title">Total</p>
          <p className="">{total.toFixed(2).replace(".", ",")} €</p>
        </div>

        <p className="text-before-stripe">
          Il ne vous reste plus qu'une étape pour vous offrir{" "}
          <span>{title}</span>. Vous allez payer
          <span>{total.toFixed(2).replace(".", ",")} €</span> (frais de
          production et frais de port inclus)
        </p>

        {/* STRIPE TRUC */}

        <Elements stripe={stripePromise}>
          <CheckoutForm _id={props._id} price={price} title={title} />
        </Elements>

        {/* <button className="pay"> </button> */}
      </div>
    </div>
  );
};

export default Payment;
