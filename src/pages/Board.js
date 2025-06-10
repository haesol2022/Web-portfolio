import React, { useState, useEffect } from "react";
import cloud from "../assets/title_cloud.png";
import woman1 from "../assets/woman1.png";
import woman2 from "../assets/woman2.png";
import "../styles/Board.css";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

function Board() {
  const [comments, setComments] = useState([]);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "guestbook"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  // 방명록 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname || !password || !content) {
      setError("닉네임, 비밀번호, 방명록 내용을 모두 입력해 주세요.");
      return;
    }
    try {
      await addDoc(collection(db, "guestbook"), {
        nickname,
        password,
        content,
        createdAt: serverTimestamp(),
        avatar: "user1",
      });
      setNickname("");
      setPassword("");
      setContent("");
      setError("");
    } catch (err) {
      setError("방명록 저장에 실패했습니다. 다시 시도해 주세요.");
    }
  };
  
  const avatarImages = [woman1, woman2];


  return (
    <main className="board">
      <div className="board-header">
        <img src={cloud} alt="cloud" className="board-cloud" />
        <h1 className="board-title">방명록을 남겨 주세요!</h1>
        <p className="board-subtitle">
          남겨 주신 소중한 방명록은 제게 큰 힘이 됩니다.<br />
          닉네임과 비밀번호를 입력한 뒤 방명록을 작성할 수 있습니다 :)
        </p>
      </div>

      <form className="guestbook-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <input
            className="input-nickname"
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
          />
          <input
            className="input-password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <textarea
          className="input-content"
          rows={4}
          placeholder="방명록을 입력해 보세요."
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        {error && <div className="input-error">{error}</div>}

        <button className="guestbook-btn" type="submit">
          방명록 등록하기
        </button>
      </form>

      <div className="guestbook-count">
        작성된 방명록 <span className="count">{comments.length}개</span>가 있어요 <span role="img" aria-label="smile">😊</span>
      </div>
      <hr className="guestbook-divider" />

        <div className="guestbook-outer">
        <ul className="guestbook-list">
            {comments.map((c, idx) => (
                <li className="guestbook-item" key={c.id}>
                <div className="guestbook-avatar-wrap">
                    <div className="guestbook-avatar">
                    <img
                        src={avatarImages[idx % avatarImages.length]}
                        alt="avatar"
                        className="avatar-img"
                    />
                    </div>
                    <div className="guestbook-nickname">{c.nickname}</div>
                </div>
                <div className="guestbook-content">
                <div className="guestbook-message speech-bubble-left" style={{ whiteSpace: "pre-line" }}>
                    {c.content}
                </div>
                </div>

                </li>
            ))}
</ul>

        </div>

    </main>
  );
}

export default Board;
