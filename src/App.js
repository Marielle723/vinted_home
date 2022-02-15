import "./App.css";
import Payment from "./pages/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import NoMatch from "./pages/NoMatch";
// import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cookies from "js-cookie";
import { useState } from "react";
import Publish from "./pages/Publish";

function App() {
  const [token, setToken] = useState(Cookies.get("UserToken") || null);

  const setUserToken = (token) => {
    if (token) {
      // Gestion de cookie
      Cookies.set("UserToken", token, { expires: 10 });
    } else {
      Cookies.remove("UserToken");
    }

    setToken(token);
  };

  return (
    <Router>
      <Header setUserToken={setUserToken} token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment token={token} />} />
        <Route path="/offers" element={<Home token={token} />} />
        <Route path="/offer/:id" element={<Offer token={token} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        {/* <Route
          path="/signup"
          element={<Signup setUserToken={setUserToken} />}
        /> */}
        <Route path="/login" element={<Login setUserToken={setUserToken} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
