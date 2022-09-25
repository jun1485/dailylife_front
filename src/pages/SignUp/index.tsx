import AvatarIcon from 'components/Icons/AvatarIcon';
import { useState } from 'react';
import styled from 'styled-components/macro';

import useForm from '../../hooks/useForm';
import './signUp.scss';

function SignUp() {
  const { handleChange, handleSubmit } = useForm({
    userId: '',
    phoneNumber: '',
    name: '',
    password: '',
    email: '',
  });
  const [imageName, setImageName] = useState<string[]>([]);
  const [file, setFile] = useState('');
  const [fileImage, setFileImage] = useState<string>('');

  return (
    <SignUpWrapper>
      <form action="/signin" method="POST" onSubmit={() => handleSubmit()}>
        <div className="register-form-wrapper">
          <p className="register-info-title">계정 생성</p>
          <div className="register-avatar-wrapper">
            <label className="register-avatar-lable" htmlFor="selectImg">
              <AvatarIcon width={78} height={78} image={fileImage} />
            </label>
            <input
              style={{ display: 'none' }}
              id="selectImg"
              name="imgUpload"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files !== null) {
                  setFileImage(URL.createObjectURL(e.target.files[0]));
                  for (let i = 0; i < e.target.files.length; i++)
                    setFile(`${file} ${e.target.files[i].name}`);
                  setImageName([...imageName]);
                }
              }}
            />
          </div>
          <div className="register-input-container">
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
          <button type="submit" className="register-form-submit-btn">
            가입하기
          </button>
        </div>
      </form>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
  position: relative;
  top: 8vh;
  width: 388px;
  height: 671px;

  background: #ffffff;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  margin: auto;
`;

export default SignUp;
