import React from "react";
import logoImg from "../assets/footer_logo.png";
import cloudImg from "../assets/footer_cloud.png";
import githubIcon from "../assets/github_icon.png";
import emailIcon from "../assets/email_icon.png";
import phoneIcon from "../assets/phone_icon.png";
import markIcon from "../assets/mark_icon.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo-row">
            <img src={cloudImg} alt="cloud" className="footer-cloud" />
            <img src={logoImg} alt="PORTFOLIO 로고" className="footer-logo-img" />
          </div>
          <div className="footer-desc">
            궁금한 점이 있다면 연락 부탁드립니다 :)<br />
            빠르게 답장드리도록 하겠습니다.
          </div>
          <a href="https://github.com/haesol2022" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
        </div>
        <div className="footer-right">
          <div className="footer-contact-title">Contact</div>
          <div className="footer-contact-list">
            <div>
              <img src={emailIcon} alt="email" className="footer-icon-img" />
              haesol2022@naver.com
            </div>
            <div>
              <img src={phoneIcon} alt="phone" className="footer-icon-img" />
              010-2022-8974
            </div>
            <div className="footer-address">
              <img src={markIcon} alt="address" className="footer-icon-img" />
              서울특별시 강동구 천중로 41길, 05313
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
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
