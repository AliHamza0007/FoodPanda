import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { usePlacesWidget } from "react-google-autocomplete";
import WraperCon from "../../components/WraperCon";
import bannerImg from "../../assets/home/refresh-hero-home-pk.webp";
import { useAddress } from "../../context/useAddress";
import { useNavigate } from "react-router-dom";
const Maps_Api =import.meta.env.VITE_REACT_MAP_API;
const Banner = () => {
  const { address, setAddress } = useAddress();
  const [location, setLocation] = useState(null);
  const [locationValue, setLocationValue] = useState("");

  const handlePlaceSelected = async (place) => {
    try {
      
      
      setLocation(place?.formatted_address);
      setLocationValue(place?.formatted_address);
   await  setAddress(place);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { ref } = usePlacesWidget({
    apiKey: Maps_Api,
    onPlaceSelected: (place) => handlePlaceSelected(place),
  });


  const getLocation =() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Use reverse geocoding to get the location details
           fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              // console.log(data)
              setAddress(data);



              const city =
                data.name +
                " " +
                data.address.historical_division +
                " " +
                data.address.postcode;
              setLocation(city);
              setLocationValue(city);     

            })
            .catch((error) => {
              console.error("Error fetching location:", error);
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  };


  
  const handleLocation = (e) => {
    setLocationValue(e.target.value);
  };
  const navigate=useNavigate()
const handleFoodSearch=(e)=>{
  e.preventDefault();
  navigate('/address/restaurants')


// console.log(location)
// console.log(locationValue)



}

  return (
    <div className="bg-light py-5 position-relative overflow-hidden banner ">
      <img src={bannerImg} alt="bannerImg" className="img-fluid bannerImg" />
      <WraperCon className="my-xl-5 py-5   ">
        <div className="row py-xl-5">
          <div className="col-lg-8 col-12">
            <h1 className="heading fw-light">
              It's the food and groceries you
              <br className="d-lg-none d-md-block d-none" /> love,
              <br className="d-lg-block d-none" /> delivered
            </h1>
            <form className="mt-lg-0 pt-2 mt-5">
              <div className="d-lg-flex mt-4 mb-2 locationSearch align-items-center gap-3 bg-white p-3 shadow rounded-4">
                <div className="input-group mb-lg-0 mb-2 d-flex align-items-center rounded-3 border bg-white  ">
                  <div className="form-floating ps-md-2 ps-3">
                    <TextField
                      className="w-100 border-0"
                      id="outlined-multiline-flexible"
                      label={`${
                        location ? location : "Your street and street number"
                      }`}
                      value={locationValue}
                      inputRef={ref}
                      onChange={handleLocation}
                      placeholder="Street, Postal Code "
                    />
                  </div>
                  <span
                    className="input-group-text color-pink border-0 btn pointer "
                    onClick={() => getLocation()
                    }
                    id="basic-addon2"
                  >
                    <i className="fa fa-location color-pink pe-md-3   pe-1"></i>
                    <b>Locate Me</b>
                  </span>
                </div>

                <button onClick={handleFoodSearch} className="btn btn-find-food">Find Food</button>
              </div>
            </form>
          </div>
        </div>
      </WraperCon>
    </div>
  );
};

export default Banner;
