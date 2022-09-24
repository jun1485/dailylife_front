import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import WritePageButton from 'components/Icons/WritePageButton';
import NewUserPost from 'components/navbar/navlink/writePage/WritePage';
import { postActions } from 'reducers/post';

function PostRender() {
  const dispatch = useDispatch();
  const [openPostModal, setOpenPostModal] = useState(false);

  const changeOpenPostModal = () => {
    setOpenPostModal(false);
  };

  useEffect(() => {
    if (openPostModal === true) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';

    axios
      .get(`${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin`)
      .then((res) => {
        console.log(res.data);
        dispatch(postActions.updateItems(res.data));
      })
      .catch((res) => {
        console.log(res);
      });
  }, [openPostModal]);

  return (
    <div>
      <WritePageButton setOpenPostModal={setOpenPostModal} />
      {openPostModal && (
        <NewUserPost changeOpenPostModal={changeOpenPostModal} />
      )}
    </div>
  );
}

export default PostRender;
