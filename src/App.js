import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import Products from "./components/Products";
import Orders from "./components/Orders";
import RegistOrder from "./components/RegistOrder";
import RegistProduct from "./components/RegistProduct";
import ProductOrder from "./components/ProductOrder";
import ProductsUser from "./components/ProductsUser";

import EventBus from "./common/EventBus";

const App = () => {
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowUserBoard(user.roles.includes("ROLE_USER"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowUserBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <Link to={"/"} className="navbar-brand">
          Mavericks
        </Link>
        <div className="navbar-nav mr-auto">
          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Button variant="Light" onClick={() => setModalShow(true)}>
                {currentUser.username}
              </Button>

              <Profile
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/form-order" element={<RegistOrder />} />
          <Route path="/form-product" element={<RegistProduct />} />
          <Route path="/product-order/:id" element={<ProductOrder />} />
          <Route path="/products-user" element={<ProductsUser user={AuthService.getCurrentUser()} />} />
        </Routes>
      </div>

    </div>
  );
};

export default App;
