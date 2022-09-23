import ProfileModifyForm from './profileModifyForm';
import './accountManage.scss';
import AccountModifyForm from './AccountModifyForm';
import { useLocation } from 'react-router-dom';
import ProfileMenu from './profileMenu';
import { useState } from 'react';
import MyInfoTitle from './MyInfoTitle';

export interface TextObj {
  id: number;
  data: string;
  isActive?: boolean;
  path: string;
  description: string;
}

function MyInfoForm() {
  const location = useLocation();
  const [textArr, setTextArr] = useState<TextObj[]>([
    {
      id: 1,
      data: '프로필 편집',
      isActive: true,
      path: '/profileModify',
      description: '회원님의 프로필을 방문하는 사용자에게 표시되는 정보입니다.',
    },
    {
      id: 2,
      data: '계정 관리',
      path: '/findAccount',
      description: '회원님의 비밀번호 변경 및 계정 유형을 변경할 수 있습니다.',
    },
  ]);

  const handlePage = () => {
    if (location.pathname === '/profileModify')
      return <ProfileModifyForm textArr={textArr} />;
    else if (location.pathname === '/findAccount')
      return <AccountModifyForm textArr={textArr} />;
  };
  return (
    <div className="form-container">
      <ProfileMenu textArr={textArr} setTextArr={setTextArr} />
      <div className="form-body-container">{handlePage()}</div>
    </div>
  );
}

export default MyInfoForm;
