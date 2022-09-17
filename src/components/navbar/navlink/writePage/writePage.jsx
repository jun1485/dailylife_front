import axios from 'axios';
import { useState } from 'react';

import CloseButtonIcon from 'components/Icons/closeButtonIcon';
import './writePage.scss';

function writePage(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbNail] = useState('dummy');
  const [imageName, setImageName] = useState([]);
  const [file, setFile] = useState('');
  const [fileImage, setFileImage] = useState('');

  // eslint-disable-next-line consistent-return
  function handleSubmit(e) {
    e.preventDefault();
    if (localStorage.getItem('accessToken') === null) return alert('로그인 후 이용 가능합니다.');
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('thumbNail', thumbNail);
    // eslint-disable-next-line no-shadow
    imageName.forEach((file) => {
      console.log(file);
      formData.append('imageName', file);
    });
    axios
      .post(`${process.env.REACT_APP_HOST}/api/board/create`, formData, {
        headers: {
          'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  const closeModal = (e) => {
    e.stopPropagation();
    props.changeOpenPostModal(false);
  };
  return (
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
                        src="/assets/addPicture.png"
                        style={{ cursor: 'pointer', marginLeft: '10px' }}
                        alt=""
                      />
                      <input
                        style={{ display: 'none' }}
                        id="selectImg"
                        name="imgUpload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          setFileImage(
                            URL.createObjectURL(e.target.files[0]),
                          );
                          // eslint-disable-next-line no-plusplus
                          for (let i = 0; i < e.target.files.length; i++) setFile(`${file} ${e.target.files[i].name}`);
                          setImageName([...imageName, ...e.target.files]);
                        }}
                      />
                    </label>
                    {/* <img    // 업로드된 사진 삭제 이미지버튼
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
                <button
                  type="submit"
                  className="submit-btn"
                // onClick={closeModal}
                >
                  게시물 등록
                </button>
              </div>
            </section>
            <button
              type="button"
              className="newPost-modal-close"
              onClick={closeModal}
              alt="newPostModal"
            ><CloseButtonIcon />
            </button>
          </section>
        </section>
      </form>
    </div>
  );
}

export default writePage;
