import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Offer = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <div className="offer-wrapper">
        {/* //PICTURE MAP */}

        <div className="offer-pictures">
          {data.product_pictures.map((pic, ind) => {
            return (
              <img
                key={ind}
                className="offer-pics"
                src={`${pic.secure_url}`}
                alt="photos du product"
              />
            );
          })}
        </div>

        {/* //FIN PICTURE MAP */}

        <div className="product-details">
          <p className="offer-price">{data.product_price} € </p>
          {/* //PRODUCT MAP */}
          {data.product_details.map((item, index) => {
            const keys = Object.keys(item);
            return (
              <div key={index} className="offer-details">
                {keys}:{item[keys]} <hr />
              </div>
            );
          })}{" "}
          {/* //FIN PRODUCT MAP */}
          <p className="product-name">{data.product_name}</p>
          <p className="product-description">{data.product_description}</p>
          <div className="offer-owner-name">
            {" "}
            <p className="account-initial">
              {data.owner.account.username.slice(0, 1)}
            </p>
            <p className="account-usename">{data.owner.account.username}</p>
          </div>
          <button className="acheter">Acheter</button>
        </div>
      </div>
    </>
  );
};

export default Offer;
