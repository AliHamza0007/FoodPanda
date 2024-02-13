import "../styles/Favorite.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import noFav from "../assets/no-favorites-fp.svg";
import { NavLink } from "react-router-dom";
const Favorite = () => {
  return (
    <>
      <Navbar />
      <div className="container favorite py-5">
        <h1 className="">My Favourites</h1>
        <div className="text-center py-5 mt-3">
          <img src={noFav} className=" img-fluid noFav" alt="noFav" />
          <p className="fs-5 font-bold fw-normal  pt-4"> No Favourites Saved</p>
          <p>
            You’ll see all your favorites here, to make ordering even faster.
            Just look for the
          </p>
          <i className="fas fa-heart color-pink fs-6 mb-4" />
          <div>
            <NavLink to="/" className="btn btn-outline-pink fw-normal ">
              Let's find some favourites
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
