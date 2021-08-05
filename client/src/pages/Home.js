import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Image from "../images/cadmium-images/logo.png";
import { Link } from "react-router-dom";
import { Card, CardContent } from "semantic-ui-react";

const Home = () => {
  return (
    <div className="container sign-in-buttons">
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}

      <center>
        <img src={Image} alt="logo" />
      </center>
      <div className="container my-1 home-button">
        <center>
          <Link to="/signup">
            <h2 className="home-button">Signup</h2>
          </Link>
        </center>
      </div>

      <div className="container my-1 ">
        <center>
          <Link to="login">
            <h2 className="home-button">Login</h2>
          </Link>
        </center>
      </div>
    </div>
  );
};

export default Home;
