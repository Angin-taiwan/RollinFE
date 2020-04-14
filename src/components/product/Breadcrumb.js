import React from "react";
import { withRouter, Link } from "react-router-dom";

function Breadcrumb(props) {
  console.log(props);

  let path = "";
  const pathname = props.location.pathname;

  switch (pathname) {
    case "/News":
      path = "最新消息";
      break;
    case "/Brand":
      path = "品牌";
      break;

    case "/Skateboards":
      path = "滑板";
      break;

    case "/Clothing":
      path = "服飾";
      break;

    case "/Shoes":
      path = "鞋子";
      break;

    case "/Accessories":
      path = "配件";
      break;

    case "/BrandNew":
      path = "最新商品";
      break;

    case "/Course":
      path = "課程";
      break;

    case "/About":
      path = "關於我們";
      break;

    default:
      path = "";
  }
  return (
    <>
      <div className="col-6">
        <h5>
          <i className="fa fa-home fa-2x pr-3"></i>
          <Link to="/">首頁</Link>
          <i className="fa fa-chevron-right mr-3 ml-3"></i>
          {path}
        </h5>
      </div>
    </>
  );
}

// 高階元件的樣式
export default withRouter(Breadcrumb);
