import axios from 'axios';
import MyInfoButton from 'components/buttons/MyInfoButton';
import ProfileMenuItem from 'components/buttons/ProfileMenuItem';
import AvatarIcon from 'components/Icons/AvatarIcon';
import { FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../myinfo.scss';
import MyInfoInput from './MyInfoInput';
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
  const [inputName, setInputName] = useState();
  const [inputId, setInputId] = useState();

  const [imageName, setImageName] = useState<string[]>([]);
  const [file, setFile] = useState('');
  const [fileImage, setFileImage] = useState<string>('');

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
      data: '계정 찾기',
      path: '/findAccount',
      description: '회원님의 비밀번호 변경 및 계정 유형을 변경할 수 있습니다.',
    },
  ]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_HOST}/${'api/users/modifyUser'}`,
        {
          userName: inputName,
          userPassword: inputId,
          userProfileImg: fileImage,
        },
        {
          headers: {
            'X-ACCESS-TOKEN': localStorage.getItem('accessToken')!,
          },
        },
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div className="profile-info-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-manage-tap-container">
          {textArr.map((item) => (
            <ProfileMenuItem key={item.id} {...item} setTextArr={setTextArr} />
          ))}
        </div>
        <div className="profile-modify-container">
          <div className="profile-introduce-container">
            <MyInfoTitle path={location.pathname} textArr={textArr} />
            <div className="profile-pic-container">
              <div className="profile-pic-title">프로필 사진</div>
              <div className="profile-pic-avatar">
                <AvatarIcon width={70} height={70} image={fileImage} />
                <label htmlFor="selectImg">
                  <div className="profile-pic-change-button">이미지 등록</div>
                </label>
                <input
                  style={{ display: 'none' }}
                  // className="custom-file-input"
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
            </div>
            <div className="profile-modify-input-container">
              <div className="profile-input-wrapper">
                <div className="row">
                  <p className="profile-modify-input">프로필 이름</p>
                  <MyInfoInput setState={setInputName} />
                </div>
                <div className="row">
                  <p className="profile-modify-input">프로필 아이디</p>
                  <MyInfoInput setState={setInputId} />
                </div>
              </div>
            </div>
            <div className="profile-form-submit-button-wrapper">
              <MyInfoButton
                text={'수정 완료'}
                isActive={false}
                requestPath={'api/users/modifyUser'}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyInfoForm;
