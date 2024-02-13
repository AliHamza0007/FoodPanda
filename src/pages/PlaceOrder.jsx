const Maps_Api =import.meta.env.VITE_REACT_MAP_API;
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useAddress } from '../context/useAddress';
import { useAuth } from '../Auth/UseAuth';
import { NavLink, useNavigate } from 'react-router-dom';
import {useCart} from '../context/useCart'
import '../styles/PlaceOrder.css'
import { TextField,  } from '@mui/material';
import { toast } from 'react-toastify';
const PlaceOrder = () => {
    const { address, setAddress } = useAddress();
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
  
    useEffect(() => {
      if (address?.lat) {
        setLatitude(address?.lat);
        setLongitude(address?.lon);
      } else if (address?.geometry?.location?.lat) {
        setLatitude(address.geometry.location.lat());
        setLongitude(address.geometry.location.lng());
      }
    }, [address]);
    const mapStyles = {        
      height: "30vh",
      width: "100%"};
    

    const defaultCenter = {
      lat: latitude, lng:longitude

    }
  
    const {cart,setCart,
        getTotal} =useCart();   
   const navigate=useNavigate()
        const [ restaurant_name, setRestaurantName] = useState("");
    const [street, setStreet] = useState("");
    const [addressVisible, setAddressVisible] = useState();
    const [floor, setFloor] = useState("");
    const [building, setBuilding] = useState("");
    
    const updateAddress = (e) => {
      e.preventDefault();
    
      const locationDetails = {
        location: address?.formatted_address || address?.name ||"Not Provide",
        street,
        floor,
        building
      };
    
      // Assuming 'address' is an object, not an array
     setAddress({
        ...address,
        details: [...(address.details || []), locationDetails]
      });
    
    //   console.log(address);
    setAddressVisible(false)
    
    };
      const [auth]=useAuth()
       
           const tipOptions = [
        { id: 0, value: 0, label: "Not Now" },
        { id: 1, value: 25, label: "Rs. 25.00" },
        { id: 2, value: 50, label: "Rs. 50.00" },
        { id: 3, value: 100, label: "Rs. 100.00" },
        { id: 4, value: 200, label: "Rs. 200.00" },
      ];
    
      const [Tip, setTip] = useState(0);
      const [selectedTipchoose, setSelectedTipChoose] = useState(false);
    
const placeOrder=(e)=>{
    e.preventDefault()
address?.details?(   toast.success("Order Placed")
,setCart([])
,
setTimeout(() => {
    navigate('/')
localStorage.removeItem("cart")
}, 3000)):toast.warning("Enter Street & Floor please")

 


}


      const handleTip=(value)=>{
        setTip(value)
        setSelectedTipChoose(true)
// console.log(value)
}
 
const handleTipChoosen=()=>{
setSelectedTipChoose(!selectedTipchoose)
}

useEffect(() => {
  const name=localStorage.getItem('restaurant')
  if(name)
  {
    setRestaurantName(name)
  }
    const data =  localStorage.getItem("Tip" );
    const data1 =    localStorage.getItem("selectedTipChoose" );
    data ? setTip(Number(data)) : "";
    data1=="true" ? setSelectedTipChoose(true) : "";
data1=='true'?( localStorage.setItem("Tip",data ),
localStorage.setItem("selectedTipChoose",data1 )):""
  }, []);


  useEffect(() => {
    if(selectedTipchoose)
    {
        localStorage.setItem("Tip",Tip );
        localStorage.setItem("selectedTipChoose",selectedTipchoose );
    }else{
        localStorage.removeItem("Tip" );
        localStorage.removeItem("selectedTipChoose" );
    }
    
  }, [selectedTipchoose,Tip]);
 

  return (
    <Layout>
        

        <div className='container col-10 py-4 place-order'>

<div className='row'>


    <div className="col-md-7">
<div className='shadow bg-white  rounded-4 p-4 mb-3'>
    <h4 className="font-bold">

        Delivery address
    </h4>
    <LoadScript
       googleMapsApiKey={Maps_Api} >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
      <div className="d-flex justify-content-between  align-items-center pt-3 ">
<p>
  { address?.formatted_address||address?.name  || 'Not provided or saved' }
</p>    <p data-toggle="modal"
                    data-target="#location-modal"
                    role="button" className="color-pink fw-semibold ">edit</p>
</div><hr/>
<h4 className="fw-semibold text-secondary">

We're missing your street</h4>

<form className='place-order-page'>
<TextField
size='small'
                      className="w-100 rounded-4  my-3"
                      value={street}
                      onChange={(e)=>{setStreet(e.target.value)
                      
                        setAddressVisible(true)}}
                label="Street"
                      placeholder="Street"
                    />
<TextField
                      className="w-100 rounded-4 mb-3 "
       size="small"               value={floor}
                      onChange={(e)=>{setFloor(e.target.value)
                        setAddressVisible(true)}}
                label="Floor"
                      placeholder="Floor"
                    />
<TextField


                      className="w-100 rounded-4  mb-3"
                      value={building}
                      onChange={(e)=>{setBuilding(e.target.value)
                        setAddressVisible(true)}}
                label="Note to rider e.g building or Landmark"
                      placeholder="Note to rider e.g building or Landmark"
                    />

                    <div>
                        <button onClick={updateAddress} className={`btn btn-pink-full   ${addressVisible?" ":"disabled"}`}>save and continue</button>
                    </div>

</form>
</div>
<div className='shadow bg-white  rounded-4 p-4 mb-3'>
<h4 className="font-bold">

Personal Details
</h4>

<p className="mb-1"><span className="fw-semibold pe-2">Name:</span> 
{auth?.user?.name}
</p>
<p className="mb-1"><span className="fw-semibold pe-2">Email:</span> 
{auth?.user?.email}
</p>
<p ><span className="fw-semibold pe-2">Phone:</span> 
{auth?.user?.phone}
</p>
<NavLink to="/profile" className="btn btn-pink">Update</NavLink>
</div>


<div className='shadow bg-white rounded-4 p-4 mb-3'>
      <h4 className="font-bold">Tip your rider</h4>
      <p className='small'>Your rider receives 100% of the tip</p>
      <div className="position-relative overflow-auto ">
        <div className='width-600'>
          {tipOptions.map((option) => (
            <button
            key={option.id}
            onClick={() => handleTip(option.value)}
            className={`border-secondary rounded-pill bg-pink-light-hover small btn  btn-select-tip fw-semibold pointer me-1 ${Tip === option.value ? "selected" : ""}`}
          >
            {option.label}
          </button>
          ))}
        </div>
        <p className="fs-12 text-center">most common</p>
      </div>
      <label className='py-3'>
        <input
          value={selectedTipchoose}
          checked={selectedTipchoose}
          onChange={handleTipChoosen}
          type="checkbox"
          className="me-3 border-0 form-checkbox custom-checkbox"
        />
        <span className="small fw-semibold color-pink-hover pointer">Save it for the next order</span>
      </label>
    </div>


    <div>
<button onClick={placeOrder} className={` btn btn-pink-full ${auth?.token ?" ":"disabled "}`}>Place Order</button>
       
    </div>
    </div>
    <div className="col-md-5">
<div className='shadow bg-white  rounded-4 p-4'>
    <h5 className="font-bold">

    Your order from</h5>



    {
  cart?.length > 0 ? (
    <>
   <p className="small">
        {restaurant_name}
      </p>
    {cart.map(p=>{return <div key={p?.id} className="d-flex justify-content-between  align-items-center ">


      <p className="mb-1 small">{p?.quantity} x {p?.name}</p>
      <p className="mb-1 small">
       Rs. { p.price * p.quantity}
      </p>
      </div>
       
    })}
    <hr className="mb-3"/>
    <div className="d-flex   justify-content-between align-items-center">

<p className="mb-1 small">
    Subtotal
</p>
<p className="mb-1 small">
    Rs. {getTotal()}
</p>

    </div>
    <div className="d-flex   justify-content-between align-items-center">
<p className="mb-1 small">
    Delivery Fee
</p>
<p className="mb-1 small">
  Free
</p>
</div>
    <div className="d-flex   justify-content-between align-items-center">
<p className="mb-1 small">
Service fee
</p>
<p className="mb-1 small">
  Rs .7.99
</p>
</div>
    <div className="d-flex   justify-content-between align-items-center">
<p className="mb-1 small">
VAT
</p>
<p className="mb-1 small">
  Rs. 320
</p>
</div>
    
    <div className="d-flex   justify-content-between align-items-center">
<p className="mb-1 small">
Rider`s Tip
</p>
<p className="mb-1 small">
  Rs.{Tip?Tip:0}
</p>
</div>
    
    <div className="d-flex mt-3   justify-content-between align-items-center">
<p className="font-bold mb-0 fs-2">
Total
</p>
<p className="font-bold mb-0 fs-2">
  Rs.{getTotal()+Tip+7.99+320}
</p>
</div>
<p className='small'>(Incl. VAT)</p>
    
    </>
  ) : (
    null
  )
}
</div>


    </div>
</div>

        </div>
    </Layout>
  )
}

export default PlaceOrder