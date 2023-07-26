import { useState, useRef, useEffect } from "react";
import "../components/styles/Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

// renders files for selected page
function NavTabs({ currentPage, handlePageChange }) {
  const navRef = useRef();
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleNavLinkClick = (page) => {
    setActivePage(page);
    handlePageChange(page);
  };

  return (
    <header>
      {/* logo */}
      <h2>KM</h2>
      {/* nav bar options */}
      <nav ref={navRef}>
        <a
          href="#about"
          onClick={() => handleNavLinkClick("About")}
          className={activePage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
        <a
          href="#portfolio"
          onClick={() => handleNavLinkClick("Portfolio")}
          className={
            activePage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => handleNavLinkClick("Contact")}
          className={activePage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
        <a
          href="#resume"
          onClick={() => handleNavLinkClick("Resume")}
          className={activePage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavTabs;
