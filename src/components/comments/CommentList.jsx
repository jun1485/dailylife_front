import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';

function CommentList() {
  const { replyList } = useSelector((state) => state.comment);
  const [tempList, setTempList] = useState([...replyList]);
  useEffect(() => {
    setTempList([...replyList]);
  }, [replyList]);
  return (
    <div>
      {tempList.map((item, index) => (
        <Comment
          key={item.replyNum}
          index={index}
          item={item}
          tempList={tempList}
          setTempList={setTempList}
        />
      ))}
    </div>
  );
}

export default memo(CommentList);
