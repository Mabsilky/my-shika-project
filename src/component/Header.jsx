import React from "react";
import "../App.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  px-5">
      <div
        className="container-fluid
      d-flex justify-content-between align-items-center"
      >
        <div>
          <img
            src="../assets/img/actual-logo.png"
            alt="logo"
            className="img-fluid rounded-circle mx-3"
            width="80px"
            height="80px"
          />
          <a className="navbar-brand" href="#">
            <strong>Shika Flux</strong>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">
                <strong>Home</strong>
              </a> */}
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <strong>Link</strong>
              </a>
            </li> */}
          </ul>
          <form className="d-flex " role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
