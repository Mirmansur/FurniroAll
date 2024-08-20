import { Link } from "react-router-dom";
import "../compponets/Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer">
          <div className="lina-one"></div>
          <div className="word1">
            <div className="logos">
              <h1>Funiro</h1>
              <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div className="links">
              <div className="links-p">
                <p>Links</p>
              </div>
              <div className="naves">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>
            <div className="help">
              <p>Help</p>
              <a href="#">Payment Options</a>
              <a href="#">Returns </a>

              <a href="#">Privacy Policies</a>
            </div>
            <div className="newsletter">
              <div className="new">
                <p>Newsletter</p>
              </div>
              <div className="news">
                <input type="email" placeholder="Enter Your Email Address" />
                <a href="#">SUBSCRIBE</a>
              </div>
            </div>
          </div>
          <div className="lina"></div>
          <div className="word2">
            <p>2023 furino. All rights reverved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
