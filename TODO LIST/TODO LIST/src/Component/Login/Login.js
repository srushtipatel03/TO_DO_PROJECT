import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../Navbar/Navbar";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is a required field"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too long")
    .required("Password is a required field"),
});

const Login = () => {
  const navigate = useNavigate();

  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://to-do-backend-918j.onrender.com/api/user/login-user",
          {
            email: values.email,
            password: values.password,
          }
        );

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          alert("Login Successfully");
          navigate("/task"); // Redirect to the tasks page
        } else {
          alert("Login failed");
        }
      } catch (error) {
        alert("User is not registered");
        navigate("/register"); // Redirect to the registration page
      }
    },
  });

  return (
    <div>
      <Navbar />
      <div className="bg-image">
        <div className="container">
          <div className="box">
            <div className="signin-form">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    {touched.email && errors.email ? (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      value={values.password}
                    />
                    {touched.password && errors.password ? (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    ) : null}
                  </div>
                  <div>
                    <button type="submit">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
