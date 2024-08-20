import { useEffect, useState } from "react";
import "../pages/Home.css";
import dining from "../assets/imegs/dining.png";
import living from "../assets/imegs/living.png";
import bedroom from "../assets/imegs/bedroom.png";
import right from "../assets/imegs/right.svg";
import Allimg from "../assets/imegs/all-imags.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import axios from "axios";
import Footer from "../compponets/Footer";
import { Pagination } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";

const Home = () => {
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 4;
  const numOfPages = Math.ceil(products.length / limit);
  let firstIndex = limit * (page - 1);
  let lastIndex = limit * page;
  const paginatedPosts = products.slice(firstIndex, lastIndex);

  let items = [];
  for (let i = 1; i <= numOfPages; i++) {
    items.push(
      <Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
        {i}
      </Pagination.Item>
    );
  }
  const fetchHome = async () => {
    try {
      const res = await axios.get(
        "https://66a9fe90613eced4eba71d31.mockapi.io/furniro"
      );
      const data = await res.data;
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchHome();
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

  return (
    <div className="Home">
      <div className="home-bgs">
        <div className="container">
          <div className="home">
            <div className="homes">
              <span>New Arrival</span>
              <h2>Discover Our New Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button>BUY Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="Range">
        <div className="container">
          <div className="range">
            <div className="range-word">
              <h3>Browse The Range</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="range-img">
              <div className="dining">
                <img src={dining} alt="" />
                <h4>Dining</h4>
              </div>
              <div className="dining">
                <img src={living} alt="" />
                <h4>Living</h4>
              </div>
              <div className="dining">
                <img src={bedroom} alt="" />
                <h4>Bedroom</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="cards">
            {paginatedPosts.map((product) => (
              <div key={product.id}>
                <div className="cards-word">
                  <img src={product.img[0]} alt="" />
                  <div className="words">
                    <h2>
                      {" "}
                      {product.title} <CiHeart className="Header" />
                    </h2>
                    <p>{product.des}</p>
                    <h3>
                      {" "}
                      {product.price}
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
      <div className="Room">
        <div className="container">
          <div className="room">
            <div className="room-word">
              <h2>50+ Beautiful rooms inspiration</h2>
              <p>
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <button>Explore More</button>
            </div>
            <div className="room-bg">
              <div className="bg-all">
                <div className="all-word">
                  <div className="bg-word">
                    <div className="bg-top">
                      <h3>01</h3>
                      <span></span>
                      <p>Bed Room</p>
                    </div>
                    <div className="bg-bottom">
                      <h2>Inner Peace</h2>
                    </div>
                  </div>
                </div>
                <div className="bg-right">
                  <button>
                    <img src={right} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="room-carusel">
              <Carousel>
                <div>
                  <img src={dining} alt="" />
                </div>
                <div>
                  <img src={living} alt="" />
                </div>
                <div>
                  <img src={bedroom} alt="" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="Allimg">
        <div className="container">
          <div className="all">
            <p>Share your setup with</p>
            <h1>#FuniroFurniture</h1>
            <img src={Allimg} alt="" />
          </div>
        </div>
      </div>
      {error && <div>{error}</div>}
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;
