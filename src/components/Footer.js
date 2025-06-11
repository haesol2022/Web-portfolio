import React from "react";
import { useMediaQuery } from "react-responsive";
import logoImg from "../assets/footer_logo.png";
import cloudImg from "../assets/footer_cloud.png";
import githubIcon from "../assets/github_icon.png";
import emailIcon from "../assets/email_icon.png";
import phoneIcon from "../assets/phone_icon.png";
import markIcon from "../assets/mark_icon.png";
import "../styles/Footer.css";

function Footer() {
  
  // 모바일 반응형
  const isMobile = useMediaQuery({ maxWidth: 480 });

  // 모바일 스타일 오버라이드
  const footerMainStyle = isMobile
    ? {
        flexDirection: "column",
        alignItems: "center",
        padding: "0 8px",
        minHeight: 0,
        gap: 24,
      }
    : {};

  const footerLeftStyle = isMobile
    ? { alignItems: "center", textAlign: "center", gap: 10 }
    : {};

  const footerLogoRowStyle = isMobile
    ? { flexDirection: "column", alignItems: "center", gap: 6, marginBottom: 8 }
    : {};

  const cloudStyle = isMobile
    ? { width: 28, height: 28, marginRight: 0, padding: "2px 4px" }
    : {};

  const logoImgStyle = isMobile
    ? { width: 120, height: 14 }
    : {};

  const githubIconStyle = isMobile
    ? { width: 28, height: 28, marginTop: 0, marginLeft: 0 }
    : {};

  const footerRightStyle = isMobile
    ? {
        minWidth: 0,
        textAlign: "center",
        alignSelf: "center",
        marginRight: 0,
        marginTop: 0,
        marginBottom: 12,
      }
    : {};

  const contactTitleStyle = isMobile
    ? { fontSize: 17, marginBottom: 10 }
    : {};

  const contactListStyle = isMobile
    ? { fontSize: 13, gap: 5 }
    : {};

  const iconImgStyle = isMobile
    ? { width: 16, height: 16, marginRight: 4, marginBottom: 2 }
    : {};

  const dividerStyle = isMobile
    ? { margin: "18px 0 0 0" }
    : {};

  const footerBottomStyle = isMobile
    ? {
        flexDirection: "column",
        gap: 8,
        padding: "12px 8px",
        fontSize: 13,
        textAlign: "center",
      }
    : {};

  return (
    <footer className="footer" style={isMobile ? { padding: "18px 0 0 0", fontSize: 13 } : {}}>
      <div className="footer-main" style={footerMainStyle}>
        <div className="footer-left" style={footerLeftStyle}>
          <div className="footer-logo-row" style={footerLogoRowStyle}>
            <img src={cloudImg} alt="cloud" className="footer-cloud" style={cloudStyle} />
            <img src={logoImg} alt="PORTFOLIO 로고" className="footer-logo-img" style={logoImgStyle} />
          </div>
          <div className="footer-desc" style={isMobile ? { fontSize: 13, margin: "6px 0" } : {}}>
            궁금한 점이 있다면 연락 부탁드립니다 :)<br />
            빠르게 답장드리도록 하겠습니다.
          </div>
          <a href="https://github.com/haesol2022" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="github-icon" style={githubIconStyle} />
          </a>
        </div>
        <div className="footer-right" style={footerRightStyle}>
          <div className="footer-contact-title" style={contactTitleStyle}>Contact</div>
          <div className="footer-contact-list" style={contactListStyle}>
            <div>
              <img src={emailIcon} alt="email" className="footer-icon-img" style={iconImgStyle} />
              haesol2022@naver.com
            </div>
            <div>
              <img src={phoneIcon} alt="phone" className="footer-icon-img" style={iconImgStyle} />
              010-2022-8974
            </div>
            <div className="footer-address">
              <img src={markIcon} alt="address" className="footer-icon-img" style={iconImgStyle} />
              서울특별시 강동구 천중로 41길, 05313
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider" style={dividerStyle} />
      <div className="footer-bottom" style={footerBottomStyle}>
        <span>Copyright © 2025 이해솔</span>
        <span className="footer-bottom-links">
          All Rights Reserved |{" "}
          <a href="#" className="footer-link">Terms and Conditions</a> |{" "}
          <a href="#" className="footer-link">Privacy Policy</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
