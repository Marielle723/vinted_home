import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response); // contrairement au error.message d'express
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        return (
          <div key={offer._id} className="home-wrapper">
            <div className="home-offers">
              <div className="owner">
                <img src={`${offer.owner.account.avatar.secure_url}`} />
                {offer.owner.account.username}
              </div>
              <Link to={`/offer/${offer._id}`}>
                {" "}
                <img
                  className="product-image"
                  src={`${offer.product_image.secure_url}`}
                  alt="photo du produit"
                />
              </Link>
              <p>{offer.product_price} €</p>
              <p className="price-information">i</p>{" "}
              {/*AJOUTER UNE NAVIGATION??*/}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
