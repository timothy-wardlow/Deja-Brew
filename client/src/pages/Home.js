import React from "react";
//import ProductList from "../components/ProductList";
import Lightroast from "../assets/light-roast.png"
import Cart from "../components/Cart";
import 'animate.css';
import Logo from "../assets/logo.png"

const Home = () => {
  return (<>
    <div className="row banner" style={{backgroundImage: `url(${Logo})`}}>
    <div className='opener'>
          <img src={Lightroast} alt="Light Roast" className=""  />
          </div>
    </div>
    <div className="container">
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      <Cart />
    </div>
  </>);
};

export default Home;
