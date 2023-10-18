import React from "react";
import { store } from "../Redux/store";
import { setDisplay } from "../Redux/actions";

export default function Navbar() {
  const { page, cart } = store.getState();
  const setdisplay = (value) => {
    store.dispatch(setDisplay(value));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">Ecommerce</div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div
                  className={`nav-link ${page === "All" ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setdisplay("All");
                  }}
                >
                  All Products
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={`nav-link ${page === "Create" ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setdisplay("Create");
                  }}
                >
                  <i
                    className="fa-solid fa-circle-plus"
                    style={{ color: "#DC4C64", marginRight: "5px" }}
                  ></i>
                  Add Product
                </div>
              </li>
              <li className="nav-item ">
                <div
                  className={`nav-link ${page === "Cart" ? "active" : ""}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setdisplay("Cart");
                  }}
                >
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ color: "#fcfcfd", marginRight: "5px" }}
                  ></i>
                  Cart
                  <div className="cart-count">{cart.length}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
