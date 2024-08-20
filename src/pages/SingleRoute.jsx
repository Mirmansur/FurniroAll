import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../pages/SingleRoute.css";
import str from "../assets/imegs/str.svg";
import group1 from "../assets/imegs/group1.png";
import group2 from "../assets/imegs/group2.png";
import { MdOutlineVerticalAlignTop } from "react-icons/md";
import Footer from "../compponets/Footer";

const SingleRoute = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get(`https://66a9fe90613eced4eba71d31.mockapi.io/furniro/${id}`)
      .then((res) => {
        setData(res.data);
        setTotalPrice(res.data.price);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const incrementProductCount = () => {
    if (data) {
      setProductCount(productCount + 1);
      setTotalPrice(totalPrice + data.price);
    }
  };

  const decrementProductCount = () => {
    if (productCount > 0 && data) {
      setProductCount(productCount - 1);
      setTotalPrice(totalPrice - data.price);
    }
  };

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
        aria-label="Scroll to top"
      >
        <MdOutlineVerticalAlignTop className="top-icon" />
      </button>
    );
  };

  return (
    <div className="Sing">
      <section>
        <div className="sing">
          <div className="container">
            <div className="safa">
              <h2>Home</h2>
              <img src={str} alt="Separator" />
              <h2>Shop</h2>
              <img src={str} alt="Separator" />
              <p>Asgaard sofa</p>
            </div>
          </div>
        </div>
      </section>
      <section className="inform">
        <div className="container">
          <div className="informs">
            <div className="img">
              <img src={data?.img?.[0]} alt={data?.title || "Product Image"} />
            </div>
            <div className="text">
              <h1>{data?.title}</h1>
              <h2>{totalPrice}</h2>
              <p>
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <p>{data?.body || "Loading description..."}</p>
              <div className="btns">
                <div className="plus1">
                  <button onClick={decrementProductCount}>-</button>
                  <span>{productCount}</span>
                  <button onClick={incrementProductCount}>+</button>
                </div>
                <Link
                  to="/bibasket"
                  state={{ product: data, count: productCount }}
                >
                  <button className="add">Add To Cart</button>
                </Link>
                <button className="add">+ Compare</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="Description">
          <div className="container">
            <div className="descrip">
              <div className="desc-start">
                <h1>Description</h1>
                <h2>Additional Information</h2>
                <h3>Reviews [5]</h3>
              </div>
              <div className="desc-p">
                <p>
                  Embodying the raw, wayward spirit of rock ‘n’ roll, the
                  Kilburn portable active stereo speaker takes the unmistakable
                  look and sound of Marshall, unplugs the chords, and takes the
                  show on the road.
                </p>
                <p>
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece
                  of vintage styled engineering. Setting the bar as one of the
                  loudest speakers in its class, the Kilburn is a compact,
                  stout-hearted hero with a well-balanced audio which boasts a
                  clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to
                  fine-tune the controls to your personal preferences while the
                  guitar-influenced leather strap enables easy and stylish
                  travel.
                </p>
              </div>
              <div className="desc-img">
                <img src={group1} alt="Group 1" />
                <img src={group2} alt="Group 2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="Related">
          <div className="container">
            <div className="related">
              <div className="related-start">
                <h1>Related Products</h1>
              </div>
              <div className="related-finish"></div>
              <div className="related-btn">
                <button>Show More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default SingleRoute;
