import "./Header.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu as HamburgerIcon } from "react-feather";
import { useState } from "react";

function Header({ isMobile }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "" },
    { name: "Schedule", href: "schedule" },
    { name: "FAQ", href: "faq" },
    { name: "Donate", href: "donate" },
  ];

  const renderedNavItems = navItems.map((item) => (
    <Link
      key={item.name}
      to={`/${item.href}`}
      className={
        location.pathname.substring(1) === item.href
          ? "navUnderline"
          : "navNoUnderline"
      }
    >
      {item.name}
    </Link>
  ));

  const navComponent = isMobile ? (
    <HamburgerIcon size={28} onClick={() => setMenuOpen(true)}></HamburgerIcon>
  ) : (
    <span className="navItems">{renderedNavItems}</span>
  );

  const menuOverlay = (
    <div className="menuOverlay" onClick={() => setMenuOpen(false)}>
      {renderedNavItems}
    </div>
  );

  return menuOpen ? (
    menuOverlay
  ) : (
    <nav className="siteHeader">
      <Link className="siteTitle" to="/">
        1+1
      </Link>
      {navComponent}
    </nav>
  );
}

export default Header;
