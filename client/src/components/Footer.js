import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
    <div className="site-footer" >

        <a className="repo-link" href="https://github.com/jakegreenhalgh/group_project_education_app">
            <p> GitHub Repo </p>
        </a>
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