import React from "react";
import ProductList from "../components/ProductList";
// import Lightroast from "../assets/light-roast.png"
import Cart from "../components/Cart";
import 'animate.css';
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Home = () => {
  return (<>
     <Gallery />
    {/*
      <div className='opener1 col-6'>
          <img src={Lightroast} alt="Light Roast" className=""  />
          </div>
  </div>*/}
    <div className="container">
      {/* <CategoryMenu /> */}
      <ProductList />
      <Cart />
    </div>
    <Footer />

  </>);
};

export default Home;
