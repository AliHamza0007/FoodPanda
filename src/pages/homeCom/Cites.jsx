import { NavLink } from "react-router-dom";
import WraperCon from "../../components/WraperCon";
import "../../styles/Cites.css";
import { citiesList } from "../../utils/citiesArray.jsx";

const Cites = () => {
  return (
    <WraperCon>
      <div>
        <p className="fs-2 mt-5 pt-5">Find us in these cities and many more!</p>{" "}
      </div>
      <div className="row ">
        {citiesList?.map((c) => {
          return (
            <div
              key={c.id}
              className="  rounded-4  col-xl-3 col-md-4 col-6 mb-sm-4  mb-3"
            >
              <div className="city-col position-relative overflow-hidden rounded-4">
                <NavLink
                  className="overflow-hidden rounded-4"
                  to={"city/" + c.link}
                >
                  <img
                    src={c.Img}
                    alt={c.link}
                    className="img-fluid  rounded-4 city-img "
                  />
                  <p className="city-img-text bg-white rounded-4 text-dark">
                    {c.title}
                  </p>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </WraperCon>
  );
};

export default Cites;
