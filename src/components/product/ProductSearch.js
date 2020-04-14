import React from "react";
import Breadcrumb from "./Breadcrumb";
import "./stars.scss";
function ProductSearch() {
  return (
    <>
      <div className="row">
        <Breadcrumb />
        <div className="col-6">
          <div className="float-right">
            <input type="text" />
            <button type="submit">搜尋</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
