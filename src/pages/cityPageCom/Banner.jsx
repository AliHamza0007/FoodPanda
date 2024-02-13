import "../../styles/Banner.css";
import bannerImg from "../../assets/home/refresh-hero-home-pk.webp";
import WraperCon from "../../components/WraperCon";

const Banner = ({ city }) => {
  return (
    <div className="bg-light  pt-3 position-relative overflow-hidden banner ">
      {" "}
      <WraperCon>
        <div className="row ">
          <div className="col-7">
            <p className="  fs-1 mt-xl-5 mt-lg-4 pb-lg-3 city-heading">
              Food and groceries delivery from{" " + city}’s best restaurants
              and shops
            </p>
          </div>
          <div className="col-5">
            {" "}
            <img
              src={bannerImg}
              alt="bannerImg"
              className=" cityBannerImg pb-0 mb-0 "
            />
          </div>
        </div>
      </WraperCon>
    </div>
  );
};

export default Banner;
