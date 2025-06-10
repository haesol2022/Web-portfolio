import React, { useEffect, useState } from "react";

function NotionCardSummary({ pageId }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [github, setGithub] = useState("");
  const [team, setTeam] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`)
      .then(res => res.json())
      .then(data => {
        const blocks = Object.values(data)
          .map(blockObj => blockObj.value)
          .filter(Boolean);

        // 노션에서 대표 이미지 가져옴옴
        const imageBlock = blocks.find(
          block => block.type === "image" && block.format && block.format.display_source
        );
        if (imageBlock) {
          let url = imageBlock.format.display_source;
          if (url.startsWith("attachment:")) {
            url = `https://www.notion.so/image/${encodeURIComponent(url)}?table=block&id=${imageBlock.id}&cache=v2`;
          }
          setImageUrl(url);
        }

        // 제목 (header 블록이 없으면 page 블록의 title 사용)
        const h1Block = blocks.find(
          block =>
            block.type === "header" &&
            block.properties &&
            block.properties.title
        );
        if (h1Block) {
          setTitle(h1Block.properties.title[0][0]);
        } else {
          const pageBlock = blocks.find(
            block => block.type === "page" && block.properties && block.properties.title
          );
          if (pageBlock) {
            setTitle(pageBlock.properties.title[0][0]);
          }
        }

        // Github 링크
        const githubBlock = blocks.find(
          block =>
            block.type === "text" &&
            block.properties &&
            block.properties.title &&
            block.properties.title[0][0].toLowerCase().includes("github")
        );
        if (githubBlock) {
          const titleArr = githubBlock.properties.title;
          let githubUrl = "";
          for (const t of titleArr) {
            if (Array.isArray(t[1])) {
              const linkObj = t[1].find(arr => arr[0] === "a");
              if (linkObj) {
                githubUrl = linkObj[1];
                break;
              }
            }
          }
          setGithub(githubUrl);
        }

        // 팀 구성 정보
        const teamBlock = blocks.find(
          block =>
            block.type === "text" &&
            block.properties &&
            block.properties.title &&
            (
              block.properties.title[0][0].includes("Frontend") ||
              block.properties.title[0][0].includes("Backend") ||
              block.properties.title[0][0].includes("PM")
            )
        );
        if (teamBlock) {
          setTeam(teamBlock.properties.title[0][0]);
        }

        // 날짜 정보 추출 (Notion Splitbee API의 page 블록 properties)
        const pageBlock = blocks.find(
          block => block.type === "page" && block.properties && block.properties["`Bst"]
        );
        if (pageBlock) {
          const bst = pageBlock.properties["`Bst"];
        
          try {
            const dateObj = bst?.[0]?.[1]?.[0]?.[1];
            const start = dateObj?.start_date;
            const end = dateObj?.end_date;
            if (start && end) setDate(`${start} ~ ${end}`);
            else if (start) setDate(start);
          } catch (e) {
          }
        }
      });
  }, [pageId]);

  // 실제 노션 페이지 URL
  const notionUrl = `https://www.notion.so/${pageId}`;

  const handleCardClick = (e) => {
    // Github 링크 클릭 시는 카드 이동 막기 위해
    if (e.target.closest('.github-link')) return;
    window.open(notionUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="notion-card"
      style={{ cursor: "pointer" }}
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      onKeyPress={e => {
        if (e.key === "Enter" || e.key === " ") handleCardClick(e);
      }}
    >
      {imageUrl && (
        <img src={imageUrl} alt="대표 이미지" style={{ width: "100%", borderRadius: "16px 16px 0 0" }} />
      )}
      <div style={{ padding: "18px 20px" }}>
        <h3 style={{ margin: "8px 0 10px 0", fontWeight: 700 }}>{title}</h3>
        {github && (
          <a
            href={github}
            className="github-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#538EFE", fontWeight: 500, display: "block", marginBottom: "6px" }}
            onClick={e => e.stopPropagation()}
          >
            Github →
          </a>
        )}
        {team && (
          <div style={{ color: "#888", fontSize: "0.98rem", marginTop: "12px" }}>{team}</div>
        )}
        {date && (
          <div style={{ color: "#888", fontSize: "0.98rem", marginTop: "8px" }}>{date}</div>
        )}
      </div>
    </div>
  );
}
export default NotionCardSummary;
