// import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ItemProduct(props) {
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
    <div className="col-lg-4 col-md-6 text-center strawberry">
      <div className="single-product-item" key={key}>
        <div className="product-image">
          <Link to={`/product/${item.id}`}>
            <img src={item.product_img} alt />
          </Link>
        </div>
        <h3>{item.product_name}</h3>
        <p className="product-price">
          <span>Per Kg</span> {item.product_price} $
        </p>
        <button className="cart-btn" onClick={() => handleBuy(item, item.id)}>
          <i className="fas fa-shopping-cart" /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemProduct;
