import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <div className="container-main">
        <h1>Register</h1>
        <form>
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              name="email"
              className="form-control"
              // onChange={handleInputChange}
              // value={loginData.email}
            />
            <label className="form-label" htmlFor="form2Example1">
              Email address
            </label>
          </div>
          {/* Password input */}
          <div className="form-outline mb-4">
            <input
              type="password"
              name="password"
              id="form2Example2"
              className="form-control"
              // onChange={handleInputChange}
              // value={loginData.password}
            />
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="repassword"
              name="repassword"
              id="form2Example2"
              className="form-control"
              // onChange={handleInputChange}
              // value={loginData.password}
            />
            <label className="form-label" htmlFor="form2Example2">
              Confirm Password
            </label>
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
            Register
          </button>
          {/* Register buttons */}
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
