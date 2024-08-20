import str from "../assets/imegs/down.svg";
import logo from "../assets/imegs/logo.svg";
import kub from "../assets/imegs/kub.png";
import give from "../assets/imegs/give.png";
import coll from "../assets/imegs/coll.png";
import good from "../assets/imegs/good.png";
import "./Bibasket.css";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../compponets/Footer";
const Bibasket = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/products/${id}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="Bibasket">
      <div className="bibasket">
        <div className="container">
          <div className="catt">
            <div className="shop">
              <div className="shop-all">
                <div className="shops-logo">
                  <img src={logo} alt="" />
                </div>
                <div className="shops">
                  <h1>Card</h1>
                </div>
                <div className="shopsss-2">
                  <h4>Home</h4>
                  <img src={str} alt="" />
                  <p>Card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="Table">
          <div className="container">
            <div className="table">
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Asgaard sofa</td>
                    <td>$250</td>
                    <td>1</td>
                    <td>$250</td>
                  </tr>
                  <tr>
                    <td>Asgaard table</td>
                    <td>$150</td>
                    <td>2</td>
                    <td>$300</td>
                  </tr>
                  <tr>
                    <td>Asgaard armchair</td>
                    <td>$100</td>
                    <td>3</td>
                    <td>$300</td>
                  </tr>
                  <tr></tr>
                </tbody>
              </Table>
            </div>
            <div className="tab"></div>
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
      <Footer />
    </div>
  );
};

export default Bibasket;
