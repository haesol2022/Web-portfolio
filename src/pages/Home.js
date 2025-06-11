import React from "react";
import { useMediaQuery } from "react-responsive";
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
  // 모바일 반응형
  const isMobile = useMediaQuery({ maxWidth: 480 });

  // 모바일 스타일
  const cloud1Style = isMobile
    ? {
        left: "0vw",
        top: 65,
        width: "45vw",
        minWidth: 0,
        maxWidth: "80vw"
      }
    : {
        left: "2vw",
        top: 90,
        width: "22vw",
        minWidth: 420,
        maxWidth: 600
      };

  const cloud2Style = isMobile
    ? {
        right: "-2vw",
        top: 100,
        width: "25vw",
        minWidth: 0,
        maxWidth: "60vw"
      }
    : {
        right: "2vw",
        top: 190,
        width: "14vw",
        minWidth: 230,
        maxWidth: 400
      };

  return (
    <main className="home" style={isMobile ? { paddingBottom: 4, minHeight: 80 } : {}}>
      <div className="clouds">
        <img src={cloud1} alt="cloud" className="cloud cloud1" style={cloud1Style} />
        <img src={cloud2} alt="cloud" className="cloud cloud2" style={cloud2Style} />
      </div>
      <section className="intro" style={isMobile ? { paddingTop: 16 } : {}}>
        <h1
          style={
            isMobile
              ? { fontSize: "1.7rem", marginTop: 130, marginBottom: 6, wordBreak: "keep-all" }
              : {}
          }
        >
          안녕하세요,<br />
          프론트엔드 개발자<br />
          <span className="highlight">이해솔</span>입니다.
        </h1>
        <p
          className="desc"
          style={
            isMobile
              ? { fontSize: "0.78rem", marginBottom: 18, wordBreak: "keep-all" }
              : {}
          }
        >
          저는 React를 기반으로 한<br />
          웹 프론트엔드를 개발하고 있습니다.<br /><br />
          사용자 경험을 개선하고,<br />
          새로운 기술을 배우고 적용하는 것에 열정을 가지고 있습니다.<br />
          웹웹을 통해 사용자와 소통하며,<br />
          사용자 편의와 비즈니스 성장 및 문제 해결에 적극적으로<br />
          기여하는 개발자가 되고자 합니다.
        </p>
        <div
          className="about-box common-box"
          style={
            isMobile
              ? {
                  width: "75vw",
                  height: "15vw",
                  fontSize: "0.78rem",
                  padding: "6px 2vw",
                  marginBottom: 50,
                  borderRadius: 12,
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }
              : {}
          }
        >
          <span style={isMobile ? { fontSize: "0.75rem", marginTop: "4px" } : {}}>
    자세한 설명은 이곳에서 확인해 보실 수 있습니다.
  </span>
          <button
            className="about-btn"
            style={isMobile ? { padding: "5.8px 15px", fontSize: "0.6rem", margin: "6px 0px 4px 0px" } : {}}
            onClick={() => navigate("/about")}
          >
            ABOUT ME !
          </button>
        </div>
      </section>
      <section
        className="project-section"
        style={
          isMobile
            ? { maxWidth: "100vw", padding: "0 2vw", margin: "6px auto 10px auto" }
            : {}
        }
      >
        <div style={{ textAlign: "left", width: "100%",  marginLeft: "25px", marginBottom: "-8px"}}>
          <h2
            className="section-title"
            style={isMobile ? { fontSize: "0.95rem", gap: 4,} : {}}
          >
            <img
              src={starIcon}
              alt="star"
              className="star-icon"
              style={isMobile ? { width: 12, height: 12 } : {}}
            />
            최근 프로젝트
          </h2>
          <p
            className="section-desc"
            style={isMobile ? { fontSize: "0.78rem", marginLeft: 0, marginBottom: "55px"} : {}}
          >
            해커톤, 협업 프로젝트를 기반으로 한 최근 프로젝트 기록입니다.
          </p>
        </div>
        <div
          className="project-list"
          style={
            isMobile
              ? { gap: 4, flexDirection: "column", alignItems: "center" }
              : {}
          }
        >
          {projectPageIds.map((pageId) => (
            <NotionCardSummary
              key={pageId}
              pageId={pageId.replace(/[^a-zA-Z0-9]/g, "")}
              style={isMobile ? { maxWidth: "92vw", padding: "6px 2px", fontSize: "0.8rem", margin: "4px auto" } : {}}
            />
          ))}
        </div>
      </section>
      <section
        className="post-section"
        style={
          isMobile
            ? { maxWidth: "100vw", padding: "0 2vw", margin: "6px auto 10px auto" }
            : {}
        }
      >
        <h2
          className="section-title"
          style={isMobile ? { fontSize: "0.95rem", gap: 4,  marginLeft: "15px"} : {}}
        >
          <img
            src={starIcon}
            alt="star"
            className="star-icon"
            style={isMobile ? { width: 12, height: 12 } : {}}
          />
          최근 포스팅
        </h2>
        <p
          className="section-desc"
          style={isMobile ? { fontSize: "0.78rem", marginLeft: "15px" } : {}}
        >
          개인 스터디 및 문제 해결 방식을 VELOG에 포스팅하고 있습니다.
        </p>
        <div
          className="post-list"
          style={
            isMobile
              ? { gap: 4, flexDirection: "column", alignItems: "center" }
              : {}
          }
        >
          <VelogSinglePost velogId="haesol2022" keyword="[1주차] Git / GitHub" />
          <VelogSinglePost velogId="haesol2022" keyword="[2주차] HTML / CSS 기초" />
          <VelogSinglePost velogId="haesol2022" keyword="[3주차] HTML / CSS 심화" />
        </div>
        <button
          className="blog-btn"
          style={
            isMobile
              ? {
                  marginTop: 8,
                  marginBottom: 12,
                  fontSize: "0.85rem",
                  padding: "6px 12px"
                }
              : {}
          }
          onClick={() => navigate("/blog")}
        >
          최근 블로그 보러가기
        </button>
      </section>
    </main>
  );
}

export default Home;
