import React from "react";
<<<<<<< HEAD

function ProductSideBar() {
  return (
    <>
      <h1>ProductSideBar</h1>
=======
import { Navbar, Nav } from 'react-bootstrap';


function Sidebar(props) {
  return (
    <>
      <div className="wrapper">
    {/* <!-- Sidebar --> */}
    <nav id="sidebar">
        <ul className="list-unstyled components">
            <li className="active">
                <Nav.Link href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">服飾</Nav.Link>
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
                <Nav.Link href="#ColorSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">顏色</Nav.Link>
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
                <Nav.Link href="#GenderSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">性別</Nav.Link>
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
>>>>>>> 2dd98d26b7adbbe453bf9fc38dd7c2df36d5d33d
    </>
  );
}

<<<<<<< HEAD
export default ProductSideBar;
=======
export default Sidebar;
>>>>>>> 2dd98d26b7adbbe453bf9fc38dd7c2df36d5d33d
