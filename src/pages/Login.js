import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorStatus, seterrorStatus] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post("https://lereacteur-vinted-api.herokuapp.com/user/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          props.setUserToken(response.data.token);
          navigate("/");
        });
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 401) {
        seterrorStatus("Mauvais email et/ou mot de passe");
      }
    }
  };

  return (
    <div>
      <div className="signup-page">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs-basic">
            <input
              placeholder="Adresse email"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />

            <input
              placeholder="Mot de passe"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button type="submit" value="Submit" className="submit">
            Se connecter
          </button>
          <p className="already-account">
            Pas encore de compte ? Inscris-toi !
          </p>
          <p>{errorStatus}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
