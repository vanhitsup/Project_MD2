import React from 'react';
import "./Header.css";
function Header() {
  return (
    <div>
  {/* header */}
  {/* <div className="loader">
  <div className="loader-inner">
    <div className="circle" />
  </div>
</div> */}
  <div className="top-header-area" id="sticker">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-sm-12 text-center">
          <div className="main-menu-wrap">
            {/* logo */}
            <div className="site-logo">
              <a href="index.html">
                <img src="./assets/img/logo.png" alt />
              </a>
            </div>
            {/* logo */}
            {/* menu start */}
            <nav className="main-menu">
              <ul>
                <li className="current-list-item"><a href="#">Home</a>
                  <ul className="sub-menu">
                    <li><a href="index.html">Static Home</a></li>
                    <li><a href="index_2.html">Slider Home</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="404.html">404 page</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Check Out</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="shop.html">Shop</a></li>
                  </ul>
                </li>
                <li><a href="news.html">News</a>
                  <ul className="sub-menu">
                    <li><a href="news.html">News</a></li>
                    <li><a href="single-news.html">Single News</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="shop.html">Shop</a>
                  <ul className="sub-menu">
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="checkout.html">Check Out</a></li>
                    <li><a href="single-product.html">Single Product</a></li>
                    <li><a href="cart.html">Cart</a></li>
                  </ul>
                </li>
                <li>
                  <div className="header-icons">
                    <a className="shopping-cart" href="cart.html"><i className="fas fa-shopping-cart" /></a>
                    <a className="shopping-cart" href=""><i className="fas fa-user"></i></a>
                    <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search" /></a>
                  </div>
                </li>
              </ul>
            </nav>
            <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search" /></a>
            <div className="mobile-menu" />
            {/* menu end */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end header */}
  {/* search area */}
  <div className="search-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <span className="close-btn"><i className="fas fa-window-close" /></span>
          <div className="search-bar">
            <div className="search-bar-tablecell">
              <h3>Search For:</h3>
              <input type="text" placeholder="Keywords" />
              <button type="submit">Search <i className="fas fa-search" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end search area */}
  <div className="hero-area hero-bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 offset-lg-2 text-center">
        <div className="hero-text">
          <div className="hero-text-tablecell">
            <p className="subtitle">Fresh &amp; Organic</p>
            <h1>Delicious Seasonal Fruits</h1>
            <div className="hero-btns">
              {/* <a href="shop.html" className="boxed-btn">Fruit Collection</a>
              <a href="contact.html" className="bordered-btn">Contact Us</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    )
}

export default Header