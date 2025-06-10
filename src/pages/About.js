import React from "react";
import cloud from "../assets/title_cloud.png";
import codeReact from "../assets/code-react.png";
import ideaChalk from "../assets/idea-chalk.png";
import notionGithub from "../assets/notion-github.png";
import "../styles/About.css";

const aboutList = [
  {
    img: codeReact,
    title: "꾸준한 경험 및 피드백 중심의 성장",
    desc: (
      <>
        React.js를 사용하여 해커톤과 팀 프로젝트에 적극적으로 참여하며,<br />
        실제 서비스 개발·협업 경험을 쌓았습니다.<br />
        실제 프로젝트에서 발생한 문제(예: 비동기 처리, 상태 관리, CORS 등)를<br />
        직접 해결하며, 다양한 기술을 익히는 데 그치지 않고<br />
        실전에서 부딪히며 피드백을 받아가며 성장했습니다.<br />
        이런 경험을 통해 문제 해결력과 실무 감각을 키웠습니다.
      </>
    ),
  },
  {
    img: ideaChalk,
    title: "기술적 한계 돌파를 위한 자기주도 학습과 개선",
    desc: (
      <>
        JavaScript의 비동기 처리, React 상태 관리, API 통신 등에서<br />
        어려움을 느낄 때마다 온라인 강의, 공식 문서, 커뮤니티 등을 활용해<br />
        스스로 학습하고, 프로젝트에 바로 적용하여 성장을 가속화했습니다.<br />
        새로운 기술 스택 및 도구의 사용을 적극적으로 연습하며,<br />
        학습-실전-개선의 선순환을 실천하고 있습니다.
      </>
    ),
  },
  {
    img: notionGithub,
    title: "협업과 소통을 통한 팀 성장 기여",
    desc: (
      <>
        문제 해결 경험과 인사이트를 팀원들과<br />
        적극적으로 공유하는 것을 중요한 가치로 생각합니다.<br />
        Github 이슈와 PR, Notion 등의 협업 도구 사용 경험이 있습니다.<br />
        다양한 이슈를 해결할 때마다 그 과정과 결과를 문서화하고<br />
        회의에서 공유하여 팀 전체가 함께 성장할 수 있도록 했습니다.<br />
        이러한 공유 문화를 기반으로 개발 중 어려움이 생기면<br />
        혼자 고민하지 않고 즉시 논의하며 다양한 의견을 모아<br />
        최적의 해결책을 찾는 분위기가 자연스럽게 형성되었습니다.<br />
        이처럼 지식을 나누고 소통하는 자세는 개인의 기술적 성장뿐 아니라,<br /> 
        팀 전체의 개발 효율과 프로젝트 완성도를 높이는 데 크게 기여한다고 믿습니다.
      </>
    ),
  },
];

function About() {
  return (
    <main className="about">
      <div className="about-header">
        <img src={cloud} alt="cloud" className="about-cloud" />
        <h1 className="about-title">핵심 가치 3가지</h1>
        <p className="about-subtitle">
          경험·성장·협업·도전정신이 녹아들어 있는 전체적인 가치를 추구합니다.
        </p>
      </div>
      <section className="about-section">
        {aboutList.map((item, idx) => (
          <div className="about-value-block" key={idx}>
            <div className="about-card-imgbox">
              <img src={item.img} alt={item.title} className="about-img" />
            </div>
            <div className="about-card-descbox">
              <h2>
                <span className="about-underline">{item.title}</span>
              </h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default About;
