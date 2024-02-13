import React from 'react'
import '../styles/Cart.css'
import giphy from "../assets/giphy.gif";
import { useCart } from "../context/useCart";
import { useNavigate,NavLink } from 'react-router-dom';


const Cart = () => {
    const {cart,getTotal,addToCart,
      removeFromCart,
      increaseQuantity,
      
      decreaseQuantity,}=useCart();
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);

    };
  
  return (
    <div className="rounded-3 border border-secondary  p-3">



        <div className="
        d-md-none d-flex justify-content-between align-items-center pb-5">
<p className="mb-0">  Cart</p>
        <button onClick={goBack}
          type="button"
          
          className="close btn rounded-pill border-secondary d-flex justify-content-center align-items-center  bg-white bg-pink-light-hover"
         
        >
          <i className="fa fa-close color-pink fs-4"></i>
        </button>

        </div>
    <div
      id="exTab1"
      className=" py-3  height-overflow-cart-baskit"
    >
      <ul className="nav nav-pills  d-flex justify-content-center">
        <li className="active">
          <NavLink
            className="text-decoration-none text-dark   rounded-3 nav-link-tab-cart bg-pink-light-hover"
            to="#1a"
            data-toggle="tab"
          >
            delivery
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-decoration-none text-dark   rounded-3 nav-link-tab-cart bg-pink-light-hover"
            to="#2a"
            data-toggle="tab"
          >
            pick up
          </NavLink>
        </li>
      </ul>
      {
        cart?.length>0 ?<>
        
        
        <div className=" py-5">
        <p >Your Items</p>

        <div className="cart-items  py-2">
    {cart.map((product) => (
      <div
        className="cart-item  row mb-2 p-2 border-bottom border-secondary "
        key={product.id}
      >
        <img
          className="  cart-img col-3 p-0"
          src={product.image}
          alt={product.name}
        />
        <div className="cart-item-details col-9">
          <h5 className="color-pink fw-semibold fs-6">
            {product.name?.substring(0, 15)}
          </h5>
        <div className="d-flex justify-content-between align-items-center">  <p className="cart-item-price mb-0">
            ${product?.price}
          </p>
          <div className="cart-item-quantity">
          <div className="d-flex justify-content-center border border-secondary rounded-pill  align-items-center gap-1">


{              
cart?.filter(food => food?.id === product?.id).map(food => (
<span key={food?.id}>
    {
            
food?.quantity>1 ?


<>  <i  onClick={()=>   decreaseQuantity(product?.id)}  className="fa fa-minus   bg-pink-light-hover color-pink quantity-button border-0  "></i>
</>
:
<>
<i onClick={()=>      removeFromCart(product?.id)
} className="fa fa-trash-can   bg-pink-light-hover color-pink quantity-button border-0  "></i>

</>
    }
</span>
))

}


            


{cart?.filter(food => food?.id === product?.id).length > 0 ? (
cart?.filter(food => food?.id === product?.id).map(food => (
<span key={food?.id}>
<span>{food?.quantity}</span>
</span>
))
) : (
<span>0</span>
)}


<i onClick={()=>increaseQuantity(product?.id)} className="fa fa-plus  bg-pink-light-hover color-pink quantity-button border-0  "></i>

</div>
          </div></div>
        
        </div>
      </div>
    ))}

    <div className="container  d-flex justify-content-between  align-items-center  ">

<p className="small mb-1">SubTotal</p>
<p className="small mb-1">


Rs. {getTotal()}
</p>

    </div>
    <div className="container  d-flex justify-content-between  align-items-center  ">

<p className="small mb-1">Service Fee</p>
<p className="small mb-1">


Rs. 7.99
</p>

    </div>

  </div>

        </div>
        
        
        
        </>:<>  <div className="tab-content clearfix text-center">
        <div className="tab-pane active" id="1a">
          <img src={giphy} alt="giphy" className="giphy" />
          <p className="fe-bold">Hungry?</p>
          <p className="px-md-5 px-3">
            You haven't added anything to your cart
          </p>
        </div>
        <div className="tab-pane" id="2a">
          <img src={giphy} alt="giphy" className="giphy" />
          <p className="fe-bold">Hungry?</p>
          <p className="px-md-5 px-3">
            You haven't added anything to your cart
          </p>
        </div>
      </div>
        </>
      }
    
    </div>

    <div className="d-flex justify-content-between align-items-center py-2">
      <p>
        <span className="fw-bold ">Total</span>{" "}
        <span className="fs-12">(incl.Tax)</span>
      </p>
      <p className="fw-bold">Rs.
      
      {


getTotal()+ cart?.length>0 ?7.99:0
      }
      
      
      </p>
    </div>
    <NavLink to="/checkout/payment-opening/place-order" className={`btn btn-block w-100 btn-pink-full fw-semibold  py-2   ${ cart?.length>0 ?"":"disabled"}`}>
      Review Payment and Address
    </NavLink>
  </div>
  )
}

export default Cart