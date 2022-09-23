import { useNavigate } from 'react-router-dom';
import ProfileModifyForm from './profileModifyForm';
import { FormEvent, useState } from 'react';
import './accountManage.scss';
import MyInfoInput from './MyInfoInput';
import ProfileMenu from './profileMenu';
import MyInfoTitle from './MyInfoTitle';
import MyInfoButton from 'components/buttons/MyInfoButton';

function AccountModifyForm({ textArr }) {
  const [inputCurrentPassword, setInputCurrentPassword] = useState();
  const [inputNewPassword, setInputNewPassword] = useState();
  const [inputConfirmPassword, setInputConfirmPassword] = useState();

  return (
    <div className="account-modify-container">
      <MyInfoTitle path={location.pathname} textArr={textArr} />
      <div className="account-password-info">
        <p className="account-password-info-title">비밀번호 변경</p>
      </div>
      <div className="account-modify-input-wrapper">
        <div className="row">
          <p className="account-modify-input">현재 비밀번호</p>
          <MyInfoInput
            type={'password'}
            state={inputCurrentPassword}
            formType={'password'}
            setState={setInputCurrentPassword}
          />
        </div>
        <div className="row">
          <p className="profile-modify-input">새 비밀번호</p>
          <MyInfoInput
            type={'password'}
            state={inputNewPassword}
            formType={'password'}
            setState={setInputNewPassword}
          />
        </div>
        <div className="row">
          <p className="profile-modify-input">새 비밀번호 확인</p>
          <MyInfoInput
            type={'password'}
            state={inputConfirmPassword}
            formType={'password'}
            setState={setInputConfirmPassword}
          />
        </div>
        <div className="profile-form-submit-button-wrapper">
          <MyInfoButton
            text={'비밀번호 변경'}
            isActive={false}
            requestPath={'api/users/modifyUser'}
          />
        </div>
      </div>
    </div>
  );
}

export default AccountModifyForm;
