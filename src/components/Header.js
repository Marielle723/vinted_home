import React from "react";

import VintedLogo from "../assets/images/Vinted-logo.svg.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Modal_login from "./Modal_login";
import Modal_signup from "./Modal_signup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Publish from "../pages/Publish";

const Header = (props) => {
  const navigate = useNavigate();

  const [isOpenLogin, setisOpenLogin] = useState(false);
  const [isOpenSignup, setisOpenSignup] = useState(false);

  return (
    <>
      <header>
        <img
          src={VintedLogo}
          alt="Logo de vinted"
          onClick={() => navigate("/")}
          className="logo-vinted"
        />
        <div className="search-input">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input type="text" placeholder="recherche" />
        </div>

        {props.token ? (
          <Link to="/">
            <button
              className="connection red"
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

        <Link to="/publish">
          <button className="sell-your-articles">Vends tes articles</button>
        </Link>
      </header>
    </>
  );
};

export default Header;
