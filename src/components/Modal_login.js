import React from "react";
import Login from "../pages/Login";

const Modal_login = (props) => {
  return props.isOpenLogin ? (
    <div className="modal">
      <button onClick={props.onCloseLogin}>x</button>
      <Login setUserToken={props.setUserToken} />
    </div>
  ) : null;
};

export default Modal_login;
