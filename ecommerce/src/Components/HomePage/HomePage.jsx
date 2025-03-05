import React from 'react'
import Slider from '../HomePage/Slider';


export const HomePage = () => {

    const images= ['https://img.freepik.com/premium-psd/trend-fashion-banner-template-premium-psd_641545-41.jpg?w=740',
    'https://img.freepik.com/premium-vector/flat-sale-banners-set-with-photo_23-2149011714.jpg',
    'https://img.freepik.com/premium-vector/relaxed-pretty-girl-lying-shopping-cart-pretty-girl-cartoon-character_675284-19.jpg?w=740',
    'https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg?t=st=1712905460~exp=1712906060~hmac=d1b5a295b97c8d3561e55f11ede073f44cd501b7ffd4ffd15a7222150d4a0c8a',
  'https://img.freepik.com/free-vector/gradient-colorful-sale-background_23-2148864068.jpg?w=740&t=st=1712905399~exp=1712905999~hmac=77b134175f70cf6c89f750b900b9b1df592624ee3f474fb226e8c6d954e8aa1b'];

  return (
    <div>
      
     <Slider images={images}/>
    </div>
); 
};
export default HomePage;