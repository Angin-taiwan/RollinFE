import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

export default function Header() {
  return (
  <>
    <Navbar collapseOnSelect expand="lg" variant="dark" id="Navbar" className="sticky-top">
      <Navbar.Brand href="/">Rollin Skate Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className={ useLocation().pathname === "/" ? "active": ""} href="/">首頁</Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/News" ? "active": ""} href="/News">最新消息</Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/Brands" ? "active": ""} href="/Brands">品牌</Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/Skateboards" ? "active": ""} href="/Skateboards">滑板</Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/Clothing" ? "active": ""} href="/Clothing">服飾</Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/Shoes" ? "active": ""} href="/Shoes">鞋子</Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/Accessories" ? "active": ""} href="/Accessories">配件</Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/BrandNew" ? "active": ""} href="/BrandNew">最新商品</Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/Courses" ? "active": ""} href="/Courses">課程</Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/About" ? "active": ""} href="/About">關於我們</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className={ useLocation().pathname === "/User/Coupon" ? "active": ""} href="/User/Coupon"><i className="fa fa-ticket fa-lg"></i></Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/User" ? "active": ""} href="/User"><i className="fa fa-user fa-lg"></i></Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/User/Wishlist" ? "active": ""} href="/User/Wishlist"><i className="fa fa-heart fa-lg"></i></Nav.Link>
          <Nav.Link className={ useLocation().pathname === "/Cart" ? "active": ""} href="/Cart"><i className="fa fa-shopping-cart fa-lg"></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  )
}
