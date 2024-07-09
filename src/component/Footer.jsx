import React from "react";

const Footer = () => {
  return (
    <footer
      className="container-fluid  text-gold text-center py-4 m-2"
      style={{
        borderRadius: "8px",
        padding: "20px",
        color: "gold",
        // marginLeft: "10px", // Added margin to the left
        // marginRight: "10px", // Added margin to the right
      }}
    >
      <p>
        © {new Date().getFullYear()} <strong>Shika Flux </strong>
        <br />
        All rights reserved. Powered by{" "}
        <a
          href="https://www.exchangerate-api.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "gold", textDecoration: "underline " }}
        >
          Exchange Rate API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
