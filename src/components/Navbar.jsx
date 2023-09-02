import React, { useRef, useState } from "react";
import logo from "../images/Amr-logo.png";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const LinksRef = useRef(null);

  return (
    <nav>
      <div className="nav-header">
        <img src={logo} alt="logo" className="logo" />
        <button
          type="button"
          className="fabars"
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        >
          <FaBars />
        </button>
      </div>
      <div
        className="links-container"
        style={{
          height: showLinks
            ? `${LinksRef.current.getBoundingClientRect().height}px`
            : "0px",
        }}
      >
        <ul className="links" ref={LinksRef}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-links">
        {social.map((social_item) => {
          return (
            <li key={social_item.id}>
              <a href={social_item.url}>{social_item.icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
