import React from 'react'
import Navbar from '../components/Navbar'
import AllRestaurants from './cityPageCom/AllRestaurants'
import { useAddress } from '../context/useAddress'
import Footer from '../components/Footer'

const LocationPage = () => {
    const {address}=useAddress()
    // console.log(address)
  return (
    <>
    <Navbar city={address?.formatted_address||address?.name}/>
    <AllRestaurants city={address?.formatted_address||address?.name}/>
    <Footer city={address?.formatted_address||address?.name}/>
    </>
  )
}

export default LocationPage