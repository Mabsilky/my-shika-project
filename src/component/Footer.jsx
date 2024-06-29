import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Shika Flux <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
