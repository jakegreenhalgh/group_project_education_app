import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} || Made with Love by C.A.J.J || Terms Of Service | 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;