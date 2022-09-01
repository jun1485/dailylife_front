import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { SET_TOKEN } from '../../../reducers/authToken';
import { myInfoActions } from '../../../reducers/myInfo';
import LoginBtn from './LoginBtn/index';
import LoginFind from './LoginFind/index';
import LoginInput from './LoginInput/index';

import { LoadingSpinner } from 'components/styledComponents/Loading';

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenInfo = useSelector((state) => state.authToken);
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    axios
      .post(
        `${process.env.REACT_APP_HOST}/api/users/login`,
        {
          userId,
          userPassword,
        },
        {
          headers: {
            'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
          },
        },
      )
      .then((res) => {
        setLoading(false);
        localStorage.setItem('accessToken', res.data.data.accessToken);
        console.log(res);
        dispatch(SET_TOKEN(res.data.data.accessToken));
        console.log(`token: ${JSON.stringify(tokenInfo)}`);
        dispatch(myInfoActions.updateUserNum(res.data.data.userNum));
        navigate('/');
      })
      .catch((errStatus) => {
        setLoading(false);
        console.log(errStatus); // eslint-disable-line no-console
        if (errStatus.response.status === 400) {
          alert('아이디와 비밀번호를 입력해주세요 !');
        } else if (errStatus.response.status === 500) {
          alert('아이디 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요.');
        }
      });
  }

  return (
    <FormContainer>
      <form action="/login" method="POST" onSubmit={handleSubmit}>
        {loading && <LoadingSpinner />}
        <LoginInput
          userId={userId}
          setUserId={setUserId}
          userPassword={userPassword}
          setUserPassword={setUserPassword}
        />
        <LoginBtn />
        <LoginFind />
        {/* <p className="message">
            {" "}
            Not registered? <Link to="/SignIn">Create an account</Link>
          </p> */}
      </form>
    </FormContainer>
  );
}

export default LoginForm;
const FormContainer = styled.form`
  max-width: 320px;
  margin-top: 200px;
  text-align: center;

  font-family: 'Pretendard';
  font-style: normal;
  line-height: 19px;
`;
