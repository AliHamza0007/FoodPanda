import { NavLink, useParams } from "react-router-dom";
import { Link, Element } from "react-scroll";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import WraperCon from "../components/WraperCon";
import SyncLoader from "react-spinners/SyncLoader";
import { DeliverySvg, MinimumSvg, MoreInfo } from "../utils/SVG";
import { useProducts } from "../context/useProducts";
import "../styles/Restaurant.css";
import "../styles/FoodModal.css";
import { useFavorite } from "../context/useFavorite";
import { Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCart } from "../context/useCart";
import RatingStar from "../utils/RatingStar";
import {Food} from '../db/Food';
import axios from "axios";
import PercentageSvg from "../utils/PercentageSvg";
import Cart from "./Cart";
const Restaurant = () => {
  const param = useParams();
  //   console.log(param)
  param?.slug?localStorage.setItem('restaurant',param?.slug):""

  const {cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    
    decreaseQuantity,
    getTotal} =useCart()
    // console.log(cart)
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [singleFood, setSingleFood] = useState(null);
  const [foodId,SetFoodId] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [categories, setCategories] = useState([]);
  const { isFavorited, handleFavourite } = useFavorite();
  const { products } = useProducts(); 
  const Url = import.meta.env.VITE_REACT_Products_API;
    // console.log(param.slug);
  const restaurantDetail = products.filter((p) => p.name === param.slug);
  // console.log(restaurantDetail)
  restaurantDetail?
  setTimeout(() => {
    setRestaurant(restaurantDetail);
    // console.log(restaurantDetail)
  }, 1000):"";
  useEffect(() => {
    setRestaurant(restaurantDetail);
    getProductCategories();
    setTimeout(() => {
      setCity(localStorage.getItem("city"));
      //   console.log(city);
    }, 1000);
    //eslint-disbale/next-line
  }, []);

  
  const [isNavbarScroll, setNavbarScroll] = useState(false);
  const [isCartScroll, setCartScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 300 ? setNavbarScroll(true) : setNavbarScroll(false);

      window.scrollY > 310 ? setCartScroll(true) : setCartScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    getSingleFood()

  }, [foodId])
  
  const getSingleFood=()=>{
if(foodId){
  const data= Food?.filter(f=>f.id===foodId)
      // console.log(data);
      setSingleFood(data)
    }
    }

  const getProductCategories = async () => {
   
    const { data } = await axios.get(Url+"/api/v1/category/get-category");
    if(data?.success)
    {
      // console.log(data?.getCategory);
      setCategories(data?.getCategory);

    }
  }

  return (
    <div className="specficRestaurant">
      
    <div
    className="modal food-modal"
    id="food-modal"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
      

    <div className="modal-dialog " role="document">  
    <div  className="modal-content  rounded-4 ">
    <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <i className="fa fa-close color-pink fs-4"></i>
        </button>

          {

            singleFood? <>
            {
            singleFood.map(p=>(
              <div key={p?.id||p?._id} className="food-data  ">
              <div className="height-overflow-single-food">  
               <img   className="single-food-img" src={p?.image} />
  <div className="container py-3  ">
    
  <h1 className="fw-semibold h2">{p?.name}</h1>
  <p className="small"> {p?.description}</p>
  <p className=" fw-semibold mb-3">Rs. {p?.price}</p>
  <hr/>
  
  </div>     
  </div>    
  <div className="container ">
    <div className="row p-2 ">
  
      <div className="col-md-3 col-12 d-flex align-items-center  justify-content-md-start  justify-content-center  mb-md-0 mb-2 ">
        <div className="d-flex justify-content-center  align-items-center gap-2">
          <i onClick={()=>    decreaseQuantity(p?.id)}
           className="fa fa-minus   bg-pink-light-hover color-pink quantity-button  "></i>
        
          {cart?.filter(food => food?.id === p?.id).length > 0 ? (
    cart?.filter(food => food?.id === p?.id).map(food => (
      <span key={food?.id}>
        <span>{food?.quantity}</span>
      </span>
    ))
  ) : (
    <span>0</span>
  )}
  
        
          <i onClick={()=>increaseQuantity(p?.id)} className="fa fa-plus  bg-pink-light-hover color-pink quantity-button  "></i>
  
        </div>
      </div>
      <div className="col-md-9 col-12  d-flex align-items-center ">
  
      {cart?.some(c => c?.id === p?.id) && (
    <button onClick={() => removeFromCart(p?.id)} className={`btn btn-pink-full small `}>
      Remove from cart
    </button>
  )}
  
  {!cart?.some(c=> c?.id === p?.id) && (
    <button onClick={() => addToCart(p)} className={`btn btn-pink-full small`}>
      Add to cart
    </button>
  )}
    
  
  
      </div>
    </div>
  
  
  
  </div>
     </div>
            )
             
            )

            }
           
            </>:
            <div className="d-flex justify-content-center p-5 align-items-center "> <SyncLoader
            color={"#FF2B85"}
            loading={loading}
            // cssOverride={override}
            size={8}
            aria-label="Loading Spinner"
            data-testid="loader"
          /></div>
          }

     


        </div>   
     
    </div>
 
  </div> 
      <Navbar city={"Select your address"} />
      

      <WraperCon>
        {" "}
        <nav className="d-flex cityNav pt-4">
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

          <NavLink
            className="color-pink text-decoration-none  "
            to={`/city/${city}`}
          >
            {city ? (
              <p className="border-bottom-hover">{city}</p>
            ) : (
              <p className="px-2">
                <SyncLoader
                  color={"#FF2B85"}
                  loading={loading}
                  // cssOverride={override}
                  size={8}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </p>
            )}
          </NavLink>
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

          <p>{param?.slug}</p>
        </nav>
        {restaurant
          ? restaurant?.map((p) => (
              <div key={p.id}>
                <div >
                  {" "}
                  <ul className="list-unstyled small text-secondary d-flex align-items-center flex-wrap mb-2">
                    <li>{p?.categories[0]} </li>
                    <div className="px-2 pb-2">.</div>
                    <li>{p?.categories[1]} </li>
                    <div className="px-2 pb-2">.</div>
                    <li>{p?.categories[2]} </li>
                    <div className="px-2 pb-2">.</div>
                    <li>{p?.categories[3]} </li>
                    <div className="px-2 pb-2">.</div>
                    <li>{p?.categories[4]} </li>
                  </ul>
                  <div>
                    <h3 className="font-bold ">{p.name}</h3>
                    <ul className="list-unstyled small fw-semibold text-secondary d-flex  align-items-center flex-wrap mb-2">
                      <DeliverySvg />
                      <li>
                        <span className="ps-1 ">Free deliery</span>
                      </li>
                      <span className="px-2 pb-2">.</span>
                      <MinimumSvg />
                      <li>
                        <span className="ps-1 ">Rs. 249 Minimum</span>
                      </li>
                      <span className="px-2 pb-2">.</span>
                      <li>
                        <span className="ps-1">Rs. 7.99 Service Fee</span>
                      </li>
                    </ul>
                  </div>
                  <p className="bg-pink-light rounded-pill color-pink d-inline px-2 py-1 fs-12 font-bold font-normal ">
                    {p?.grades[3]?.toFixed(0)}% off
                  </p>
                  <div className="d-md-flex justify-content-between mt-3">
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
                      {" "}
                      <p className="mb-0">
                        <RatingStar />{" "}
                        <span className="fs-12">
                          {" "}
                          {p?.stars?.toFixed(0)}/5
                        </span>{" "}
                      </p>
                      <button className="color-pink btn fw-semibold  bg-pink-light-hover p-1 rounded-3 small">
                        See reviews
                      </button>
                      <button className="color-pink btn fw-semibold  bg-pink-light-hover p-1 rounded-3 small d-flex justify-content-center align-items-center">
                        <p className="pb-0 mb-0">
                          <MoreInfo />
                        </p>{" "}
                        <p className="ps-1 mb-0">More info</p>
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        handleFavourite(p.id);
                      }}
                      className="btn btn-outline-pink d-flex  align-items-center justify-content-center  w-small-full"
                    >
                      {isFavorited.some((c) => c.id === p.id) ? (
                        <span>
                          {" "}
                          <i className="fas fa-heart color-pink fs-5 pe-3" />{" "}
                          Added to Favorite
                        </span>
                      ) : (
                        <span>
                          {" "}
                          <i className="far fa-heart color-pink fs-5 pe-3" />
                          Add to Favorite
                        </span>
                      )}{" "}
                    </button>
                  </div>
                </div>{" "}
                <hr />
                {/* Available Deals */}
                <div className="py-3 ">
                  <h4 className="mb-3">Available deals</h4>
                  <div className="  position-relative overflow-hidden box-offer rounded-3">
                    <div className="bg-box-offer"></div>
                    <div className="icon-corner">
                      <PercentageSvg height={80} color={"#FF2B85"} />
                    </div>
                    <div className="content">
                      <p className="small mb-1">

                        <PercentageSvg height={22} color={"#FF2B85"} />

                        <span className=" ps-1">{p.grades[3]?.toFixed(0)}% off</span>
                      </p>
                      <p className="fs-12 ps-2">
                        Min. order Rs. 149. Valid for
                        <br /> selected items. Auto applied.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </WraperCon>
      <div
        className={`custom-shadow 
 mt-3 pt-2 ${isNavbarScroll ? "navbar-fixed-categories" : ""}`}
      >
        <WraperCon>
          <div className="py-2 d-flex category   fixedNavCategory">
            <input
              type="text"
              className="input-search-menu rounded-pill mb-2 me-2 d-lg-block d-none"
              placeholder="Search in menu"
            />

            <Swiper
              className="Swiper "
              modules={[Navigation, EffectFade]}
              effect="slide"
              speed="1000"
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 3,
                },
                425: {
                  slidesPerView: 1,
                },
              }}
              spaceBetween={0}
              navigation={true}
            >
              {categories?.slice(0, 10)?.map((c, i) => {
                return (
                  <SwiperSlide className="bg-pink-light-hover" key={i}>
                    <Link
                      spy
                      smooth
                      duration={1000}
                      to={c?.name}
                      className="text-decoration-none text-dark fs-12 b-bottom text-capitalize "
                    >
                      {c?.name}
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </WraperCon>
      </div>

      <WraperCon>
        <div className="bg-light row py-3">
          <div className="col-xl-9 col-lg-8 col-12 ">    
            {categories?.slice(0, 10)?.map((c, i) => (
              <Element name={c?.name} className="" key={i}>
                <div className="ps-2">
                  <h4 className="text-capitalize font-bold   ">{c?.name}</h4>
                  <p>A complete meal ,easy and delicious</p>
                </div>
                <div className="container-fluid">
                  <div className="row  gap-3">
                    {Food
                      ?.filter((p) => p?.category === c?.name)
                      .map((p) => (
                        <div
                          className="bg-pink-light-hover position-relative rounded-4  border border-secondary  categoryProductDiv mb-3 col-xl-6 col-12"
                          key={p?.id}
                        >
                               

                          <div className="product-quantity-add">  {cart?.filter(food => food?.id === p?.id).length > 0 ? (
  cart?.filter(food => food?.id === p?.id).map(food => (
    <span key={food?.id}>
      <span>{food?.quantity}</span>
    </span>
  ))
) : (
  <span>0</span>
)}</div>
                          <div   data-toggle="modal"
                          onClick={()=>{SetFoodId(p.id||p._id)
                          }}
                                                      data-target="#food-modal"
                            role="button" className="bg-white color-pink add-Product-btn bg-pink-light-hover">
                            <i className="fa fa-plus fw-normal" />
                          </div>

                          <div 
                                                    onClick={()=>SetFoodId(p.id||p._id)}

                            data-toggle="modal"
                            data-target="#food-modal"
                            role="button"
className=" text-decoration-none text-dark d-flex justify-content-between align-items-center px-2 py-3  "
                          >
                            <div>
                              <p className="fw-bold">{p?.name}</p>
                              <p className="text-secondary flex-wrap small">
                                {p?.description?.substring(0, 25)}
                              </p>
                              <p className="fw-bold mb-0 ">Rs. {p?.price}</p>
                            </div>

                            <img
                              src={p?.image}
                              alt={p?.image}
                              className=" categoryProductImg rounded-3"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </Element>
            ))}
            <div></div>
          </div>

  {
    cart?.length>0?        <div className="d-md-none d-block review-cart-btn">

    <NavLink to="/checkout/payment-opening" className="btn btn-pink-full">
    
      Review cart <span className="px-4"></span> Rs.{getTotal()+7.99}
    </NavLink>
    
              </div>:""
  }
          <div
            className={`col-xl-3 col-lg-4 d-md-block d-none col-12 ${
              isCartScroll ? "cart-fixed-categories" : ""
            }`}
          >
           <Cart/>
          </div>
        </div>
      </WraperCon>
    </div>
  );
};
export default Restaurant;
