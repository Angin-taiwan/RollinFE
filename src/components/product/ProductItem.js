import React from "react";
import Product1 from "./Product1.jpg";
import Product2 from "./Product2.jpg";
import Product3 from "./Product3.jpg";
import Product4 from "./Product4.jpg";
import "../../scss/_productMouseOver.scss";
import "../../scss/_productStars.scss";

function ProductItem() {
  const display = (
    <>
      <div className="card-deck pb-5 ">
        <div className="card shadow p-2 mb-3 bg-white ">
          {/* ------ */}

          <div className="product-block product-thumb transition">
            <div className="image">
              <a href="#">
                <img src={Product1} alt="..." class="reg-image" width="100%" />
                <img
                  className="hover-image"
                  src={Product2}
                  alt="..."
                  width="100%"
                />
              </a>
            </div>
          </div>

          {/* ------ */}
          <div className="card-body">
            <h4 className="card-title text-danger">防風黑外套</h4>
            <p className="card-text">WIP W' NIMBUS PULLOVER WINTER JACKET</p>
            <p className="card-text text-danger">NTD 5000元</p>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="star-rating" title="50%">
                <div className="back-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>

                  <div className="front-stars" style={{ width: 134 }}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <a href="#">
                <i className="fa fa-heart-o fa-2x m-3 float-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card shadow p-2 mb-3 bg-white rounded">
          {/* ------ */}

          <div className="product-block product-thumb transition">
            <div className="image">
              <a href="#">
                <img src={Product2} alt="..." class="reg-image" width="100%" />
                <img
                  className="hover-image"
                  src={Product1}
                  alt="..."
                  width="100%"
                />
              </a>
            </div>
          </div>

          {/* ------ */}
          <div className="card-body">
            <h5 className="card-title  text-danger">
              CHAMPION LOGO SWEATSHIRT
            </h5>
            <p className="card-text">LOGO SWEATSHIRT</p>
            <p className="card-text text-danger">NTD 1200元</p>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="star-rating" title="50%">
                <div className="back-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>

                  <div className="front-stars" style={{ width: 134 }}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <a href="#">
                <i className="fa fa-heart-o fa-2x m-3 float-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="card shadow p-2 mb-3 bg-white rounded">
          {/* ------ */}

          <div className="product-block product-thumb transition">
            <div className="image">
              <a href="#">
                <img src={Product4} alt="..." class="reg-image" width="100%" />
                <img
                  className="hover-image"
                  src={Product3}
                  alt="..."
                  width="100%"
                />
              </a>
            </div>
          </div>

          {/* ------ */}
          <div className="card-body">
            <h5 className="card-title text-danger">ANTI HERO</h5>
            <p className="card-text">RUSSO RR 8.75" DECK (BLACK)</p>
            <p className="card-text text-danger">NTD 6666元</p>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="star-rating" title="50%">
                <div className="back-stars">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>

                  <div className="front-stars" style={{ width: 134 }}>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <a href="#">
                <i className="fa fa-heart-o fa-2x m-3 float-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="container">{display}</div>
      <div className="container">{display}</div>
      <div className="container">{display}</div>
      <div className="container">{display}</div>
      <div className="container">{display}</div>
    </>
  );
}
export default ProductItem;
