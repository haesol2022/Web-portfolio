import React from "react";
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import starIcon from "../assets/star.png";
import VelogSinglePost from "../components/VelogSinglePost";
import NotionCardSummary from "../components/NotionCardSummary";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";


const projectPageIds = [
    "35734d85c8af4d3892fc1c36c66610a5",
    "1b6b4f8f8ef9808998c9e4f707b98dc3",
    "2-1b6b4f8f8ef980b18117dca649c4a105",
    "2-1b6b4f8f8ef98022935ec270807ee4f7" 
  ];

function Home() {
    const navigate = useNavigate();
  return (
    <main className="home">
      <div className="clouds">
        <img src={cloud1} alt="cloud" className="cloud cloud1" />
        <img src={cloud2} alt="cloud" className="cloud cloud2" />
      </div>
      <section className="intro">
        <h1>
          안녕하세요,<br />
          프론트엔드 개발자<br />
          <span className="highlight">이해솔</span>입니다.
        </h1>
        <p className="desc">
          저는 React를 기반으로 한<br />
          웹 프론트엔드를 개발하고 있습니다.<br /><br />
          사용자 경험을 개선하고,<br />
          새로운 기술을 배우고 적용하는 것에 열정을 가지고 있습니다.<br />
          웹웹을 통해 사용자와 소통하며,<br />
          사용자 편의와 비즈니스 성장 및 문제 해결에 적극적으로<br />
          기여하는 개발자가 되고자 합니다.
        </p>
        <div className="about-box common-box">
          자세한 설명은 이곳에서 확인해 보실 수 있습니다.<br />
          <button className="about-btn" onClick={() => navigate("/about")} >ABOUT ME !</button>
        </div>
      </section>
      <section className="project-section">
      <div style={{ textAlign: "left", width: "100%" }}>
        <h2 className="section-title">
          <img src={starIcon} alt="star" className="star-icon" />
          최근 프로젝트
        </h2>
        <p className="section-desc">
          해커톤, 협업 프로젝트를 기반으로 한 최근 프로젝트 기록입니다.
        </p>
        </div>
        <div className="project-list">
            {projectPageIds.map(pageId => (
            <NotionCardSummary key={pageId} pageId={pageId.replace(/[^a-zA-Z0-9]/g, "")} />
            ))}
        </div>
        </section>
      <section className="post-section">
        <h2 className="section-title">
          <img src={starIcon} alt="star" className="star-icon" />
          최근 포스팅
        </h2>
        <p className="section-desc">
          개인 스터디 및 문제 해결 방식을 VELOG에 포스팅하고 있습니다.
        </p>
        <div className="post-list">
  <VelogSinglePost velogId="haesol2022" keyword="[1주차] Git / GitHub" />
  <VelogSinglePost velogId="haesol2022" keyword="[2주차] HTML / CSS 기초" />
  <VelogSinglePost velogId="haesol2022" keyword="[3주차] HTML / CSS 심화" />
</div>
        <button className="blog-btn">최근 블로그 보러가기</button>
      </section>
    </main>
  );
}

export default Home;
