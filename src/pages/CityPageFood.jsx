import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "./cityPageCom/Banner";
import AllRestaurants from "./cityPageCom/AllRestaurants";

const CityPageFood = () => {
  const param = useParams();
  return (
    <div className="cityPageFood">
      <Navbar city={param.slug} />
      <Banner city={param.slug} />
      <AllRestaurants city={param.slug} />
    </div>
  );
};

export default CityPageFood;
