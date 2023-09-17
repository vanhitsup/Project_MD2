import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import ItemProductDetail from "./ItemProductDetail";

function SingleProduct() {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const param = useParams();
  console.log("Parram", param);
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        console.log(response.data);
        let dataProduct = response.data;
        let findProduct = dataProduct.find((e) => e.id === Number(param.id));
        console.log(findProduct);
        setProduct(findProduct);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log("Vanh", products);
  //
  // const handleBuy = (e, i) => {
  //   let findItem = param;
  //   // console.log("HIHi", findItem);
  //   const loginId = JSON.parse(localStorage.getItem("isLoginId"));
  //   if (loginId == null) {
  //     window.location.assign("http://localhost:3000/login");
  //   } else {
  //     Swal.fire({
  //       title: "Success!",
  //       text: "Cart added successfully",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //     });

  //     if (!findItem) {
  //       axios
  //         .post("http://localhost:8000/carts", {
  //           userId: JSON.parse(localStorage.getItem("isLoginId")),
  //           productId: i,
  //           productName: e.product_name,
  //           productPrice: e.product_price,
  //           productImg: e.product_img,
  //           amount: 1,
  //         })

  //         .then((res) => {
  //           console.log(res);
  //           // Update the cart state after successful addition
  //           setCart([...cart, res.data]); // Assuming the response data contains the added item
  //         })
  //         .catch((err) => console.log(err));
  //     } else {
  //       const updatedAmount = findItem.amount + 1;
  //       axios
  //         .patch(`http://localhost:8000/carts/${findItem.id}`, {
  //           amount: updatedAmount,
  //         })
  //         .then((res) => {
  //           console.log(res);
  //           // Update the cart state after successful update
  //           const updatedCart = cart.map((item) =>
  //             item.productId === i ? { ...item, amount: updatedAmount } : item
  //           );
  //           setCart(updatedCart);
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   }
  // };
  //

  return (
    <div>
      <div>
        {/* single product */}
        <div className="single-product mt-150 mb-150">
          <ItemProductDetail
            key={products.id}
            item={products}
            cart={cart}
            setCart={setCart}
          ></ItemProductDetail>
        </div>
        {/* end single product */}
        {/* more products */}
        {/* <div className="more-products mb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="section-title">
                  <h3>
                    <span className="orange-text">Related</span> Products
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, fuga quas itaque eveniet beatae optio.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html">
                      <img src="../assets/img/products/product-img-1.jpg" alt />
                    </a>
                  </div>
                  <h3>Strawberry</h3>
                  <p className="product-price">
                    <span>Per Kg</span> 85${" "}
                  </p>
                  <a href="cart.html" className="cart-btn">
                    <i className="fas fa-shopping-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html">
                      <img src="../assets/img/products/product-img-2.jpg" alt />
                    </a>
                  </div>
                  <h3>Berry</h3>
                  <p className="product-price">
                    <span>Per Kg</span> 70${" "}
                  </p>
                  <a href="cart.html" className="cart-btn">
                    <i className="fas fa-shopping-cart" /> Add to Cart
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
                <div className="single-product-item">
                  <div className="product-image">
                    <a href="single-product.html">
                      <img src="../assets/img/products/product-img-3.jpg" alt />
                    </a>
                  </div>
                  <h3>Lemon</h3>
                  <p className="product-price">
                    <span>Per Kg</span> 35${" "}
                  </p>
                  <a href="cart.html" className="cart-btn">
                    <i className="fas fa-shopping-cart" /> Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* end more products */}
      </div>
    </div>
  );
}

export default SingleProduct;
