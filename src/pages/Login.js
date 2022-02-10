import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        .post("https://my-backend-final-project.herokuapp.com/user/login", {
          email: email,
          password: password,
        })
        .then((response) => console.log(response.data));
    } catch (error) {
      console.log(error.response);
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
              type="text"
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
            Se connected
          </button>
          <p className="already-account">
            Pas encore de compte ? Inscris-toi !
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
