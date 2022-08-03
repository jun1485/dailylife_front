import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import axios from "axios";
import "./UserPost.css";

export default function UserPost() {
  const tokenInfo = useSelector((state) => state.authToken);
  const func = console.log(tokenInfo);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbNail, setThumbNail] = useState("string");
  const [imageName, setImageName] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("title", title);
    // formData.append("content", content);
    // formData.append("thumbNail", thumbNail);
    // formData.append("imageName", imageName);

    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        `${process.env.REACT_APP_HOST}/api/board/create`,
        {
          title,
          content,
          imageName,
          thumbNail,
        },
        // formData,
        {
          headers: {
            "X-ACCESS-TOKEN": JSON.stringify(tokenInfo),
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  // 상태 값 업데이트되는 것을 콘솔에서 확인하기 위한 코드
  // 실제 서비스 작동 로직과는 관련이 없는 코드입니다.
  useEffect(() => {
    console.log(`
    title: ${title},
    content: ${content},
    imageName: ${JSON.stringify(imageName)},
    imageName: ${imageName}
    `);
  }, [title, content, imageName]);

  return (
    <div className="post-container">
      <h1 className="post-header">Post</h1>
      <form
        className="post-form"
        action="/"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="post-input-container">
          <input
            className="post-data post-data-title"
            type="text"
            placeholder="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="post-data"
            name="content"
            rows="20"
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
                setImageName([...imageName, e.target.files[0]]);
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="post-submit"
          onClick={() => {
            console.log(tokenInfo);
          }}
        >
          Upload
        </button>
      </form>
    </div>
  );
}
