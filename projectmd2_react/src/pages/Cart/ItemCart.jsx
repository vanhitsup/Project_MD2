import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function ItemCart() {
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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/carts/${id}`)
      .then((response) => {
        // window.location.assign("http://localhost:3000/cart");
        window.location.reload(false);
      })
      .catch((error) => console.log(error));
  };
  const userLoginId = JSON.parse(localStorage.getItem("isLoginId"));
  console.log("USERID", userLoginId);
  let findUserCart = cart.filter((e) => e.userId == userLoginId);
  console.log("findUserCart", findUserCart);

  return (
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
          {/* <tr className="table-body-row">
          <td colSpan={6}>
            <h4>Cart is empty</h4>
          </td>
        </tr> */}
          {findUserCart.map((e, i) => (
            <tr className="table-body-row" key={i}>
              <td className="product-remove">
                <button
                  onClick={() => handleDelete(e.id)}
                  className="btn-remove"
                >
                  x
                </button>
              </td>
              <td className="product-image">
                <img src={e.productImg} alt="" />
              </td>
              <td className="product-name">{e.productName}</td>
              <td className="product-price">${e.productPrice * e.amount}</td>
              <td className="product-quantity">
                <input type="number" placeholder={0} />
              </td>
              <td className="product-total">{e.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemCart;
