import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Cart() {
  const [cart, setCart] = useState([]);

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
              <div className="cart-table-wrap">
                <table className="cart-table">
                  <thead className="cart-table-head">
                    <tr className="table-head-row">
                      <th className="product-remove" />
                      <th className="product-image">Product Image</th>
                      <th className="product-name">Name</th>
                      <th className="product-price">Price</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((e, i) => (
                      <tr className="table-body-row" key={i}>
                        <td className="product-remove">
                          <a href="#">
                            <i className="far fa-window-close" />
                          </a>
                        </td>
                        <td className="product-image">
                          <img src={e.productImg} alt />
                        </td>
                        <td className="product-name">{e.productName}</td>
                        <td className="product-price">
                          ${e.productPrice * e.amount}
                        </td>
                        <td className="product-quantity">
                          <input type="number" placeholder={0} />
                        </td>
                        <td className="product-total">{e.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
                      <td>$500</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Shipping: </strong>
                      </td>
                      <td>$30</td>
                    </tr>
                    <tr className="total-data">
                      <td>
                        <strong>Total: </strong>
                      </td>
                      <td>$545</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-buttons">
                  {/* <a href="cart.html" className="boxed-btn">Update Cart</a> */}
                  <Link to={"/cart"} className="boxed-btn">
                    Update Cart
                  </Link>
                  <Link to={"/checkout"} className="boxed-btn black">
                    Check Out
                  </Link>

                  {/* <a href="checkout.html" className="boxed-btn black">Check Out</a> */}
                </div>
              </div>
              <div className="coupon-section">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end cart */}
    </div>
  );
}

export default Cart;
