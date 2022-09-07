import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { myInfoActions } from 'reducers/myInfo';

function useSetToken() {
  const dispatch = useDispatch();
  const userData = useSelector(
    (state) => state.myInfo,
  );
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      axios
        .post(
          `${process.env.REACT_APP_HOST}/api/users/details/${userData.userNum}`,
          null,
          {
            headers: {
              'X-ACCESS-TOKEN':
                localStorage.getItem(
                  'accessToken',
                ),
            },
          },
        )
        .then((res) => dispatch(
          myInfoActions.updateUserInfo(
            res.data.data,
          ),
        ))
        .catch((err) => console.log(err));
    }
  }, []);
  return userData;
}
export default useSetToken;
