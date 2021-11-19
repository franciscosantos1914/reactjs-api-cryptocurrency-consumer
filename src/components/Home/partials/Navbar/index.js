import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={(e) => e.preventDefault()}
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block cursor-pointer">
            <a onClick={(e) => e.preventDefault()} className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
