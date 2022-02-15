import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Offer = ({ token }) => {
  const navigate = useNavigate();
  // const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  const { id } = useParams();

  // console.log(id);

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
      <div className="offer-page-wrapper">
        <div className="offer-wrapper">
          {/* //PICTURE MAP */}

          <div className="offer-pictures">
            {data.product_pictures.map((pic, ind) => {
              return (
                <Carousel
                  key={ind}
                  responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  showDots={true}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlaySpeed={1000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={500}
                  containerClass="offer-pictures"
                  // removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="offer-pics"
                >
                  <img
                    className="offer-pics"
                    src={`${pic.secure_url}`}
                    alt="photos du product"
                  />
                </Carousel>
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
            <button
              className="acheter"
              onClick={() => {
                token
                  ? navigate("/payment", {
                      state: {
                        title: data.product_name,
                        price: data.product_price,
                      },
                    })
                  : navigate("/login");
              }}
            >
              Acheter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
