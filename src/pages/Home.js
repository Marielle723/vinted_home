import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Link to={"/offer"}>Go to offer</Link>
    </div>
  );
};

export default Home;
