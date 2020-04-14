import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function ProductSidebar(props) {
  return (
    <>
      <div className="wrapper">
        {/* <!-- Sidebar --> */}
        <nav id="sidebar">
          <ul className="list-unstyled components">
            <li className="active">
              <Nav.Link
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                服飾
              </Nav.Link>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Nav.Link href="#">上衣</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">褲子</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">鞋子</Nav.Link>
                </li>
              </ul>
            </li>

            <li>
              <Nav.Link
                href="#ColorSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                顏色
              </Nav.Link>
              <ul className="collapse list-unstyled" id="ColorSubmenu">
                <li>
                  <Nav.Link href="#">黑色</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">白色</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">其他</Nav.Link>
                </li>
              </ul>
            </li>
            <li>
              <Nav.Link
                href="#GenderSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                性別
              </Nav.Link>
              <ul className="collapse list-unstyled" id="GenderSubmenu">
                <li>
                  <Nav.Link href="#">全部</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">男性</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#">女性</Nav.Link>
                </li>
              </ul>
            </li>
            <li>
              <Nav.Link href="#">價格</Nav.Link>
            </li>
            <li>
              <Nav.Link href="#">其他</Nav.Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default ProductSidebar;
