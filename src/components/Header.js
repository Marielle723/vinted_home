import React from "react";
import VintedLogo from "../assets/images/Vinted-logo.svg.png";

const Header = () => {
  return (
    <header>
      <img src={VintedLogo} alt="Logo de vinted" />
      <input placeholder="Recherche des articles" name="search_input" />
      <button>S'inscrire</button>
      <button>Se connecter</button>
      <button>Vends tes articles</button>
    </header>
  );
};

export default Header;
