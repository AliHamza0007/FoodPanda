import "../styles/Navbar.css";

import Logo from "../assets/Logo.jpg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiTrophy } from "react-icons/ci";
import { CiReceipt } from "react-icons/ci";

import { TfiTicket } from "react-icons/tfi";
import { useAuth } from "../Auth/UseAuth";
import { IoLocationOutline } from "react-icons/io5";

import WraperCon from "./WraperCon";
import { useFavorite } from "../context/useFavorite";
import AuthModal from "./AuthModal";
import {  BrandIconSVG, PandapaySVG , ProSVG, RestaurantSVG } from "../utils/SVG";
import LocationModal from "./LocationModal";
import { useAddress } from "../context/useAddress";

const Navbar = ({ city }) => {
  const { isFavorited } = useFavorite();
  const {address,setAddress}=useAddress()


  const [isNavbarScroll, setNavbarScroll] = useState(false);
  const [isTooltip, setisTooltip] = useState(false);
  isTooltip ? setTimeout(() => setisTooltip(false), 4000) : "";
  useEffect(() => {
    setTimeout(() => setisTooltip(true), [3000]);
  }, []);

  useEffect(() => {
    address?city=address?.formatted_address || address?.name:""

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);



  
  const [country, setCountry] = useState("EN");
  const [isSidebar, setIsSidebar] = useState(false);
  const [auth,setAuth] = useAuth();
  const handleLogout=(e)=>{
    e.preventDefault();
    setAuth({ ...auth, user: null, token: "" });localStorage.removeItem('panda-auth')
  }
  return (
    <div className={` ${isNavbarScroll ? "navbarScroll " : ""}`}>
      <div className={` shadow  position-relative    z-3 `}>
        <div className={` sidebar  ${isSidebar ? "active" : null}`}>
          <div className=" justify-content-end">
            <i
              onClick={() => setIsSidebar(!isSidebar)}
              className="fa fa-close fs-3 btnClose color-pink"
            ></i>
          </div>

          <div className="container col-12 ">
            <div className=" my-5">
              <ul className="navbar-nav ms-auto text-lg-center  ">
                <li>
                  <NavLink to="/pandapay" className="dropdown-item ">
                  <PandapaySVG/>
                    Pandapay
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/subscribe" className="dropdown-item ">
<ProSVG/>
                    Subscribe to free delivery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/orders" className="dropdown-item ">
                    <CiReceipt className="fs-3 mx-2" />
                    Orders & recording
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile" className="dropdown-item ">
                    <i className=" far fa-user px-3"></i> Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/vouchers" className="dropdown-item ">
                    <TfiTicket className="fs-3 mx-2" />
                    Vouchers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/awards" className="dropdown-item ">
                    <CiTrophy className="fs-3 mx-2" />
                    Panda rewards{" "}
                  </NavLink>
                </li>
                <hr />
                <li className=" languageMenu dropdown px-2">
                  <button
                    className="nav-link dropdownBtn w-100 d-flex justify-content-between align-items-center"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div>
                      <i className="fa fa-globe px-3"></i>
                      <span className="fw-semibold fs-6 ">English</span>{" "}
                    </div>
                    <div>
                      <i className="fa fa-angle-down color-pink  pe-3"></i>
                    </div>
                  </button>
                  <ul className="dropdown-menu border-0 w-100 p-2">
                    <li>
                      <button className="dropdown-item  d-flex justify-content-between align-items-center ">
                        <div>English</div>
                        <div>
                          <i className=" far fa-circle-check color-pink fs-5 pe-4 "></i>
                        </div>
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light">
          <WraperCon>
            {auth?.user? (
              <button
                className="navbar-toggler "
                onClick={() => setIsSidebar(!isSidebar)}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="far   fa-user fs-4 color-pink  navbar-toggler-icon"></i>
              </button>
            ) : (
              <button
                className="navbar-toggler "
                data-toggle="modal"
                data-target="#auth"
                type="button"
              >
                <i className="far   fa-user fs-4 color-pink  navbar-toggler-icon"></i>
              </button>
            )}
            <NavLink
              to="/"
              className="navbar-brand color-pink  text-lg-start text-center  pb-2"
            >
              <BrandIconSVG/>
            </NavLink>{" "}
            <div className="d-flex">
              {" "}
              {city ? (
                <li className="nav-item svg d-lg-none pt-1 position-relative pt-1">
                  {" "}
                  {isFavorited?.length > 0 && <p className="dot-Badge"></p>}
                  <NavLink to="/favorite">
                    <i className="far fa-heart color-pink  fs-5"></i>
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li className="nav-item list-unstyled  svg d-lg-none ">
                <NavLink className="nav-link" to="/restaurant">
                  <RestaurantSVG/>
                </NavLink>
              </li>
            </div>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              {city ? (
                <div className="ms-auto me-5 position-relative ToolTip d-lg-block d-none">
                  <div className={`${isTooltip ? "showTooltip" : "hide"}`}>
                    <i className="fa-solid fa-caret-up "></i>
                    <p className="p-2 Locationtooltip rounded-3">
                      Add your address to see <br />
                      restaurants that deliver to you
                    </p>
                  </div>
                  <button
                    onMouseEnter={() => setisTooltip(true)}
                    className="btn btnCity "
                    data-toggle="modal"
                    data-target="#location-modal"
                    role="button"
                  >
                    <IoLocationOutline className="fw-bold  fs-4 pe-1 " />
                    <span className="fw-semibold  fs-location color-pink   ">
                      {city}
                    </span>{" "}
                  </button>
                </div>
              ) : (
                ""
              )}


              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 align-items-center  d-lg-flex d-none">
                {auth?.user? (
                  <li className="nav-item userMenu dropdown ">
                    <button
                      className="nav-link dropdownBtn "
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="far fa-user"></i>
                      <span className="fw-semibold  fs-6 text-uppercase ps-2 pe-1">
                        {auth?.user?.name}
                      </span>{" "}
                      <i className="fa fa-angle-down color-pink "></i>
                    </button>
                    <ul className="dropdown-menu  rounded-4  shadow p-2">
                      <li>
                        <NavLink to="/pandapay" className="dropdown-item ">
                        <PandapaySVG/>
                          Pandapay
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/subscribe" className="dropdown-item ">
                         <ProSVG/>
                          Subscribe to free delivery
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/orders" className="dropdown-item ">
                          <CiReceipt className="fs-3 mx-2" />
                          Orders & recording
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/profile" className="dropdown-item ">
                          <i className=" far fa-user px-3"></i>
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/vouchers" className="dropdown-item ">
                          <TfiTicket className="fs-3 mx-2" />
                          Vouchers
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/awards" className="dropdown-item ">
                          <CiTrophy className="fs-3 mx-2" />
                          Panda rewards{" "}
                        </NavLink>
                      </li>
                      <hr />
                      <li>
                        <NavLink to="/help" className="dropdown-item ">
                          <i className="px-3 far fa-circle-question "></i>
                          Help center
                        </NavLink>
                      </li>
                      <li>
                        <button onClick={handleLogout} className="dropdown-item ">
                          <i className="px-3 fa-solid fa-arrow-right-from-bracket"></i>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <>
                    <li className="nav-item ">
                      <button
                        data-toggle="modal"
                        data-target="#auth"
                        className="  btn btn-outline-pink"
                      >
                        Log in
                      </button>
                    </li>

                    <li className="nav-item ">
                      <button
                        data-toggle="modal"
                        data-target="#auth"
                        className="  btn btn-pink"
                      >
                        Sign up
                      </button>
                    </li>
                  </>
                )}

                <li className="nav-item languageMenu dropdown">
                  <button
                    className="nav-link dropdownBtn "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-globe"></i>
                    <span className="fw-semibold fs-6 text-uppercase px-1">
                      {country}
                    </span>{" "}
                    <i className="fa fa-angle-down color-pink "></i>
                  </button>
                  <ul className="dropdown-menu rounded-4  shadow p-2">
                    <li>
                      <button className="dropdown-item ">
                        English
                        <i className="ps-4 far fa-circle-check color-pink fs-5"></i>
                      </button>
                    </li>
                  </ul>
                </li>
                {city ? (
                  <li className="nav-item svg position-relative pt-1">
                    {isFavorited?.length > 0 ? (
                      <p className="dot-Badge"></p>
                    ) : (
                      ""
                    )}
                    <NavLink to="/favorite">
                      <i className="far fa-heart color-pink fs-5"></i>
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                <li className="nav-item svg ">
                  <NavLink className="" to="/restaurant">
                 <RestaurantSVG/>
                  </NavLink>
                </li>
              </ul>
            </div>
          </WraperCon>
        </nav>
        {city ? (
          <div className="text-center  pb-3 small-screen d-lg-none d-block ">
            <div className=" position-relative ToolTip  ">
              <div className={`${isTooltip ? "showTooltip" : "hide"}`}>
                <i className="fa-solid fa-caret-up "></i>
                <p className="p-2 Locationtooltip rounded-3">
                  Add your address to see <br />
                  restaurants that deliver to you
                </p>
              </div>
              <button
               data-toggle="modal"
               data-target="#location-modal"
                onMouseEnter={() => setisTooltip(true)}
                className="btn btnCity "
                role="button"
              >
                <IoLocationOutline className="fw-bold  fs-4 pe-1 " />
                <span  className="fw-semibold fs-location color-pink   ">
                  {city}
                </span>{" "}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* // modal */}
    <LocationModal/>
    <AuthModal/>
    </div>
  );
};

export default Navbar;
