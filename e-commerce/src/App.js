import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/shop';
import ShopCategory from './Pages/shopcategory';
import Product from './Pages/product';
import Cart from './Pages/cart';
import LoginSignUp from './Pages/loginsignup';
import Hero from './Components/Hero/hero';
import Footer from './Components/Footer/footer';
import men_banner from "./Components/Assets/mens-banner1.avif"
import women_banner from "./Components/Assets/womensimg.jpg"
import Kid_banner from "./Components/Assets/kids1img.jfif"
import MensProduct from './Components/Mens/mens-product';
import WomensProduct from './Components/Womens/womensproduct';
import KidsProduct from './Components/KidsProduct/kidsproduct';
import BreadCrum from './Components/BreadCrums/breadcrums';
import ProductDisplay from './Components/ProductDisplay/productdisplay';
import Product1 from './Pages/product1';
import Product2 from './Pages/product2';
import Offer1 from './Components/Offers/offer1';
import DataProduct from './Pages/dataproduct';
import CollectionProduct from './Pages/collectionproduct';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' element={<Hero />}></Route>
        <Route path='/shop' element={<Shop/>} ></Route>
        <Route path='/mens' element={<MensProduct banner={men_banner}category="men"/>}></Route>
        <Route path='/womens' element={<WomensProduct banner={women_banner}category="women"/>}></Route>
        <Route path='/kids' element={<KidsProduct banner={Kid_banner}category="kid"/>}></Route>
        <Route path='/product' element={<Product/>}></Route>

        <Route path='/product/:productId' element={<Product />}></Route>
        <Route path='/womens-product/:womensproductId' element={<Product1/>}></Route>
        <Route path='/kids-product/:kidsproductId' element={<Product2/>}></Route>
        <Route path='/data-product/:dataproductId' element={<DataProduct/>}></Route>
        <Route path='/collection-item/:collectionId' element={<CollectionProduct/>}></Route>

        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignUp/>}></Route>
        <Route path='/hero' element={<Hero/>}></Route>
        {/* <Route path='/breadcrum' element={<BreadCrum/>}></Route> */}
        <Route path='/productdisplay' element={<ProductDisplay/>}></Route>
        <Route path='/offers' element={<Offer1/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
