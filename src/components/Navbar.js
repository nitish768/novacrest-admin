import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/novacrest-logo.png";

const links = [
  { to: "/",        label: "Home"     },
  { to: "/products", label: "Products" },
  { to: "/order",   label: "Order Now" },
  { to: "/about",   label: "About"    },
  { to: "/contact", label: "Contact"  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <NavLink className="nav-brand" to="/" onClick={close}>
          <img src={logo} alt="NovaCrest" className="nav-logo" />
          <span>NovaCrest</span>
        </NavLink>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={close}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
