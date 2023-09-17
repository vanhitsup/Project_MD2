import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const [userData, setUserData] = useState([]);
  const loginId = JSON.parse(localStorage.getItem("isLoginId"));
  const navigate = useNavigate;

  let nameUser = "";
  const handleLogout = () => {
    localStorage.clear();

    navigate("/login");
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  for (let i = 0; i < userData.length; i++) {
    if (loginId == userData[i].id) {
      nameUser = userData[i].email;
      console.log(nameUser);
    }
  }

  return (
    <div>
      <div className="top-header-area" id="sticker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* logo */}
                <div className="site-logo">
                  <Link to={"/"}>
                    <img src="assets/img/logo.png" alt />
                  </Link>
                </div>
                {/* logo */}
                {/* menu start */}
                <nav className="main-menu">
                  <ul>
                    <li className="current-list-item">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About</Link>
                    </li>

                    <li>
                      <Link to={"/news"}>News</Link>
                    </li>

                    <li>
                      <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                      <Link to={"/cart"}>Cart</Link>
                    </li>
                    <li>
                      {/* <div className="header-icons">
                        <Link to={"/cart"} className="shopping-cart">
                          <i className="fas fa-shopping-cart" />
                        </Link>
                        <Link to={"/login"} className="shopping-cart">
                          <i className="fas fa-user"></i>
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <a href="news.html">Log out</a>
                          </li>
                          <li>
                            <a href="single-news.html">Single News</a>
                          </li>
                        </ul>
                        <a className="mobile-hide search-bar-icon" href="#">
                          <i className="fas fa-search" />
                        </a>
                      </div> */}

                      {loginId == null ? (
                        <div className="header-icons">
                          {/* <Link to={"/cart"} className="shopping-cart">
                            <i className="fas fa-shopping-cart" />
                          </Link> */}
                          <Link to={"/login"} className="shopping-cart">
                            <i className="fas fa-user"></i>
                          </Link>
                        </div>
                      ) : (
                        <div className="header-icons">
                          <a className="shopping-cart">
                            <i className="fas fa-user"></i> {nameUser}
                            <ul className="sub-menu">
                              <li>
                                <Link to={"/login"} onClick={handleLogout}>
                                  Log out
                                </Link>
                              </li>
                              <li>
                                <Link to={"/order-history"}>Order history</Link>
                              </li>
                            </ul>
                          </a>
                        </div>
                      )}
                    </li>
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="#">
                  <i className="fas fa-search" />
                </a>
                <div className="mobile-menu" />
                {/* menu end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end header */}

      {/* breadcrumb-section */}
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Fresh and Organic</p>
                <h1>Shop</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end breadcrumb section */}
    </div>
  );
}

export default Header;
