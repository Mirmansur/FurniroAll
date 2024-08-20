import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./compponets/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleRoute from "./pages/SingleRoute";
import BiBasket from "./pages/Bibasket";
import Login from "./compponets/Login";
import Dashbord from "./compponets/Dashbord";
import "./App.css";
import Profil from "./compponets/Profil";
import Like from "./pages/Like";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleRoute />} />
          <Route path="/bibasket" element={<BiBasket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/like" element={<Like />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
