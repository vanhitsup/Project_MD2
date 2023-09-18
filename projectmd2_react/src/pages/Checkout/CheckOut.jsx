import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function CheckOut() {
  const [cart, setCart] = useState([]);
  const userLoginId = JSON.parse(localStorage.getItem("isLoginId"));
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
  //
  const user = localStorage.getItem("loginUser");

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });
  //removerCart
  const removeCart = (userId) => {
    // axios
    //   .delete(`http://localhost:8000/carts/${userId}`)
    //   .then((response) => {
    //     // window.location.assign("http://localhost:3000/cart");
    //     // window.location.reload(false);
    //     navigate("/order-history");
    //   })
    //   .catch((error) => console.log(error));
  };

  //handleInput
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCustomer((customer) => ({
      ...customer,
      [name]: value,
    }));
  };
  //handleCheckout
  const handleCheckout = (e) => {
    e.preventDefault();

    const newOrder = {
      order_id: Math.floor(Math.random() * 100000),
      order_date: new Date(),
      order_status: "waiting for shipping",
      order_user: userLoginId,
      order_total: sum,
      order_customer: {
        name: customer.name,
        email: customer.email,
        address: customer.address,
        phoneNumber: customer.phoneNumber,
      },
      order_item: [...findUserCart],
    };
    axios
      .post("http://localhost:8000/orders", newOrder)
      .then((res) => {
        Swal.fire({
          title: "Thank you for your order!",
          icon: "success",
        }).then(() => {
          removeCart();
          //Chưa remove được findUserCart, findUserCart là dữ liệu cart
        });
        setCustomer({
          name: "",
          email: "",
          address: "",
          phoneNumber: "",
        });
      })
      .catch((e) => console.log(e));
  };
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
                          <form>
                            <p>
                              <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={customer.name}
                                onChange={handleInput}
                                required
                              />
                            </p>
                            <p>
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={customer.email}
                                onChange={handleInput}
                                required
                              />
                            </p>
                            <p>
                              <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={customer.address}
                                onChange={handleInput}
                                required
                              />
                            </p>
                            <p>
                              <input
                                type="tel"
                                placeholder="Phone"
                                name="phoneNumber"
                                value={customer.phoneNumber}
                                onChange={handleInput}
                                required
                              />
                            </p>

                            <button
                              className="boxed-btn"
                              style={{ marginTop: "20px", border: "none" }}
                              onClick={handleCheckout}
                            >
                              Place Order
                            </button>
                          </form>
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
