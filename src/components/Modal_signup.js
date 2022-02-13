import React from "react";
import Signup from "../pages/Signup";

const Modal_signup = (props) => {
  return props.isOpenSignup ? (
    <div className="modal">
      <button onClick={props.onCloseSignup}>x</button>
      <Signup setUserToken={props.setUserToken} />
    </div>
  ) : null;
};

export default Modal_signup;
