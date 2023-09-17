import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ItemCart from "./ItemCart";
// import Swal from "sweetalert2";
function OrderHistory() {
  const [orders, setOrder] = useState([]);
  const [cart, setCart] = useState([]);

  const userLoginId = JSON.parse(localStorage.getItem("isLoginId"));
  console.log("orders", orders);
  let findUserCart = cart.filter((e) => e.userId == userLoginId);
  // console.log("findUserCart", findUserCart);
  //Subtotal
  let sum = 0;
  for (let i = 0; i < findUserCart.length; i++) {
    sum += findUserCart[i].amount * findUserCart[i].productPrice;
  }

  // Lấy dữ liệu cart
  useEffect(() => {
    axios
      .get("http://localhost:8000/carts")
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/orders")
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="cart-section mt-150 mb-150">
      <h3 style={{ marginTop: "20px", textAlign: "center" }}>Order History</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="cart-table-wrap">
              <table className="cart-table">
                <thead className="cart-table-head">
                  <tr className="table-head-row">
                    <th className="product-image">Product Image</th>
                    <th className="product-name">Name</th>
                    <th className="product-price">Price</th>
                    <th className="product-total">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-body-row">
                    <td className="product-image">
                      <img src="assets/img/products/product-img-1.jpg" alt />
                    </td>
                    <td className="product-name">Name</td>
                    <td className="product-price">$85</td>

                    <td className="product-total">1</td>
                  </tr>
                  <tr className="table-body-row">
                    <td>Customer:</td>
                    <td>Phone:</td>
                    <td colSpan={2}>Address:</td>
                  </tr>
                  ;
                  <tr>
                    <td
                      colSpan={4}
                      style={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      Total payment: $ {sum}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
