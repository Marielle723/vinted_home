import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import axios from "axios";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000);
  const [sort, setSort] = useState("price-asc");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log(page, limit);

      // setPage(1);

      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?page=${page}&limit=${limit}&title=${title}&priceMin=${priceMin}&priceMax=${priceMax}&sort=${sort}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [page, limit, title, priceMin, priceMax, sort]);

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleLimitChange = (event) => {
    event.preventDefault();
    setLimit(event.target.value);
  };

  const handleAscbox = (event) => {
    const sortType = event.target.value;
    setSort(sortType);

    // alert(radio);
  };

  const handleDescbox = (event) => {
    const sortType = event.target.value;
    setSort(sortType);
  };

  // const handleMin = (value) => {
  //   setPriceMin(value);
  // };

  // const handleMax = (value) => {
  //   setPriceMax(value);
  // };

  const handleToutAfficher = () => {
    setPage(1);
    setLimit(false);
  };
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <Banner />
      <div className="filter-offer-page">
        {/* PAR LA PAR PAGINATION*********** **PAGINATION***************PAGINATION *************************** */}
        {page > 1 && (
          <button onClick={handlePreviousPage}>Page précédente</button>
        )}
        <label>
          Nombre d'annonces par page:
          <select value={limit} onChange={handleLimitChange}>
            <option defaultValue="false">All</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="10">12</option>
          </select>
        </label>

        {(limit * page < data.count || limit === false) && (
          <button onClick={handleNextPage}>Page suivante</button>
        )}

        <button onClick={handleToutAfficher}>Tout afficher</button>

        <div className="price-sorting">
          <p>Trier par prix:</p>

          <label>
            <input
              type="radio"
              id="croissant"
              name="sorting"
              value="price-asc"
              onChange={handleAscbox}
              checked
            />
            Croissant
          </label>

          <label>
            <input
              type="radio"
              id="décroissant"
              name="sorting"
              value="price-desc"
              onChange={handleDescbox}
            />
            décroissant
          </label>
        </div>

        {/* <div className="slidders">
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            id="my-range-slidder"
          ></input>
        </div> */}
        {/* <Filter priceMax={priceMax} priceMin={priceMin} /> */}

        <div className="filter-slider">
          <p>Prix entre :</p>

          <div className="sliderArea">
            <Range
              marks={{
                0: `€ 0`,
                1000: `€ 1000`,
              }}
              min={0}
              max={1000}
              defaultValue={[20, 200]}
              allowCross={false}
              // tabIndex={[0, 1]}
              // value={[12, 200]}
              onChange={(value) => {
                setPriceMin(value[0]);
                setPriceMax(value[1]);
              }}
              tipFormatter={(value) => `€ ${value}`}
              tipProps={{
                placement: "top",
                visible: true,
              }}
            />
          </div>
        </div>
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
                    <p className="avatar-icon">
                      <FontAwesomeIcon icon={faUser} />
                    </p>
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
