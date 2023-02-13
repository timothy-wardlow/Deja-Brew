import React from "react";
import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Gallery from "../components/Gallery";



const Products = () => {
  return (<>
    <Gallery />
    <div className="container">

      {/* <CategoryMenu /> */}
      <ProductList />
      <Cart />
    </div>
  </>);
};

export default Products;