import React from "react";

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top ml-5"
          />
          <strong>Shika Flux</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
       <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
