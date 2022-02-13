import React from "react";
import VintedLogo from "../assets/images/Vinted-logo.svg.png";
import tear from "../assets/images/tear.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Modal_login from "./Modal_login";
import Modal_signup from "./Modal_signup";
import { useState } from "react";

const Header = (props) => {
  const [isOpenLogin, setisOpenLogin] = useState(false);
  const [isOpenSignup, setisOpenSignup] = useState(false);

  return (
    <>
      <header>
        <img src={VintedLogo} alt="Logo de vinted" />
        <div className="search-input">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" placeholder="recherche" />
        </div>

        {props.token ? (
          <Link to="/">
            <button
              className="red"
              onClick={() => {
                props.setUserToken(null);
              }}
            >
              Se déconnecter
            </button>
          </Link>
        ) : (
          <div className="modal-wrapper">
            {/* <Link to="/signup"> */}
            <button onClick={() => setisOpenSignup(true)}>S'inscrire</button>
            {/* </Link> */}

            <Modal_signup
              setUserToken={props.setUserToken}
              isOpenSignup={isOpenSignup}
              onCloseSignup={() => setisOpenSignup(false)}
            ></Modal_signup>

            {/* VA OUVRIR LE MODAL */}
            {/* <Link to="/login"> */}
            <button onClick={() => setisOpenLogin(true)}>Se connecter</button>
            {/* </Link> */}

            <Modal_login
              setUserToken={props.setUserToken}
              isOpenLogin={isOpenLogin}
              onCloseLogin={() => setisOpenLogin(false)}
            ></Modal_login>
          </div>
        )}
        <button className="sell-your-articles">Vends tes articles</button>
      </header>

      <div className="big-picture">
        <div className="box-in-big-picture">
          <h2>Prêt à faire du tri dans vos placards?</h2>
          <button>Commencez à vendre</button>
        </div>
        <img src={tear} alt="page tear effect" />
      </div>
    </>
  );
};

export default Header;
