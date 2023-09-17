import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CheckOut() {
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
      {/* check out section */}
      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Billing Address
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="billing-address-form">
                          <form action="index.html">
                            <p>
                              <input type="text" placeholder="Name" />
                            </p>
                            <p>
                              <input type="email" placeholder="Email" />
                            </p>
                            <p>
                              <input type="text" placeholder="Address" />
                            </p>
                            <p>
                              <input type="tel" placeholder="Phone" />
                            </p>
                            <p>
                              <textarea
                                name="bill"
                                id="bill"
                                cols={30}
                                rows={10}
                                placeholder="Say Something"
                                defaultValue={""}
                              />
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card single-accordion">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Shipping Address
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="shipping-address-form">
                          <p>Your shipping address form is here.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card single-accordion">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Card Details
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-details">
                          <p>Your card details goes here.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-details-wrap">
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Your order Details</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody className="order-details-body">
                    <tr>
                      <td>Product</td>
                      <td>Total</td>
                    </tr>
                    {findUserCart.map((e, i) => (
                      <tr>
                        <td>{e.productName}</td>
                        <td>${e.productPrice * e.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tbody className="checkout-details">
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Subtotal</td>
                      <td>${sum}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Shipping</td>
                      <td>$0</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}> Total</td>
                      <td>${sum}</td>
                    </tr>
                  </tbody>
                </table>
                <a href="#" className="boxed-btn">
                  Place Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end check out section */}
    </div>
  );
}

export default CheckOut;
