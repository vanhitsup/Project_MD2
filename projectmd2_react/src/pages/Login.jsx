import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// CommonJS
function Login() {
  const [userData, setUserData] = useState([]);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(userData);
  console.log(loginData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = userData.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );
    console.log(user);
    if (user) {
      // Login success
      axios
        .patch(`http://localhost:8000/users/${user.id}`, {
          isLogin: true,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
      localStorage.setItem("isLoginId", user.id);
      localStorage.setItem("loginUser", JSON.stringify(user));
      Swal.fire({
        title: "Success!",
        text: "Logged in successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setTimeout(() => {
        // navigate("/");
        window.location.assign("http://localhost:3000/");
      }, 500);
      //
    } else {
      // Invalid credentials

      Swal.fire({
        title: "Error!",
        text: "Login failed!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <div className="container-main">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Email input */}
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
              value={loginData.email}
            />
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              type="password"
              name="password"
              id="form2Example2"
              className="form-control"
              onChange={handleInputChange}
              value={loginData.password}
            />
          </div>
          {/* 2 column grid layout for inline styling */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* Checkbox */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="form2Example31"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>
            <div className="col">
              {/* Simple link */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>
          {/* Submit button */}
          <button type="submit" className="btn btn-primary btn-block mb-4">
            Sign in
          </button>
          {/* Register buttons */}
          <div className="text-center">
            <p>
              Not a member? <Link to={"/register"}>Register</Link>
              Not a member? <Link to="/register">Register</Link>
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

export default Login;
