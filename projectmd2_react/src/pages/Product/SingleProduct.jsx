import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
function SingleProduct() {
  const [products, setProduct] = useState([]);
  const param = useParams();
  console.log(param); 
  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        console.log(response.data);
        let dataProduct = response.data;
        let findProduct = dataProduct.find(
          (e) => e.id === Number(param.id)
        );
        console.log(findProduct);
        setProduct(findProduct);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(products);
  return (
    <div>
        <div>
  {/* single product */}
  <div className="single-product mt-150 mb-150">
    <div className="container">
    {/* {products.map((e,i)=>( */}

      <div className="row">
        <div className="col-md-5">
          <div className="single-product-img">
            <img src={products.product_img} alt />
          </div>
        </div>
        <div className="col-md-7">
          <div className="single-product-content">
            <h3>{products.product_name}</h3>
            <p className="single-product-pricing"><span>Per Kg</span> {products.product_price}$</p>
            <p>{products.product_des}</p>
            <div className="single-product-form">
              <form action="index.html">
                <input type="number" placeholder={0} />
              </form>
              <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
              <p><strong>Categories: </strong>Fruits, Organic</p>
            </div>
            <h4>Share:</h4>
            <ul className="product-share">
              <li><a href><i className="fab fa-facebook-f" /></a></li>
              <li><a href><i className="fab fa-twitter" /></a></li>
              <li><a href><i className="fab fa-google-plus-g" /></a></li>
              <li><a href><i className="fab fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
      </div>
 {/* ))} */}
    </div>
  </div>
  {/* end single product */}
  {/* more products */}
  <div className="more-products mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="section-title">	
            <h3><span className="orange-text">Related</span> Products</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="single-product.html"><img src="../assets/img/products/product-img-1.jpg" alt /></a>
            </div>
            <h3>Strawberry</h3>
            <p className="product-price"><span>Per Kg</span> 85$ </p>
            <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="single-product.html"><img src="../assets/img/products/product-img-2.jpg" alt /></a>
            </div>
            <h3>Berry</h3>
            <p className="product-price"><span>Per Kg</span> 70$ </p>
            <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="single-product.html"><img src="../assets/img/products/product-img-3.jpg" alt /></a>
            </div>
            <h3>Lemon</h3>
            <p className="product-price"><span>Per Kg</span> 35$ </p>
            <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Add to Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end more products */}
</div>
    </div>
  )
}

export default SingleProduct