import React, { useState } from "react";
import cloud from "../assets/title_cloud.png";
import js from "../assets/js.png";
import typescript from "../assets/typescript.png";
import react from "../assets/react.png";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import sass from "../assets/sass.png";
import tailwindcss from "../assets/tailwindcss.png";
import mysql from "../assets/mysql.png";
import postman from "../assets/postman.png";
import github from "../assets/github.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import ps from "../assets/ps.png";
import starIcon from "../assets/star.png";
import NotionCardSummary from "../components/NotionCardSummary";
import "../styles/Project.css";

const iconRows = [
  [
    { src: js, alt: "JavaScript" },
    { src: typescript, alt: "TypeScript" },
    { src: react, alt: "React" },
    { src: html5, alt: "HTML5" },
    { src: css3, alt: "CSS3" },
  ],
  [
    { src: sass, alt: "Sass" },
    { src: tailwindcss, alt: "Tailwind CSS" },
    { src: mysql, alt: "MySQL" },
  ],
  [
    { src: postman, alt: "Postman" },
    { src: github, alt: "GitHub" },
    { src: git, alt: "Git" },
    { src: figma, alt: "Figma" },
    { src: ps, alt: "Photoshop" },
  ],
];

const projectPageIds = [
  "35734d85c8af4d3892fc1c36c66610a5",
  "1b6b4f8f8ef9808998c9e4f707b98dc3",
  "2-1b6b4f8f8ef980b18117dca649c4a105",
  "2-1b6b4f8f8ef98022935ec270807ee4f7"
];

const techDetails = [
    {
      category: "FRONTEND",
      items: [
        {
          title: "React",
          desc: "컴포넌트 기반 UI 설계에 능숙하며, 상태 관리와 props, hooks(useState, useEffect 등)를 활용해\n동적인 SPA를 구현합니다. 재사용성과 유지보수를 고려해 컴포넌트 분리, 커스텀 훅 제작 경험이 있습니다.",
        },
        {
          title: "HTML5, CSS3",
          desc: "시멘틱 마크업, 웹 표준 및 접근성을 고려한 구조 설계에 익숙합니다.\nCSS3의 Flex, Grid 등 레이아웃 및 스타일링 기법을 활용하며, 반응형 웹 구현 경험이 있습니다.",
        },
        {
          title: "Sass",
          desc: "SCSS 문법을 활용해 중첩, 변수, mixin, 함수 등으로 스타일 코드를 구조화하고,\n전역 변수 및 유틸리티 mixin을 통한 재사용성 높은 스타일 시스템을 구축합니다",
        },
        {
          title: "Tailwind CSS",
          desc: "유틸리티 퍼스트 CSS 프레임워크로, 빠른 프로토타이핑과 일관된 디자인 시스템 구축에 활용합니다.\n커스텀 테마, 반응형, 다크모드 등 Tailwind의 다양한 기능을 실무에 적용해봤습니다.",
        },
      ],
    },
    {
      category: "LANGUAGE",
      items: [
        {
          title: "JavaScript",
          desc: "프로미스, 프로토타입, 컨텍스트 생성/실행, 호이스팅, 렉시컬 환경 등 JS 엔진의 핵심 동작 원리를\n반복적으로 학습하며, 비동기 처리, 콜백, 클로저, 모듈화 등 고급 개념까지 실전 프로젝트에 적용합니다.",
        },
        {
          title: "TypeScript",
          desc: "제네릭, 유틸리티 타입(Partial, Pick, Exclude 등), 타입 추론, 타입 확장/축소 등으로\n타입 안정성과 코드의 견고함을 높입니다.\n타입 선언 파일 작성 및 외부 라이브러리 타입 적용 경험도 보유하고 있습니다.",
        },
      ],
    },
    {
      category: "DATABASE",
      items: [
        {
          title: "MySQL",
          desc: "테이블 설계, 정규화, JOIN, 트랜잭션, 인덱싱 등 관계형 데이터베이스의 기본 원리를 이해하고,\n실무에서 데이터 모델링, 쿼리 최적화, 백엔드 API와의 연동 경험이 있습니다.",
        },
      ],
    },
    {
      category: "DESIGN",
      items: [
        {
          title: "Figma",
          desc: "UI/UX 설계, 프로토타이핑, 컴포넌트 기반 디자인 시스템 구축에 활용합니다.\n개발자와 디자이너 간 협업을 위해 디자인 토큰, 스타일 가이드, 컴포넌트 라이브러리 관리 경험이 있습니다.",
        },
        {
          title: "Photoshop",
          desc: "이미지 편집, 아이콘 제작, 배너 디자인 등 웹/모바일 UI에 필요한 그래픽 작업을 수행합니다.",
        },
        {
          title: "Postman",
          desc: "REST API 테스트, 인증 문제 해결, API 문서화 등 백엔드와의 연동 및 디버깅에 적극 활용합니다.",
        },
        {
          title: "Git, GitHub",
          desc: "브랜치 전략, PR 리뷰, 이슈 관리 등 협업 중심의 버전 관리에 익숙하며,\n오픈소스 및 팀 프로젝트에서 코드 품질과 협업 효율을 높이기 위해 적극적으로 사용합니다.",
        },
      ],
    },
  ];


function Project() {
  const [hovered, setHovered] = useState({ row: null, idx: null });

  return (
    <main className="project">
      <div className="project-header">
        <img src={cloud} alt="cloud" className="project-cloud" />
        <h1 className="project-title">기술 스택 및 도구</h1>
        <p className="project-subtitle">
          사용하고 있는 기술 스택 및 도구에 대한 자세한 설명은 아래와 같습니다.
        </p>
      </div>
      
      <section className="project-section">
  {/* 아이콘 그리드 */}
  <div className="project-card-imgbox">
    <div className="project-icon-rows">
      {iconRows.map((row, rowIdx) => (
        <div className="project-icon-row" key={rowIdx}>
          {row.map((icon, idx) => (
            <div
              key={icon.alt}
              className="project-icon-wrapper"
              onMouseEnter={() => setHovered({ row: rowIdx, idx })}
              onMouseLeave={() => setHovered({ row: null, idx: null })}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="project-icon"
              />
              {hovered.row === rowIdx && hovered.idx === idx && (
                <span className="project-icon-tooltip">{icon.alt}</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>

<section className="project-detail-section">
  {techDetails.map((block) => (
    <div className="project-detail-block" key={block.category}>
      <h3 className="project-detail-category">
        <img src={starIcon} alt="star" className="star-icon" />
        {block.category}
      </h3>
      <ul className="project-detail-list">
        {block.items.map((item) => (
          <li key={item.title} className="project-detail-item">
            <span className="project-detail-title">{item.title}</span>
            <span className="project-detail-desc" style={{ whiteSpace: "pre-line" }}>
              {item.desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</section>

<section className="notion-project-list-section">
  <div className="section-header-block">
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


    
    </main>
  );
}

export default Project;
