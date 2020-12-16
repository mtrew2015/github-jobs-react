import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <h1>Get Hired</h1>
      <section className="links">
        <a href="#">Home</a>
        <a href="https://jobs.github.com/">Github Jobs</a>
      </section>
    </div>
  );
}

export default Header;
