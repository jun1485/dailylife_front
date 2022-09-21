import ProfileMenuItem from 'components/buttons/ProfileMenuItem';
import AvatarIcon from 'components/Icons/AvatarIcon';
import { useState } from 'react';
<<<<<<< Updated upstream
import { useNavigate, useLocation } from 'react-router-dom';
=======
>>>>>>> Stashed changes
import '../myinfo.scss';
import MyInfoTitle from './MyInfoTitle';

export interface TextObj {
  id: number;
  data: string;
  active?: boolean;
  path: string;
  description: string;
}

function MyInfoForm() {
  const location = useLocation();
  const [textArr, setTextArr] = useState<TextObj[]>([
    {
      id: 1,
      data: '프로필 편집',
      active: true,
      path: '/profileModify',
      description: '회원님의 프로필을 방문하는 사용자에게 표시되는 정보입니다.'
    },
    {
      id: 2,
      data: '계정 찾기',
      path: '/findAccount',
      description: '회원님의 비밀번호 변경 및 계정 유형을 변경할 수 있습니다.'
    },
  ]);
  return (
    <div className="profile-info-container">
      <div className='profile-manage-tap-container'>
        {
          textArr.map((item) => <ProfileMenuItem key={item.id} {...item} setTextArr={setTextArr} />)
        }

      </div>
      <div className='profile-modify-container'>
        <div className='profile-introduce-container'>
          <MyInfoTitle path={location.pathname} textArr={textArr} />
          <div className='profile-pic-container'>
            <div className='profile-pic-title'>프로필 사진</div>
            <div className='profile-pic-avatar'>
              <AvatarIcon width={70} height={70}/>
              <div className='asdasd'>asdasdasd</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInfoForm;
