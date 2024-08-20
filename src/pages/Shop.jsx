import "../pages/Shop.css";
import str from "../assets/imegs/down.svg";
import filter from "../assets/imegs/filter.svg";
import grid from "../assets/imegs/grid.svg";
import view from "../assets/imegs/view.svg";
import { useEffect, useState } from "react";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import kub from "../assets/imegs/kub.png";
import give from "../assets/imegs/give.png";
import coll from "../assets/imegs/coll.png";
import good from "../assets/imegs/good.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../compponets/Footer";
import { Pagination } from "react-bootstrap";
import { addToLiked } from "../redux/slice/likeSlice";
import { FcDislike, FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
const Shop = () => {
  const [error, setError] = useState("");
  const [shop, setshop] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 4;
  const numOfPages = Math.ceil(shop.length / limit);
  let firstIndex = limit * (page - 1);
  let lastIndex = limit * page;
  const paginatedPosts = shop.slice(firstIndex, lastIndex);
  const { likedProducts } = useSelector((state) => state.likeReducer);
  const dispatch = useDispatch();

  let items = [];
  for (let i = 1; i <= numOfPages; i++) {
    items.push(
      <Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
        {i}
      </Pagination.Item>
    );
  }

  const fetchShop = async () => {
    try {
      const res = await axios.get(
        "https://66a9fe90613eced4eba71d31.mockapi.io/furniro"
      );
      const data = await res.data;
      setshop(data);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchShop();
  }, []);

  const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <button
        className={`back-to-top ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <MdOutlineVerticalAlignTop className="top-icon" />
      </button>
    );
  };
  const handleToggleLike = (track) => {
    dispatch(addToLiked(track));

    if (isProductLiked(track.id)) {
      console.log("product removed");
    } else {
      console.log("added product");
    }
  };
  const isProductLiked = (productId) => {
    return likedProducts.some((track) => track.id === productId);
  };
  return (
    <div className="Shop">
      <div className="conatiner">
        <section>
          <div className="shop">
            <div className="shops">
              <h1>Shop</h1>
            </div>
            <div className="shopsss-2">
              <h4>Home</h4>
              <img src={str} alt="" />
              <p>Shop</p>
            </div>
          </div>
        </section>
        <section className="bg-show">
          <div className="container">
            <div className="show">
              <div className="show-logo">
                <div className="filter">
                  <img src={filter} alt="" />
                  <h2>Filter</h2>
                </div>
                <div className="images">
                  <img src={grid} alt="" />
                  <img src={view} alt="" />
                </div>
                <div className="border"></div>
                <p>Showing 1–16 of 32 results</p>
              </div>
              <div className="show-number">
                <div className="number1">
                  <h2>Show</h2>
                  <button>16</button>
                </div>
                <div className="number2">
                  <h2>Short by</h2>
                  <button>Default</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="card">
              <div className="cards">
                {paginatedPosts.map((shops) => (
                  <div key={shop.id}>
                    <div className="cards-word">
                      <Link to={`/product/${shops.id}`}>
                        <img src={shops.img[0]} alt="" />
                      </Link>
                      <div className="words">
                        <div className="words-ten">
                          <h2> {shops.title}</h2>
                          <button
                            onClick={() => handleToggleLike(shops)}
                            className="dislike"
                          >
                            {isProductLiked(shops.id) ? (
                              <FcDislike size={24} />
                            ) : (
                              <FcLike size={24} />
                            )}
                          </button>
                        </div>

                        <p>{shops.des}</p>
                        <h3>
                          {shops.price}
                          <p>Rp 3.500.000</p>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination>{items}</Pagination>
            </div>
          </div>
        </section>
        <section className="jobs">
          <div className="container">
            <div className="job">
              <div className="job-img">
                <div className="kub-img">
                  <img src={kub} alt="" />
                </div>
                <div className="kub-word">
                  <h2>High Quality</h2>
                  <p>crafted from top materials</p>
                </div>
              </div>
              <div className="job-img">
                <div className="kub-img">
                  <img src={good} alt="" />
                </div>
                <div className="kub-word">
                  <h2>Warranty Protection</h2>
                  <p>Over 2 years</p>
                </div>
              </div>
              <div className="job-img">
                <div className="kub-img">
                  <img src={give} alt="" />
                </div>
                <div className="kub-word">
                  <h2>Free Shipping</h2>
                  <p>Order over 150 $</p>
                </div>
              </div>
              <div className="job-img">
                <div className="kub-img">
                  <img src={coll} alt="" />
                </div>
                <div className="kub-word">
                  <h2>24 / 7 Support</h2>
                  <p>Dedicated support</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {error && <div>{error}</div>}
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Shop;
