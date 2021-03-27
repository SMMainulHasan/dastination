import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const Header = () => {
  const [userInfo, setUserInfo] = useContext(userContext);
  return (
    <nav className="navigation">
      <h1 className="logo">Destination</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
        <li>{userInfo.name}</li>
      </ul>
    </nav>
  );
};

export default Header;
