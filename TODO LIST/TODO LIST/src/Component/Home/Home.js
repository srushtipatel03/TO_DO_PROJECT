import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-image">
        <div className="container">
          <div className="box">
            <h1>Welcome to the Home Page</h1>
            <p>Enjoy browsing our content!</p>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link to="/register" className="btn">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
