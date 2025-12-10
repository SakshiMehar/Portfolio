import "./navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";
import React from "react";
import MenuBtn from "../assets/menuBtn.png";
import Close from "../assets/close.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navBar">
      <ul className="navlist">
        <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      <button className={`mobileMenuBtn ${showMenu ? "hideBtn" : ""}`}
       onClick={() => setShowMenu(!showMenu)}>
  <img 
    src={showMenu ? Close : MenuBtn} 
    alt="menu"
    className="menuIconImage"
  />
</button>


      {showMenu && (
        <div className="mobileMenuItems">
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            to="works"
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
