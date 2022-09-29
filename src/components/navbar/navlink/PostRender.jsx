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
