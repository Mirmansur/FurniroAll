import str from "../assets/imegs/down.svg";
import "../pages/Contact.css";
import logo from "../assets/imegs/logo.svg";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "../compponets/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import kub from "../assets/imegs/kub.png";
import give from "../assets/imegs/give.png";
import coll from "../assets/imegs/coll.png";
import good from "../assets/imegs/good.png";
const Contact = () => {
  return (
    <div className="Contact">
      <section>
        <div className="contact">
          <div className="container">
            <div className="cont">
              <div className="cont-all">
                <div className="shops-logo">
                  <img src={logo} alt="" />
                </div>
                <div className="conts">
                  <h1>Contact</h1>
                </div>
                <div className="contsss-2">
                  <h4>Home</h4>
                  <img src={str} alt="" />
                  <p>Contact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="From">
          <div className="container">
            <div className="froms">
              <div className="froms-one">
                <h2>Get In Touch With Us</h2>
                <p>
                  For More Information About Our Product & Services. Please Feel
                  Free To Drop Us An Email. Our Staff Always Be There To Help
                  You Out. Do Not Hesitate!
                </p>
              </div>
              <div className="froms-two">
                <div className="inform">
                  <div className="informss">
                    <FaLocationDot className="icons" />
                    <div className="inform-word">
                      <h4>Address</h4>
                      <p>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                  </div>
                  <div className="informss">
                    <FaPhoneAlt className="icons" />
                    <div className="inform-word">
                      <h4>Phone</h4>
                      <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                    </div>
                  </div>
                  <div className="informss">
                    <MdWatchLater className="icons-watch" />
                    <div className="inform-word">
                      <h4>Working Time</h4>
                      <p>
                        Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 -
                        21:00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="inputs">
                  <form>
                    <p>Your name</p>
                    <input type="text" placeholder="Name" />
                    <p>Email address</p>
                    <input type="email" placeholder="Email@" />
                    <p>Subject</p>
                    <input type="text" placeholder="This is an optional" />
                    <p>Message</p>
                    <input
                      type="text"
                      placeholder="Hi! i’d like to ask about"
                    />
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="jobs">
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
