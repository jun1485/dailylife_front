import { useState } from "react";
import axios from "axios";
import "./UserPost.css";

export default function UserPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("string");
  const [imageName, setImageName] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        `${process.env.REACT_APP_HOST}/board/create`,
        {
          title,
          content,
          imageName,
          thumbnail,
        },
        {
          headers: {
            "X-ACCESS-TOKEN": accessToken,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h1 className="post-header">게시물 업로드</h1>
      <form
        className="post-form"
        action="/"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="post-container">
          <input
            className="post-data"
            type="text"
            placeholder="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="post-data"
            placeholder="content"
            name="content"
            rows="10"
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="post-file-container">
            <input
              id="post-upload-name"
              value="첨부파일"
              placeholder="첨부파일"
              readOnly
            />
            <label htmlFor="file">파일 찾기</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => {
                document.querySelector("#post-upload-name").value =
                  e.target.value;
                setImageName(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="post-submit">
          업로드
        </button>
      </form>
    </div>
  );
}
