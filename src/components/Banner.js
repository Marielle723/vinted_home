import React from "react";
import tear from "../assets/images/tear.svg";

const Banner = () => {
  return (
    <div className="big-picture">
      <div className="box-in-big-picture">
        <h2>Prêt à faire du tri dans vos placards?</h2>
        <button>Commencez à vendre</button>
      </div>
      <img src={tear} alt="page tear effect" />
    </div>
  );
};

export default Banner;
