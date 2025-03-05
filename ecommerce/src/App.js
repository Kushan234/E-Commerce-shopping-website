
import './App.css';
import { NavBar } from './Components/Navbar/NavBar';
import { BrowserRouter , Routes, Route,  } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assest/banner_mens.png'
import women_banner from './Components/Assest/banner_women.png'
import kid_banner from './Components/Assest/banner_kids.png'
import Product from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';
import AboutUs from './Components/AboutUs/AboutUs';
import Checkout from '../src/Components/Checkout/Checkout';


function App() {
  return (
   
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path= '/product' element={<Product />}>
        <Route path= ':productId' element={<Product />}/>
        </Route>
        <Route path= '/login' element={<LoginSignup />}/>
        <Route path= '/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout /> } />

      </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  
  );
}

export default App;
