import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ItemCart from "./Cart/ItemCart";
// import Swal from "sweetalert2";

function Cart() {
  const [cart, setCart] = useState([]);
  const userLoginId = JSON.parse(localStorage.getItem("isLoginId"));
  console.log("Cart", cart);
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

  return (
    <div>
      {/* cart */}
      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <ItemCart></ItemCart>
            </div>
            <div className="col-lg-4">
              <div className="total-section">
                <table className="total-table">
                  <thead className="total-table-head">
                    <tr className="table-total-row">
                      <th>Total</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="total-data">
                      <td>
                        <strong>Subtotal: </strong>
                      </td>
                      <td>${sum}</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Shipping: </strong>
                      </td>
                      <td>Free Shipping</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Total: </strong>
                      </td>
                      <td>${sum}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-buttons">
                  {/* <a href="cart.html" className="boxed-btn">Update Cart</a> */}

                  <Link
                    to={"/checkout"}
                    className="boxed-btn black"
                    style={{ marginTop: "-20px" }}
                  >
                    Check Out
                  </Link>

                  {/* <a href="checkout.html" className="boxed-btn black">Check Out</a> */}
                </div>
              </div>
              {/* <div className="coupon-section">
                <h3>Apply Coupon</h3>
                <div className="coupon-form-wrap">
                  <form action="index.html">
                    <p>
                      <input type="text" placeholder="Coupon" />
                    </p>
                    <p>
                      <input type="submit" defaultValue="Apply" />
                    </p>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* end cart */}
    </div>
  );
}

export default Cart;
