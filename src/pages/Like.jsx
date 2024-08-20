import Footer from "../compponets/Footer";
import Header from "../compponets/Header";
import { useDispatch, useSelector } from "react-redux";
import { FcDislike, FcLike } from "react-icons/fc";
import { addToLiked } from "../redux/slice/likeSlice";
import "../pages/Like.css";
const Like = () => {
  const { likedProducts } = useSelector((state) => state.likeReducer);
  const dispatch = useDispatch();

  const handleToggleLike = (track) => {
    dispatch(addToLiked(track));
  };

  const isProductLiked = (productId) => {
    return likedProducts.some((item) => item.id === productId);
  };

  return (
    <div className="Like ">
      <Header />
      <div className="container ">
        {likedProducts.length !== 0 ? (
          <div className="table">
            {likedProducts.map((track) => (
              <div key={track.id} className="like">
                <div className="like-one">
                  <div className="like-two">
                    {track.img && track.img.length > 0 && (
                      <img src={track.img[0]} alt="" className="imgss" />
                    )}
                  </div>
                  <div className="Alll">
                    <div className="like-all">
                      <h2>{track.title}</h2>
                      <button
                        onClick={() => handleToggleLike(track)}
                        className="like-five"
                      >
                        {isProductLiked(track.id) ? (
                          <FcDislike size={24} />
                        ) : (
                          <FcLike size={24} />
                        )}
                      </button>
                    </div>
                    <div className="all-like">
                      <p>{track.des}</p>
                      <h3>
                        {track.price} <p>Rp 3.500.000</p>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <span className="like-six">No Products in Favorites</span>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Like;
