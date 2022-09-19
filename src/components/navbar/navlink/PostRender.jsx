import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

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
      .get(`${process.env.REACT_APP_HOST}/api/board/getBoard`, {
        headers: {
          'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(postActions.updateItems(res.data));
      })
      .catch((res) => {
        console.log(res);
      });
  }, [openPostModal]);

  return (
    <button
      className="link link3"
      type="button"
      onClick={() => {
        setOpenPostModal(true);
      }}
    >
      {openPostModal && <NewUserPost changeOpenPostModal={changeOpenPostModal} />}
    </button>
  );
}

export default PostRender;
