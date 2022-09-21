import ProfileMenuItem from 'components/buttons/ProfileMenuItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../myinfo.scss';

export interface TextObj {
  id: number;
  data: string;
  active?: boolean;
  path: string;
}

function MyInfoForm() {
  const [textArr, setTextArr] = useState < TextObj[] > ([
    {
      id: 1,
      data: '프로필 편집',
      active: true,
      path: '/profileModify'
    },
    {
      id: 2,
      data: '계정 찾기',
      path: '/findAccount'
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
          <div className='profile-introduce-'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInfoForm;
