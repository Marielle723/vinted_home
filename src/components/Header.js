import React from "react";
import VintedLogo from "../assets/images/Vinted-logo.svg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <img src={VintedLogo} alt="Logo de vinted" />
        <input placeholder="Recherche des articles" name="search_input" />
        <Link to="/signup">
          <button>S'inscrire</button>
        </Link>
        <Link to="/login">
          <button>Se connecter</button>
        </Link>
        <button className="sell-your-articles">Vends tes articles</button>
      </header>
      <div className="big-picture">
        <div className="box-in-big-picture">
          <h2>Prêt à faire du tri dans vos placards?</h2>
          <button>Commencez à vendre</button>
        </div>
      </div>
    </>
  );
};

export default Header;
