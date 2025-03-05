import React, { useContext } from 'react'
import './cartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assest/cart_cross_icon.png'
import { useNavigate } from 'react-router-dom'




export const CartItems = () => {
    const{getTotalCartAmount,all_product,cartItems,removeFromCart,cartSizes}=useContext(ShopContext);
    const navigate = useNavigate();

    const shoppingFee = 450;
    const subtotalAmount = all_product.reduce((total, product) => {
      if (cartItems[product.id] > 0) {
        return total + (product.new_price * cartItems[product.id]);
      }
      return total;
    }, 0);
    const totalAmount = subtotalAmount + shoppingFee;

    const handleCheckout = () => {
      const cartData = {
          totalAmount: getTotalCartAmount(),
          items: all_product.filter(e => cartItems[e.id] > 0).map(e => ({
              id: e.id,
              name: e.name,
              price: e.new_price,
              quantity: cartItems[e.id],
              size: cartSizes[e.id],
              image: e.image,
          }))
      };
      navigate('/Checkout', { state: cartData });
  };

  return (
  
    <div className='cartItems'>
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>  
      <hr />
     {all_product.map((e)=>{
      if(cartItems[e.id]>0)
      {
        return <div>
        <div className="cartItems-format cartItems-format-main">
          <img src={e.image} alt="" className="cartIcon-product-icon" />
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <p>{cartSizes[e.id]}</p>
          <button className="cartItems-quantity">{cartItems[e.id]}</button>
          <p>${e.new_price*cartItems[e.id]}</p>
          <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}}alt="" />
        </div>
        <hr />
      </div>
      }
      return null;
     })}
     <div className="cartItems-down">
      <div className="cartItems-total">
        <h1>Cart Total</h1>
        <div>
          <div className="cartItems-total-item">
            <p>SubTotal</p>
            <p>${subtotalAmount}</p>
          </div>
          <hr />
          <div className="cartItems-total-item">
            <p>Shopping Fee</p>
            <p>${shoppingFee}</p>
          </div>
          <hr />
          <div className="cartItems-total-item">
            <h3>Total</h3>
            <h3>${totalAmount}</h3>
          </div>
        </div>
        <button onClick={handleCheckout}>Proceed To Checkout</button>
      </div>
      <div className="cartItems-promocode">
        <p>If You Have Promocode,Enter It Here</p>
        <div className="cartItems-promoBox">
          <input type="text" placeholder='PromoCode' />
          <button>Submite </button>
        </div>
      </div>
     </div>
    </div>
  )
}
