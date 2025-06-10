import React, { useEffect, useState } from "react";
import "../styles/Card.css";

function VelogPostCard({ title, date, link, img }) {
  const handleImageClick = (e) => {
    e.stopPropagation(); // 혹시 카드 전체에 onClick이 있을 때 이벤트 버블링 방지
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="card post-card common-box"
      style={{
        background: "#23242a",
        borderRadius: "12px",
        color: "#fff",
        minHeight: "300px",
        boxShadow: "0 4px 24px rgba(83,142,254,0.10)"
      }}
    >
      {img && (
        <img
          src={img}
          alt={title}
          className="card-img"
          style={{
            width: "100%",
            height: "160px",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
            marginBottom: "10px",
            cursor: "pointer"
          }}
          onClick={handleImageClick}
        />
      )}
      <div className="card-body">
        <h3>{title}</h3>
        <span
          className="card-date"
          style={{
            display: "block",
            color: "#b4c9e7",
            marginBottom: "18px",
            textAlign: "left"
          }}
        >
          {date}
        </span>
        {link && (
          <a
            href={link}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              marginTop: "12px",
              color: "#b4c9e7",
              textDecoration: "underline",
              fontSize: "0.97rem",
              textAlign: "left"
            }}
          >
            자세히 보기 »
          </a>
        )}
      </div>
    </div>
  );
}

function VelogSinglePost({ velogId, keyword }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    function normalize(str) {
      return (str || "")
        .replace(/\s+/g, "")
        .replace(/[\u200B-\u200D\uFEFF]/g, "")
        .replace(/[\r\n\t]/g, "");
    }

    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://v2.velog.io/rss/${velogId}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          const found = data.items.find(item =>
            normalize(item.title) === normalize(keyword)
          );
          if (found) {
            setPost({
              title: found.title,
              date: found.pubDate.slice(0, 10).replace(/-/g, "."),
              link: found.link,
              img: found.thumbnail
            });
          }
        }
      });
  }, [velogId, keyword]);

  if (!post) return <div>로딩 중...</div>;

  return <VelogPostCard {...post} />;
}

export default VelogSinglePost;
