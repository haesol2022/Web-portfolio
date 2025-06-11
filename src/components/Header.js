import React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/logo.png";
import dot from "../assets/dot.png";
import "../styles/Header.css";
import { useNavigate, useLocation } from "react-router-dom";

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

  // 모바일 반응형
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const headerStyle = isMobile
    ? {
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 8px 4px 8px",
        gap: 8,
      }
    : {};

  const navLinksStyle = isMobile
    ? {
        display: "flex",
        gap: 10,
        fontSize: 13,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center", 
        padding: 0,
        width: "100%",
      }
    : {};

  const navItemStyle = isMobile
    ? { padding: "4px 10px", borderRadius: 8 }
    : {};

  const dotStyle = isMobile
    ? { width: 30, height: 7, margin: "8px 0 0 0", display: "none" }
    : {};

  return (
    <nav className="header" style={headerStyle}>
      {/* 모바일에서 로고 표시 X */}
      {!isMobile && (
        <img src={logo} alt="PORTFOLIO 로고" className="logo" />
      )}
      <ul className="nav-links" style={navLinksStyle}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active" : ""}
            style={navItemStyle}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      {/* 오른쪽 끝 dot도 숨김 처리 */}
      <img src={dot} alt="dot" className="dot" style={dotStyle} />
    </nav>
  );
}

export default Header;
