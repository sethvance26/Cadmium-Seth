import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1 nav-items-style">
            <Link to="/event-form">Add an Event!</Link>
          </li>

          <li className="nav-items-style">
            <Link to="/events">Events</Link>
          </li>
          <li className="mx-1 nav-items-style">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <Link to="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row list-decoration">
          <li className="mx-1 fix-margin">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="mx-1 nav-items-style">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1 className="nav-items-style">
        <Link to="/">
          <span role="img" aria-label="cadmium logo"></span>
          <Link to="./public/images/cadmium-images/logo.png"></Link>
          Home
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
