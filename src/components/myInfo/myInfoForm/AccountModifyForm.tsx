import { useNavigate } from 'react-router-dom';
import ProfileModifyForm from './profileModifyForm';
import { FormEvent, useState } from 'react';
import './accountManage.scss';
import MyInfoInput from './MyInfoInput';
import ProfileMenu from './profileMenu';

function AccountModifyForm() {
  const [inputCurrentPassword, setInputCurrentPassword] = useState();
  const [inputNewPassword, setInputNewPassword] = useState();
  const [inputConfirmPassword, setInputConfirmPassword] = useState();

  return (
    <div className="account-manage-container">
      <div className="account-input-wrapper">
        <ProfileMenu />
        <div className="account-manage-tap-container"></div>
        <div className="account-modify-container">
          <div className="account-modify-input-container">
            <div className="row">
              <p className="account-modify-input">현재 비밀번호</p>
              <MyInfoInput setState={setInputCurrentPassword} />
            </div>
            <div className="row">
              <p className="profile-modify-input">새 비밀번호</p>
              <MyInfoInput setState={setInputNewPassword} />
            </div>
            <div className="row">
              <p className="profile-modify-input">새 비밀번호 확인</p>
              <MyInfoInput setState={setInputConfirmPassword} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountModifyForm;
