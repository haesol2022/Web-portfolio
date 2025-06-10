import logo from "../assets/logo.png";
import dot from "../assets/dot.png";
import "../styles/Header.css";
import { useNavigate, useLocation  } from "react-router-dom";


function Header() {
  const menuItems = ["HOME", "ABOUT", "PROJECT", "BLOG", "BOARD"];
  const paths = ["/", "/about", "/project", "/blog", "/board"];
  const navigate = useNavigate();
  const location = useLocation();

  // URL 경로에 따라 activeIndex 결정
  const activeIndex = paths.indexOf(location.pathname);

  const handleClick = (index) => {
    navigate(paths[index]);
  };

  return (
    <nav className="header">
      <img src={logo} alt="PORTFOLIO 로고" className="logo" />
      <ul className="nav-links">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <img src={dot} alt="dot" className="dot" />
    </nav>
  );
}

export default Header;
