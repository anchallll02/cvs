import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/aboutus" },
    { name: "Blog", path: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="CodeVirus Security" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-links">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="quote-btn"
                onClick={() => setIsSignupOpen(true)}
              >
                Signup
              </button>
            </li>
            <li>
              <button
                className="quote-btn"
                onClick={() => setIsLoginOpen(true)}
              >
                Login
              </button>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              className="quote-btn"
              onClick={() => {
                setIsSignupOpen(true);
                setMenuOpen(false);
              }}
            >
              Signup
            </button>
          </li>
          <li>
            <button
              className="quote-btn"
              onClick={() => {
                setIsLoginOpen(true);
                setMenuOpen(false);
              }}
            >
              Login
            </button>
          </li>
        </ul>

        {/* Internal CSS */}
        <style>{`
          * { margin:0; padding:0; box-sizing:border-box; font-family:'Poppins', sans-serif; }
          .navbar { width:100%; position:fixed; top:0; left:0; z-index:1000; background:#fff; transition:box-shadow 0.3s ease; }
          
          .navbar.scrolled { box-shadow:0 4px 12px rgba(0,0,0,0.12); }
          .navbar-container { max-width:1200px; margin:auto; padding:0 20px; height:70px; display:flex; justify-content:space-between; align-items:center; }

          .logo img { height:50px; transition: transform 0.3s ease; }
          .logo img:hover { transform: scale(1.05); }

          .nav-links { list-style:none; display:flex; gap:20px; align-items:center; }
          .nav-links li a, .nav-links li button { text-decoration:none; font-size:15px; font-weight:500; color:#6b21a8; position: relative; transition: all 0.25s ease; background:none; border:none; cursor:pointer; }
          .nav-links li a:hover, .nav-links li button:hover { color:#4c1d95; transform:scale(1.05); }
          .nav-links li a.active::after { content:''; position:absolute; width:100%; height:2px; background:#6b21a8; left:0; bottom:-4px; border-radius:2px; transform: scaleX(1); transition: transform 0.3s ease; }
          .nav-links li a::after { content:''; position:absolute; width:100%; height:2px; background:#6b21a8; left:0; bottom:-4px; transform: scaleX(0); transition: transform 0.3s ease; border-radius:2px; }
          .nav-links li a:hover::after, .nav-links li button:hover::after { transform: scaleX(1); }

          .quote-btn { padding:6px 15px; border:2px solid #6b21a8; border-radius:6px; font-weight:600; color:#6b21a8; text-align:center; display:inline-block; transition: all 0.25s ease; }
          .quote-btn:hover { background:#6b21a8; color:#fff; transform:scale(1.05); }

          .menu-icon { font-size:28px; cursor:pointer; color:#6b21a8; user-select:none; display:none; }

          .mobile-menu { list-style:none; display:flex; flex-direction:column; align-items:center; gap:15px; overflow:hidden; max-height:0; background:white; box-shadow:0 4px 12px rgba(0,0,0,0.1); transition:max-height 0.4s cubic-bezier(0.77,0,0.175,1); }
          .mobile-menu.open { max-height:500px; }
          .mobile-menu li a, .mobile-menu li button { text-decoration:none; font-size:16px; font-weight:500; color:#6b21a8; transition: all 0.25s ease; background:none; border:none; cursor:pointer; }
          .mobile-menu li a:hover, .mobile-menu li button:hover { color:#4c1d95; transform:scale(1.05); }
          .mobile-menu .quote-btn:hover { background:#6b21a8; color:#fff; transform:scale(1.05); }

          @media(max-width:768px) {
            .menu-icon { display:block; }
            .nav-links { display:none; }
          }
        `}</style>
      </nav>

      {/* Modals */}
      <Signup isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;
