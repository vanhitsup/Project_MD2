import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    crfPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/users", {
        email: user.email,
        password: user.password,
        isLogin: false,
      })
      .then((response) => {
        console.log("Đăng ký thành công:", response.data);
        Swal.fire({
          title: "Success!",
          text: "Successful registration!",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/login");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Login failed!",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.error("Đăng ký lỗi:", error);
      });
  };

  return (
    <div>
      <div className="container-main">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
            <input
              type="email"
              id="form2Example1"
              name="email"
              className="form-control"
              onChange={handleInputChange}
              value={user.email}
            />
            {errors.username && <span className="p-error">{errors.email}</span>}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="form2Example2"
              className="form-control"
              onChange={handleInputChange}
              value={user.password}
            />

            {errors.username && (
              <span className="p-error">{errors.password}</span>
            )}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Confirm Password
            </label>
            <input
              type="crfPassword"
              name="crfPassword"
              id="form2Example2"
              className="form-control"
              onChange={handleInputChange}
              value={user.crfPassword}
            />

            {errors.username && (
              <span className="p-error">{errors.crfPassword}</span>
            )}
          </div>
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="form2Example31"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Register
          </button>
          <div className="text-center">
            <p>
              Not a member? <Link to="/login">Login</Link>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google" />
            </button>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter" />
            </button>
            <button type="submit" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
