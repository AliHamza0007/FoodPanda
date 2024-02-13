import React, {  useState } from 'react'
import G from "../assets/googleLogo.png";
import '../styles/AuthModal.css'
import {validate} from "react-email-validator";
import { toast } from 'react-toastify';

import { EmailSVG, ForgotSVG, LockSVG } from '../utils/SVG';
import TextField from "@mui/material/TextField";
import axios from 'axios';
import { useAuth } from '../Auth/UseAuth';
const Url=import.meta.env.VITE_REACT_Server_API;


const AuthModal = () => { 
const [auth,setAuth]=useAuth();
const [step, setStep] = useState(0)
  const [email, setEmail] = useState("")
  const [emailValid, setEmailValid] = useState(false)
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setRePassword] = useState("")
  const [resetToken, setResetToken] = useState("")
  const [passwordType, setPasswordType] = useState(false)

 
    const handleSignUp=async()=>{
        let resetToken = Math.floor(Math.random() * (300 * 1000));

      // console.log(resetToken)
const userDetails={name,email,password,phone,resetToken}
// console.log(userDetails)
const { data } = await axios.post(
  `${Url}/api/v1/auth/register`,
  userDetails,  
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);
data?.success?(
  // console.log(data)
  toast.success(data?.message),
setStep(1),resetInputs()
):toast.error(data?.message),setStep(1);
    }
  const handleLogin = async () => {
    const userDetails = {  email, password };
  
    // console.log(userDetails);
    const { data } = await axios.post(  `${Url}/api/v1/auth/login`
    , userDetails);
        
    if(data?.success){
      // console.log(data);
            localStorage.setItem('panda-auth',JSON.stringify(data));
            setAuth({...auth,user:data?.user,token:data?.token});resetInputs();
      toast.success(data?.message);
    handleCloseModal();

    }else{toast.error(data?.message);
    }
  };
  const handleReset=async()=>{
if(password===confirmPassword){
 const userDetails = {  email,confirmPassword ,resetToken };
  // console.log(userDetails);
    const { data } = await axios.post(  `${Url}/api/v1/auth/forgot-password`
    , userDetails);
    if(data?.success){
      // console.log(data)
      handleCloseModal();
      toast.success(data?.message);
      setAuth({user:data?.user});
            localStorage.setItem('panda-auth',JSON.stringify(data?.user));
            resetInputs();
}else{toast.error(data?.message);}
    }else{toast.error("Password Is Not Same")}
  }
  
  const handleRequestOTP=async ()=>{
    const {data}=await axios.post( `${Url}/api/v1/auth/otp-request`,{email,message:"Send OTP Please FoodPanda"})
    data?.success?(toast.success(data?.message),
    setStep(step+1)
    ):""

  }
  
  const handleEmailValid=(value)=>{

    validate(value)?setEmailValid(true)
    :setEmailValid(false)

  }

  const handleCloseModal=()=>{
    document.getElementById("auth").style.display = "none";
    document.getElementsByClassName("modal-backdrop")[0].classList.remove('in', 'modal-backdrop');
    }
    const resetInputs=()=>{
      setName('');
      setPhone('');
      setEmail('');
      setPassword('');
      setRePassword('');
      setResetToken('');
      setStep(0);
    } 
    
    return (
    <div
    className="modal  "
    id="auth"

    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">  
    <div  className="modal-content p-4 rounded-4 ">
   
       {
         step===0?
         "": <i onClick={()=>{


          step===10?setStep(step-10):setStep(step-1)
         }}
         className="fa fa-arrow-left bg-pink-light-hover  p-2 color-pink  arrow-back rounded-pill  "></i>
          }
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <i className="fa fa-close color-pink fs-4"></i>
        </button>

        {

          step===0?<div  className="step-1">
          <div className="mt-4">
          
          <h2 className="fs-3 fw-bold">Welcome!</h2>
          <p>Sign up or log in to continue</p>
          <div className="text-center mt-4">
            <button  className="btn btn-primary d-block w-100 fw-semibold position-relative mb-3">
              <i className="fa-brands fa-facebook fs-5 btnBrandIcon "></i>{" "}
              Continue with Facebook
            </button>
            <button  className="btn border btnG d-block w-100  position-relative mb-3">
              <img src={G} className=" fs-5 btnBrandIcon G"></img> Continue
              with Google
            </button>
            <button className="btn btn-dark d-block w-100 fw-semibold position-relative mb-3">
              <i className="fa-brands fa-apple fs-5 btnBrandIcon "></i>{" "}
              Continue with Apple
            </button>
          
            <p>or</p>
          
            <button onClick={()=>
              setStep(step+1)
            
         } className="btn btn-pink-full   mb-3">Log in</button>
          
            <button  onClick={()=>setStep(step+10)} className="btn btn-outline-pink-full    mb-3">
              Sign up
            </button>
            </div> 
          
          </div>
          </div 
          >
          
          
          :step===1?<div className="step-2">
<div className="py-4">

<EmailSVG/>
<p className='h4 mt-3 font-bold'>

What's your email?
</p>
<p className="small" >

We'll check if you have an account
</p>
<TextField  size="small"
                    className="w-100 border border-dark rounded-3 my-2"
                    label="Email"
                    value={email}
                    type="email"
                    onChange={(e)=>
                      {
                      setEmail(e.target.value)
                      handleEmailValid(e.target.value)
                    }}
                    placeholder="Email "
                  />
                {
                  email.length>5?  <p className={`${emailValid?"text-success":"text-danger"} fs-12 ps-2 `} > {emailValid?"Valid Email":"Not Valid "}</p>:""
                }
                   


                    <button onClick={()=>setStep(step+1)} className={`btn btn-pink-full   my-3  ${emailValid?"":"disabled"}`}>Continue</button>




</div>

</div>

:step===2?<div className="step-3">
<div className="py-4">

<LockSVG/>
<p className='h4 mt-3 font-bold'>

Welcome back!
</p>
<p className="small" >

Log in by typing your password. We can also send a login link to your email.</p>
<p className="small fw-semibold">{email}</p>
<div className="position-relative" >
<i onClick={()=>setPasswordType(!passwordType)}  className={`color-pink btnEye fas ${passwordType?'fa-eye-slash':'fa-eye'}`}/>

<TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="Password"
                    value={password}
                    type={passwordType?"text":"password"}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password "
                    />
                    </div>

<p onClick={()=>setStep(step+1)} className='small color-pink bg-pink-light-hover  p-2 d-inline pointer'>Forgotten Passsword ?</p>
                    <button onClick={()=>handleLogin()} className={`btn btn-pink-full small mt-4   my-3  ${password.length>7?"":"disabled"}`}>Log in with password</button>




</div>

</div>
:step===3?<div className="step-4">
<div className="pt-4 ">

<ForgotSVG/>
<p className='h4 mt-4 font-bold'>

Forgot your password?
</p>
<p className="small" >

Enter your email and we'll send you a link to reset your password
</p>

<TextField  size="small"
                    className="w-100 border border-dark rounded-3 my-2"
                    label="Email"
                    value={email}
                    type="email"
                    onChange={(e)=>
                      {
                      setEmail(e.target.value)
                      handleEmailValid(e.target.value)
                    }}
                    placeholder="Email "
                  />
                {
                  email.length>5?  <p className={`${emailValid?"text-success":"text-danger"} fs-12 ps-2 `} > {emailValid?"Valid Email":"Not Valid "}</p>:""
                }
                    <button onClick={()=>{
                      
                      handleRequestOTP()
                      
                      
                     
                      
                      }} className={`btn btn-pink-full   my-3  ${email.length>1?"":"disabled"}`}>Request OTP</button>



<p  onClick={()=>setStep(step-1)} className='color-pink fs-12 bg-pink-light-hover p-1 d-inline '>Back to login</p>
</div>


</div>
:step===4?
<div className="step-5">
<div className="py-4">

<LockSVG/>
<p className='h4 mt-3 font-bold'>

Welcome back!
</p>
<p className="small" >

Enter Reset Token From your Email.</p>
<p className="small fw-semibold">{email}</p>
<TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="Token"
                    value={resetToken}
                    onChange={(e)=>setResetToken(e.target.value)}
                    placeholder="Enter Token "
                    />

<div className="position-relative" >
<i onClick={()=>setPasswordType(!passwordType)}  className={`color-pink btnEye fas ${passwordType?'fa-eye-slash':'fa-eye'}`}/>

<TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="New Password"
                    value={password}
                    type={passwordType?"text":"password"}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="New Password "
                    />
                    </div>


                    <button onClick={()=>{
                      setStep(step+1)
                    }} className={`btn btn-pink-full small mt-4   my-3  ${password.length>7?"":"disabled"}`}>Next</button>




</div>
</div>
:step===5?
<div className="step-6">
<div className="py-4 text-center" >

<LockSVG/>
<p className='h4 mt-3 font-bold'>

</p>
<p className="small " >

Confirm Passsword.</p>
<div className="position-relative" >
<i onClick={()=>setPasswordType(!passwordType)}  className={`color-pink btnEye fas ${passwordType?'fa-eye-slash':'fa-eye'}`}/>

<TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="Confirm Password"
                    value={confirmPassword}
                    type={passwordType?"text":"password"}
                    onChange={(e)=>setRePassword(e.target.value)}
                    placeholder="Confirm Password "
                    />
                    </div>


                    <button onClick={()=>{
                      handleReset()
                    }} className={`btn btn-pink-full small mt-4   my-3  ${password.length>7?"":"disabled"}`}>Reset Password</button>




</div>
</div>          :step===10?<div className="step-10 sign-up">
<div className="py-4">

<EmailSVG/>
<p className='h4 mt-3 font-bold'>

What's your email?
</p>

<TextField  size="small"
                    className="w-100 border border-dark rounded-3 my-2"
                    label="Email"
                    value={email}
                    type="email"
                    onChange={(e)=>
                      {
                      setEmail(e.target.value)
                      handleEmailValid(e.target.value)
                    }}
                    placeholder="Email "
                  />
                {
                  email.length>5?  <p className={`${emailValid?"text-success":"text-danger"} fs-12 ps-2 `} > {emailValid?"Valid Email":"Not Valid "}</p>:""
                }
                   


                    <button onClick={()=>setStep(step+1)} className={`btn btn-pink-full   my-3  ${emailValid?"":"disabled"}`}>Continue</button>




</div>

</div>
:step===11?<div className="step-11 sign-up">
<div className="py-4 text-center">



<p className="small fw-semibold">Email: {email}</p>
<div className="position-relative" >
<i onClick={()=>setPasswordType(!passwordType)}  className={`color-pink btnEye  fas ${passwordType?'fa-eye-slash':'fa-eye'}`}/>

<TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="Password"
                    value={password}
                    type={passwordType?"text":"password"}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Password "
                    />
                    </div>


                 

                    <TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="Name"
                    value={name}
                    type="text"
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Name "
                    />
                    <TextField  size="small"
                    className="w-100 border border-dark rounded-3 mb-4"
                    label="Phone"
                    value={phone}
                    type="number"
                    onChange={(e)=>setPhone(e.target.value)}
                    placeholder="Phone "
                    />
   <button onClick={()=>handleSignUp()} className={`btn btn-pink-full small mt-4   my-3  ${password.length>7?"":"disabled"}`}>Sign Up</button>

</div>

</div>
:""
        }




      </div>    
     
    </div>
 
  </div>  )
}

export default AuthModal