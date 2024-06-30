import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-gold text-center py-3"
      style={{
        borderRadius: "10px",
        padding: "10px",
        color: "gold",
        // marginLeft: "10px", // Added margin to the left
        // marginRight: "10px", // Added margin to the right
      }}
    >
      <div className="container">
        <p>
          © {new Date().getFullYear()} Shika Flux <br />
          All rights reserved. Powered by{" "}
          <a
            href="https://www.bing.com/search?q=currency+exchange+rates"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "gold", textDecoration: "underline" }}
          >
            Currency Exchange Rates
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
