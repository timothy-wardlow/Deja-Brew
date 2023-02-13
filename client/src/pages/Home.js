import React from "react";
//import ProductList from "../components/ProductList";
import Lightroast from "../assets/light-roast.png"
import Cart from "../components/Cart";

const Home = () => {
  return (<>
    <div className="row banner" style={{backgroundImage: `url(${Lightroast})`}}>

    </div>
    <div className="container">
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      <Cart />
    </div>
  </>);
};

export default Home;
