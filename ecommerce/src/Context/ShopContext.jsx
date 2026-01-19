import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext (null);

    
const getDefaultCart =()=>{
    let cart ={};
for (let index = 0; index < 300+1; index++) {
   cart[index] = 0;
    
}
return cart;
}
 
const ShopContextProvider= (props) =>{

    const [all_product,setAll_Product]= useState([]);

        const [cartItems,setCartItems]=useState(getDefaultCart());
       
        const [cartSizes, setCartSizes] = useState({});

        useEffect(()=>{
            fetch(`${process.env.REACT_APP_BACKEND_BASEURL}/allproducts`)
            .then((response)=>response.json())
            .then((data)=>setAll_Product(data))
        
        
            if(localStorage.getItem('auth-token')){
                fetch(`${process.env.REACT_APP_BACKEND_BASEURL}/getcart`,{
                    method:'POST',
                    headers:{
                        Accept:'application/form-data',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json',
                    },
                    body:"",
                }).then((response)=>response.json())
                .then((data)=>setCartItems(data));
            }

        },[])

        


        const addToCartWithSize=(itemId,size)=>{
            setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
            setCartSizes((prev) => ({ ...prev, [itemId]: size }));

            if(localStorage.getItem('auth-token')){
                fetch(`${process.env.REACT_APP_BACKEND_BASEURL}/addtocart`,{
                    method:'POST',
                    headers:{
                        Accept:'application/form-data',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({"itemId":itemId}),
                })
                .then((response)=>response.json())
                .then((data)=>console.log(data));    
            }
        }
      
        const removeFromCart=(itemId)=>{
            setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
            if(localStorage.getItem('auth-token')){
                fetch(`${process.env.REACT_APP_BACKEND_BASEURL}/removefromcart`,{
                    method:'POST',
                    headers:{
                        Accept:'application/form-data',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({"itemId":itemId}),
                })
                .then((response)=>response.json())
                .then((data)=>console.log(data));  
            }
        }
      
        const getTotalCartAmount = () => {

            const totalAmount = all_product.reduce((total, product) => {
                if (cartItems[product.id] > 0) {
                  return total + (product.new_price * cartItems[product.id]);
                }
                return total;
              }, 0);
              const shoppingFee = 450;
              return totalAmount + shoppingFee;
        }


        const getTotalCartItems = () => {
            let totalItems= 0;
            for(const item in cartItems)
            {
                if(cartItems[item]>0)
                {
                    totalItems += cartItems[item];
                }    
            }
            return totalItems;
        }


        const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCartWithSize,removeFromCart,cartSizes};

        return (

            <ShopContext.Provider value={contextValue} >
                {props.children}
            </ShopContext.Provider>
        )

}

export default ShopContextProvider;