import WriterInfo from './writerInfo';

import Comments from 'components/comments';
import postData from 'mocks/postData';

function ModalContent(props) {
  const { currentPostData, setModalOpacity } =
    props;
  const { title, content } = currentPostData;
  function contentGenerator(data) {
    if (data) return data;

    return postData.map((item) => (
      <div key={item.id}>item.content</div>
    ));
  }

  return (
    <div className="modal-content-container">
      <WriterInfo
        setModalOpacity={setModalOpacity}
      />
      <div className="modal-post-content">
        <h1 className="title-in-modal">
          {title}
        </h1>
        <div className="text-in-modal">
          {contentGenerator(content)}
        </div>
        {/* <div className="text-in-modal">{currentPostData.content}</div> */}
      </div>
      <Comments />
    </div>
  );
}

export default ModalContent;
