import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
    <div className="site-footer" >
        <p> GitHub Repo </p>
        <p> Made with Love by C.A.J.J </p>
        
        <p> Created &copy;{new Date().getFullYear()} </p>
    </div>
    </>
  );
}

export default Footer;

// * ALT

{/* <>
<hr/>
<div className="site-footer" >
  <p>Terms Of Service</p>
  <p> Reserved &copy;{new Date().getFullYear()} </p>
    <p>Made with Love by C.A.J.J </p>
    <p>GitHub Repo</p>
  <p>Contact</p>


</div>
</> */}