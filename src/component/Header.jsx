import React from "react";

const Header = () => {
  return (
    <header
      className="navbar navbar-expand-lg navbar-custom navbar-grey bg-grey"
      style={{
        background: "grey",
        border: "solid 1px white",
        color: "gold", // Set the text color to gold
        padding: "10px", // Add some padding for readability
      }}
    >
      <div
        className=""
        style={{
          width: "100%",
          border: "solid 1px white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a className="navbar-brand" href="#">
          <img
            src="./src/assets/img/actual-logo.png" // Replace with your actual logo path
            alt="Logo"
            width="45"
            height="40"
            borderRadius="15px"
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
