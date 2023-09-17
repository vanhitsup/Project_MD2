import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";
function ItemProductDetail(props) {
  const { key, item, cart, setCart } = props;
  const handleBuy = (e, i) => {
    let findItem = cart.find((item) => item.productId === i);
    const loginId = JSON.parse(localStorage.getItem("isLoginId"));
    if (loginId == null) {
      window.location.assign("http://localhost:3000/login");
    } else {
      Swal.fire({
        title: "Success!",
        text: "Cart added successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      if (!findItem) {
        axios
          .post("http://localhost:8000/carts", {
            userId: JSON.parse(localStorage.getItem("isLoginId")),
            productId: i,
            productName: e.product_name,
            productPrice: e.product_price,
            productImg: e.product_img,
            amount: 1,
          })

          .then((res) => {
            console.log(res);
            // Update the cart state after successful addition
            setCart([...cart, res.data]); // Assuming the response data contains the added item
          })
          .catch((err) => console.log(err));
      } else {
        const updatedAmount = findItem.amount + 1;
        axios
          .patch(`http://localhost:8000/carts/${findItem.id}`, {
            amount: updatedAmount,
          })
          .then((res) => {
            console.log(res);
            // Update the cart state after successful update
            const updatedCart = cart.map((item) =>
              item.productId === i ? { ...item, amount: updatedAmount } : item
            );
            setCart(updatedCart);
          })
          .catch((err) => console.log(err));
      }
    }
  };
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row" key={item.id}>
        <div className="col-md-5">
          <div className="single-product-img">
            <img src={item.product_img} alt />
          </div>
        </div>
        <div className="col-md-7">
          <div className="single-product-content">
            <h3>{item.product_name}</h3>
            <p className="single-product-pricing">
              <span>Per Kg</span> {item.product_price}$
            </p>
            <p>{item.product_des}</p>
            <div className="single-product-form">
              <form action="index.html">
                <input type="number" placeholder={0} />
              </form>
              <button
                className="cart-btn"
                onClick={() => handleBuy(item, item.id)}
              >
                <i className="fas fa-shopping-cart" /> Add to Cart
              </button>{" "}
              <p>
                <strong>Categories: </strong>Fruits, Organic
              </p>
            </div>
            <h4>Share:</h4>
            <ul className="product-share">
              <li>
                <a href>
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fab fa-google-plus-g" />
                </a>
              </li>
              <li>
                <a href>
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default ItemProductDetail;
