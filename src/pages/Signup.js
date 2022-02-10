import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, password);
  };

  return (
    <div className="signup-page">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs-basic">
          <input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />

          <input
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />

          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            value="newsletter"
          />
          <label for="newsletter">S'inscrire à notre newsletter ?</label>
        </div>

        <p className="news-subs">
          En m'inscrivant je confirme avoir lu et accepté les termes et
          conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit" value="Submit" className="submit">
          S'inscrire
        </button>
        <p className="already-account">Tu as déjà un compte ? Connecte-toi?</p>
      </form>
    </div>
  );
};

export default Signup;
