import "./Header.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const navItems = [
    { name: "Home", href: "" },
    { name: "Schedule", href: "schedule" },
    { name: "FAQ", href: "faq" },
    { name: "Donate", href: "donate" },
  ];

  const location = useLocation();
  return (
    <nav className="siteHeader">
      <span className="siteTitle">1+1</span>
      <span className="navItems">
        {navItems.map((item) => (
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
        ))}
      </span>
    </nav>
  );
}

export default Header;
