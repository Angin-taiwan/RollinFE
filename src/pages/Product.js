import React from "react";
import R1 from "../components/product/R1.jpg";
import ProductSearch from "../components/product/ProductSearch";
import ProductSideBar from "../components/product/ProductSidebar";
import ProductItem from "../components/product/ProductItem";

function Product() {
  return (
    <>
      <div>
        <img src={R1} width="100%" alt="logo" />
      </div>
      <div className="p-4">
        <ProductSearch />
        <hr className="style-hr" />
        <div className="row mt-5">
          <div className="col-2">
            <ProductSideBar />
          </div>
          <div className="col-10">
            <ProductItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
