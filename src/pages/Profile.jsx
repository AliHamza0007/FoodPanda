import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../Auth/UseAuth'

import {validate} from "react-email-validator";
import { ToastContainer, toast } from 'react-toastify';
import TextField from "@mui/material/TextField";
import axios from 'axios';

const Url=import.meta.env.VITE_REACT_Auth_API;
const Profile = () => {
    
  const [email, setEmail] = useState("")
  const [emailValid, setEmailValid] = useState(false)
  const [infoValid, setInfolValid] = useState(false)
  const [emailChangeValid, setEmailChangeValid] = useState(false)
  const [updPassWalid, setUpdPassWalid] = useState(false)

  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setRePassword] = useState("")
  const [resetToken, setResetToken] = useState("")
  const [passwordType, setPasswordType] = useState(false)
  const [auth,setAuth]=useAuth();

  const handleEmailValid=(value)=>{

    validate(value)?setEmailValid(true)
    :setEmailValid(false)

  }

 const userDetails={phone,name,email};
  const updateInfo=async()=>{

    if(name===""||phone===""){
        toast.error("Name or Phone is Required")
    }else{
        const { data } =await axios.put(`${Url}/api/v1/auth/user-update/${auth?.user?.id || auth?.user?._id}`, userDetails, {
            headers: {
                'Authorization': auth?.token
            }
        });
        if(data?.success){
            toast.success(data?.message);
            setAuth({...auth,user:data?.updateUser});
            let ls = localStorage.getItem("panda-auth");
            ls = JSON.parse(ls);
            ls.user = data?.updateUser;
            localStorage.setItem("panda-auth", JSON.stringify(ls));
        }else{toast.error(data?.message)}
    }

  }
  const updateEmail=async()=>{
    if(!email){
        toast.error("Email is Required")
    }else
    {const { data } =await axios.put(`${Url}/api/v1/auth/user-update/${auth?.user?.id || auth?.user?._id}`, userDetails, {
            headers: {
                'Authorization': auth?.token
            }
        });
        if(data?.success){
            toast.success(data?.message);
            setAuth({...auth,user:data?.updateUser});
            let ls = localStorage.getItem("panda-auth");
            ls = JSON.parse(ls);
            ls.user = data?.updateUser;
            localStorage.setItem("panda-auth", JSON.stringify(ls));
        }else{toast.error(data?.message)}
    }
  }
  const updatePassword=async()=>{
if(password===""||confirmPassword===""){
toast.warn('Both Password Required',{
    position: "bottom-center"
});
} else{
    
const { data } =await axios.put(`${Url}/api/v1/auth/user-password-update/${auth?.user?.id || auth?.user?._id}`, {password,confirmPassword}, {
    headers: {
        'Authorization': auth?.token
    }
});
if(data?.success){

    toast.success(`${data?.message}`,{position:"bottom-center"});
    setPassword("");
    setRePassword("");
}
else {
    toast.error(`${data?.message}`,{position:"bottom-center"});
}




}
  
  

  }



  useEffect(() => {
    if (auth?.user) {
        setName(auth.user.name);
        setPhone(auth.user.phone);
        setEmail(auth.user.email);
        setEmailValid(true);
    }
}, [auth]);

  return (
    <Layout>

        <div className="col-lg-6 col-md-10 col-11 mx-auto  py-5">

<p className="fw-semibold fs-5 pt-4">My Profile</p>
<div>

    
<TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="Name"
                    value={name}
                    type="text"
                    onChange={(e)=>{setName(e.target.value)
                    
                    setInfolValid(true)}}
                    placeholder="Name "
                    />
                    <TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="Phone"
                    value={phone}
                    type="number"
                    onChange={(e)=>{setPhone(e.target.value)
                        setInfolValid(true)}}
                    placeholder="Phone "
                    />
                    
   <button  onClick={()=>updateInfo()}  className={`btn btn-pink small  ${infoValid?"":"disabled "}   my-2 mb-4`}>Save</button>
<hr/>

</div>

<p className="fw-semibold fs-5">Email</p>
<div><TextField  size='small'
                    className="w-100 border border-dark rounded-3 my-2"
                    label="Email"
                    value={email}
                    type="email"
                    onChange={(e)=>
                      {
                      setEmail(e.target.value);
                      handleEmailValid(e.target.value);
                      setEmailChangeValid(true);
                    }}
                    placeholder="Email "
                  />
                {
                  email.length>5?  <p className={`${emailValid?"text-success":"text-danger"} fs-12 ps-2 `} > {emailValid?"Valid Email":"Not Valid "}</p>:""
                }
                  <button  onClick={()=>updateEmail()}  className={`btn btn-pink small  ${emailChangeValid?"":"disabled "}   my-2 mb-4`}>Save</button>
<hr/>
             </div>
<div>
    
<p className="fw-semibold mt-3 fs-5">    Passsword</p>

<div className="position-relative" >
<i onClick={()=>setPasswordType(!passwordType)}  className={`color-pink btnEye  fas ${passwordType?'fa-eye-slash':'fa-eye'}`}/>

<TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="Current Password"
                    value={password}
                    type={passwordType?"text":"password"}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Current Password "
                    />
                    </div>

<div className="position-relative" >
<i onClick={()=>setPasswordType(!passwordType)}  className={`color-pink btnEye fas ${passwordType?'fa-eye-slash':'fa-eye'}`}/>

<TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="New Password"
                    value={confirmPassword}
                    type={passwordType?"text":"password"}
                    onChange={(e)=>{
                        setRePassword(e.target.value);
                            setUpdPassWalid(true);
                          
                    }
                    }
                    placeholder="New Password "
                    />
                    </div>


                  <button  onClick={()=>updatePassword()}  className={`btn btn-pink small  ${updPassWalid?"":"disabled "}   my-2 mb-4`}>Save</button>
<hr/>
             </div>
        </div>
    </Layout>
  );
}

export default Profile;