import { NavLink } from "react-router-dom";
import WraperCon from "../../components/WraperCon";
import "../../styles/AllRestaurants.css";
import { useProducts } from "../../context/useProducts";
import { useFavorite } from "../../context/useFavorite";
import { useEffect, useRef, useState } from "react";
import RatingStar from "../../utils/ratingStar";
import PercentageSvg from "../../utils/PercentageSvg";
import FadeLoader from "react-spinners/FadeLoader";
const AllRestaurants = ({ city }) => {
  const [projectLength, setProjectLength] = useState(9);

  const { products ,setProducts} = useProducts();

  const { isFavorited, handleFavourite } = useFavorite();
  const [loading, setLoading] = useState(false);

  const targetRef = useRef(null);
  useEffect(() => {
    localStorage.setItem("city", city);

  }, []);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setTimeout(() => {
        setProjectLength(projectLength + 9);
        setLoading(false);
      }, 2000);
    };

    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the target is in view
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchData(); // Trigger fetchData when the target is in view
      }
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup: disconnect the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [projectLength]); // Add dependencies based on your actual use case

  return (
    <WraperCon>
      <div className="  py-4 px-3">
        <nav className="d-flex cityNav">
          <p>
            <NavLink
              className="color-pink text-decoration-none  border-bottom-hover"
              to="/"
            >
              Homepage
            </NavLink>
          </p>

          <div className="px-2">
            <svg
              aria-hidden="true"
              focusable="false"
              className="fl-neutral-secondary"
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.608 12.009L8.354 7.754a.5.5 0 010-.707l.693-.693a.5.5 0 01.707 0l5.302 5.301a.5.5 0 010 .707l-5.284 5.284a.5.5 0 01-.707 0l-.694-.693a.5.5 0 010-.707l4.237-4.237z"
              />
            </svg>
          </div>

          <p>{city}</p>
        </nav>
        <p className="fs-2 fw-normal py-1 ">All restaurants</p>
        <div className="row restaurants ">
          {products?.slice(0, projectLength)?.map((p) => (
            <div
              key={p.id}
              className="col-lg-4 col-md-6 col-12 mb-md-4 mb-3 position-relative"
            >
              <p className="favIcon">
                <span className="favIconbg"></span>
                {isFavorited.some((c) => c.id === p.id) ? (
                  <i
                    onClick={() => {
                      handleFavourite(p.id);
                      // console.log('Unfavorited');
                    }}
                    className="fas fa-heart color-pink"
                  />
                ) : (
                  <i
                    onClick={() => {
                      handleFavourite(p.id);
                      // console.log('Favorited');
                    }}
                    className="far fa-heart color-pink"
                  />
                )}
              </p>
              <NavLink
                className="text-decoration-none"
                to={`/restaurant/${p?.name}`}
              >
                <div className="card position-relative overflow-hidden rounded-4">
                  <img
                    className="card-img-top"
                    src={p?.imageUrl}
                    alt={p?.imageUrl}
                  />
                  <div className="card-body px-3 py-2">
                    <p className="img-badge badge1">
                      <PercentageSvg height={16} color={"white"} />{" "}
                      {p?.grades[3]?.toFixed(0)}% off
                    </p>
                    <p className="img-badge badge2">
                      <PercentageSvg height={16} color={"white"} />{" "}
                      {p?.description?.substring(0, 20)}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="card-title fw-semibold ">{p?.name?.substring(0,17)}</div>

                      <p className="fs-12 d-flex align-items-center">
                        <RatingStar />
                        {p?.stars?.toFixed(1)}
                      </p>
                    </div>
                    <p className="fs-12 mb-0"> $ - {p?.categories[0]}</p>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
          <div
            ref={targetRef}
            style={{ height: "10px", background: "transparent" }}
          >
            {/* An invisible element acting as the target for the Intersection Observer */}
          </div>
          {loading && (
            <div className="d-flex justify-content-center">
              <FadeLoader
                color={"#ed2178"}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </div>
      </div>
    </WraperCon>
  );
};

export default AllRestaurants;
