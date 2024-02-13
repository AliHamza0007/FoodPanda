import {useState} from 'react'
import TextField from "@mui/material/TextField";
import { usePlacesWidget } from "react-google-autocomplete";
import '../styles/LocationModal.css'
const Maps_Api =import.meta.env.VITE_REACT_MAP_API;
import {useAddress} from '../context/useAddress'
import { useNavigate } from 'react-router-dom';
const LocationModal = () => {
  const { address, setAddress } = useAddress();
  const [location, setLocation] = useState(null);
  const [locationValue, setLocationValue] = useState("");
  const navigate=useNavigate()

  const handlePlaceSelected = async (place) => {
          
      // Set other state values
      setLocation(place?.formatted_address);
         setLocationValue(place?.formatted_address);
   await setAddress(place)
   document.getElementById("location-modal").style.display = "none";
   document.getElementsByClassName("modal-backdrop")[0].classList.remove('in', 'modal-backdrop');
 
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
              setAddress(data)

              const city =
                data.name +
                " " +
                data.address.historical_division +
                " " +
                data.address.postcode;
              setLocation(city);
              setLocationValue(city);
              document.getElementById("location-modal").style.display = "none";
              document.getElementsByClassName("modal-backdrop")[0].classList.remove('in', 'modal-backdrop');
            
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
const handleFoodSearch=(e)=>{
  e.preventDefault();
  navigate('/address/restaurants')

// console.log(location)
// console.log(locationValue)



}
  return (
    <div
    className="modal location-modal "
    id="location-modal"

    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">  
    <div className="modal-content" >
              <div className="d-lg-flex  locationSearch align-items-center gap-3 bg-white p-3 shadow rounded-4">
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
                    className="input-group-text color-pink border-0 btn pb-2"
                    onClick={() => {
                      getLocation();
                    }}
                    id="basic-addon2"
                  >
                    <i className="fa fa-location color-pink pe-1"></i>
                    Locate Me
                  </span>
                </div>

                <button onClick={handleFoodSearch} className="btn btn-find-food "><i className="fa fa-arrow-right"/></button>
              </div>
</div>

    </div>
 
  </div>   )
}

export default LocationModal