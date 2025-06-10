import React from "react";
import cloud from "../assets/title_cloud.png";
import VelogSinglePost from "../components/VelogSinglePost";
import "../styles/Blog.css";
import { useNavigate } from "react-router-dom";


function Blog() {
  const navigate = useNavigate();
  return (
    <main className="blog">
      <div className="blog-header">
        <img src={cloud} alt="cloud" className="blog-cloud" />
        <h1 className="blog-title">VELOG 모아보기</h1>
        <p className="blog-subtitle">
        자세한 문제 해결 과정은 VELOG에서 확인하실 수 있습니다.
        </p>
      </div>
     
      <section className="post-section">
        <div className="post-list">
        <VelogSinglePost velogId="haesol2022" keyword="[1주차] Git / GitHub" />
        <VelogSinglePost velogId="haesol2022" keyword="[2주차] HTML / CSS 기초" />
        <VelogSinglePost velogId="haesol2022" keyword="[3주차] HTML / CSS 심화" />

        <VelogSinglePost velogId="haesol2022" keyword="[4주차] JS 기초" />
        <VelogSinglePost velogId="haesol2022" keyword="[5주차] JS 심화" />
        <VelogSinglePost velogId="haesol2022" keyword="[6주차] JS 심화 2" />
      </div>

        <button
          className="velog-btn"
          onClick={() => window.open('https://velog.io/@haesol2022/posts', '_blank')}
        > GO VELOG !
        </button>
    </section>

    </main>
  );
}

export default Blog;
