import { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import './writePage.scss';

function writePage(props) {
  const tokenInfo = useSelector((state) => state.authToken);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbNail, setThumbNail] = useState('st');
  const [imageName, setImageName] = useState([]);
  const [file, setFile] = useState('');

  function handleSubmit(e) {
    //     e.preventDefault();
    //     if (localStorage.getItem("accessToken") === null)
    //       return alert("로그인 후 이용 가능합니다.");
    //     const formData = new FormData();
    //     formData.append("title", title);
    //     formData.append("content", content);
    //     formData.append("thumbNail", thumbNail);
    //     imageName.forEach((file) => {
    //       console.log(file);
    //       formData.append("imageName", file);
    //     });
    //     const accessToken = localStorage.getItem("accessToken");
    //     axios
    //       .post(`${process.env.REACT_APP_HOST}/api/board/create`, formData, {
    //         headers: {
    //           "X-ACCESS-TOKEN": localStorage.getItem("accessToken"),
    //           "Content-Type": "multipart/form-data",
    //         },
    //       })
    //       .then((res) => console.log(res))
    //       .catch((err) => console.log(err));
    //   }
    // }
    // const closeModal = (e) => {
    //   e.stopPropagation();
    //   props.changeOpenPostModal(false);
    // };
    return (
      <div className="newPost-container">
        <section className="newPost-modal">
          <section className="newPost-boarding">
            <div className="newPost-title">게시글 작성</div>
            <section className="newPost-body">
              <div className="newPost-body-pic">
                <p className="newPost-body-pic-explain">마우스로 클릭하여 이미지를 추가해주세요.</p>
                <img className="newPost-body-pic-cloudPic" src="/assets/cloud-upload.png" alt="" />
              </div>
              <input className="newPost-body-title" placeholder="제목을 입력해주세요" />
              <input className="newPost-body-content" placeholder="내용을 입력해주세요" />
            </section>
            <button
              type="button"
              className="newPost-modal-close"
              // onClick={closeModal}
              src="/assets/x.png"
              alt="newPostModal"
            />
          </section>
        </section>
      </div>
    );
  }
}

export default writePage;
