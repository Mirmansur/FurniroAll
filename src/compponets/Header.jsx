import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/imegs/logo.svg";
import "../compponets/Header.css";
import icon1 from "../assets/imegs/icon1.svg";
import icon2 from "../assets/imegs/icon2.svg";
import icon3 from "../assets/imegs/icon3.svg";
import icon4 from "../assets/imegs/icon4.svg";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
const Header = () => {
  const [lgShow, setLgShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66a9fe90613eced4eba71d31.mockapi.io/furniro"
        );
        console.log("Fetched items:", response.data);
        setAllItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Search query:", searchQuery);
    if (searchQuery) {
      const filteredResults = allItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("Filtered results:", filteredResults);
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchQuery, allItems]);

  if (
    pathname.includes("/login") ||
    pathname.includes("/dashbord") ||
    pathname.includes("/students") ||
    pathname.includes("/profil")
  ) {
    return null;
  }

  return (
    <div className="Header">
      <div className="container">
        <div className="header">
          <div className="firstword">
            <img src={logo} alt="Logo" />
            <h1>Furniro</h1>
          </div>
          <div className="lin-one">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="icon">
            <Link to="/login">
              <button>
                <img src={icon1} alt="Login" />
              </button>
            </Link>
            <button onClick={() => setLgShow(true)}>
              <img src={icon2} alt="Search" />
            </button>
            <Link to="/like">
              <button>
                <img src={icon3} alt="Like" />
              </button>
            </Link>
            <Link to="/basket">
              <button>
                <img src={icon4} alt="Basket" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Modal
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <ul className="search-results">
            {results.length > 0 ? (
              results.map((item) => <li key={item.id}>{item.title}</li>)
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Header;
