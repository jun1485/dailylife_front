import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import axios from "axios";
import "./NewUserPost.scss";
import styled from "styled-components";

function NewUserPost(props) {
  const tokenInfo = useSelector((state) => state.authToken);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbNail, setThumbNail] = useState("st");
  const [imageName, setImageName] = useState([]);
  const [file, setFile] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (localStorage.getItem("accessToken") === null)
      return alert("로그인 후 이용 가능합니다.");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("thumbNail", thumbNail);
    imageName.forEach((file) => {
      console.log(file);
      formData.append("imageName", file);
    });
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(`${process.env.REACT_APP_HOST}/api/board/create`, formData, {
        headers: {
          "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res);
        props.changeOpenPostModal(false);
      })
      .catch((err) => console.log(err));
  }
  const closeModal = (e) => {
    e.stopPropagation();
    props.changeOpenPostModal(false);
  };
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

  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <>
      <div className="newPost-container">
        <form
          className="post-form"
          action="/"
          method="post"
          onSubmit={handleSubmit}
        >
          <section className="newPost-modal">
            <section className="newPost-boarding">
              <div className="newPost-title">게시글 작성</div>
              <section className="newPost-body">
                <div className="newPost-body-pic">
                  <div className="newPost-body-example-container">
                    <div className="newPost-body-example-pic-list">
                      <label className="select-img-btn" htmlFor="selectImg">
                        {/* <div className="btn-upload" src={}></div> */}
                        <img
                          src={"/assets/addPicture.png"}
                          style={{ cursor: "pointer", marginLeft: "10px" }}
                          alt=""
                        />
                        <input
                          style={{ display: "none" }}
                          id="selectImg"
                          name="imgUpload"
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            setFileImage(
                              URL.createObjectURL(e.target.files[0])
                            );
                            for (let i = 0; i < e.target.files.length; i++)
                              setFile(file + " " + e.target.files[i].name);
                            setImageName([...imageName, ...e.target.files]);
                          }}
                        />
                      </label>
                      {/* <img    // 글 삭제 이미지버튼
                        src={"/assets/deleteImg.png"}
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteFileImage()}
                      ></img> */}
                    </div>

                    {fileImage && (
                      <img
                        className="newPost-body-example-pic"
                        alt="sample"
                        src={fileImage}
                      />
                    )}
                  </div>
                  {!fileImage && (
                    <p className="newPost-body-pic-explain">
                      아래 버튼을 클릭하여 이미지를 추가해주세요.
                    </p>
                  )}
                  {!fileImage && (
                    <img
                      className="newPost-body-pic-cloudPic"
                      src="/assets/cloud-upload.png"
                      alt=""
                    />
                  )}
                </div>
                <div className="newPost-body-content-container">
                  <input
                    className="newPost-body-title"
                    name="title"
                    placeholder="제목을 입력해주세요"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    className="newPost-body-content"
                    name="content"
                    placeholder="내용을 입력해주세요"
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <button className="submit-btn">게시물 등록</button>
                </div>
              </section>
              <img
                className="newPost-modal-close"
                onClick={closeModal}
                src="/assets/x.png"
                alt="newPostModal"
              />
            </section>
          </section>
        </form>
      </div>
    </>
  );
}

export default NewUserPost;
