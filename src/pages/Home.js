import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(4);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      console.log(page, limit);

      setLimit(8);

      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?page=${page}&limit=${limit}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page, limit]);

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const handleToutAfficher = () => {
    setPage(1);
    setLimit(0);
  };
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <div className="filter-offer-page">
        <Banner />
        <label>
          Afficher la page:
          <select value={page} onChange={handlePageChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            {/* <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option> */}
          </select>
        </label>

        <button onClick={handleToutAfficher}>Tout afficher</button>

        {/* <div className="slidders">
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            id="my-range-slidder"
          ></input>
        </div> */}

        <Filter />
      </div>

      <div className="home-wrapper">
        {data.offers.map((offer, index) => {
          return (
            <div key={offer._id} className="home-offers">
              <div className="owner-and-product">
                <div className="owner">
                  {offer.owner.account.avatar ? (
                    <img
                      src={`${offer.owner.account.avatar.secure_url}`}
                      alt="seller avatar"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUser} />
                  )}
                  {offer.owner.account.username}
                </div>
                <Link to={`/offer/${offer._id}`}>
                  {" "}
                  <img
                    className="product-image"
                    src={`${offer.product_image.secure_url}`}
                    alt="product to sell"
                  />
                </Link>
              </div>
              <div className="price-and-info">
                <p>{offer.product_price} €</p>
                <p className="price-information">i</p>{" "}
                {/*AJOUTER UNE NAVIGATION??*/}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
