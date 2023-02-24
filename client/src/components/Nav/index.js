import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from '../../assets/t_mug_logo.png';
import CategoryMenu from "../CategoryMenu";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              <button>History</button>
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              <button>Logout</button>
            </a>
          </li>
          <li className="mx-1">
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Products">
              <button>Products</button>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Products">
            <CategoryMenu />
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>


          <li className="mx-1">
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Products">
              <button>Products</button>
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/Products">
            <CategoryMenu className="mx-1"/>
            </Link>
          </li>

        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
        <img className="Logo" src={Logo} alt="Deja Brew" />
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
