import React from "react";

const Header = () => {
  return (
    <header
      className="navbar navbar-expand-lg navbar-custom navbar-grey bg-grey"
      style={{
        background: "grey", // Grey to luxurious gold gradient
        margin: "0 25px",
        borderRadius: "20px",
        color: "gold", // Set the text color to gold
        padding: "10px", // Add some padding for readability
      }}
    >
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          <img
            src="/src/assets/actual-logo.png" // Replace with your actual logo path
            alt="Logo"
            width="50"
            height="40"
            className="d-inline-block align-top ml-5"
          />
          <strong style={{ marginLeft: "20px" }}>Shika Flux</strong>
        </a>
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
