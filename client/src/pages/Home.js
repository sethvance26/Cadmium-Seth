import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Image from '../images/cadmium-images/logo.png';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "semantic-ui-react";


const Home = () => {
  
  return (
    <div className="container" >
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}


      <center><img src={Image} alt="logo"/></center>
      <div className="container my-1">
      <center><h2>Signup</h2></center>
      <center><Link to="/signup">← Go to Signup</Link></center>
      
      <center><h2>Login</h2></center>
      </div>
      <div className="container my-1">
      <center><Link to="/login">← Go to Login</Link></center>

      
      </div>

    </div>
    
  );
   
};

export default Home;
