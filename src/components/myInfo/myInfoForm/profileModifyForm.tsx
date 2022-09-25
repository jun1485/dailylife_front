import axios from 'axios';
import { validate } from 'common/utils';
import MyInfoButton from 'components/buttons/SubmitButton';
import AvatarIcon from 'components/Icons/AvatarIcon';
import { FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../myinfo.scss';
import MyInfoInput from './MyInfoInput';
import MyInfoTitle from './MyInfoTitle';

function ProfileModifyForm({ textArr }) {
  const location = useLocation();
  const [inputName, setInputName] = useState('');
  const [inputId, setInputId] = useState('');

  const [imageName, setImageName] = useState<string[]>([]);
  const [file, setFile] = useState('');
  const [fileImage, setFileImage] = useState<string>('');

  function activator() {
    const firstErrorMsg = validate(inputName, 'username')['username'];
    const secondErrorMsg = validate(inputId, 'userId')['userId'];

    if (firstErrorMsg || secondErrorMsg) return false;
    else return true;
  }

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
    <form className="profile-form" onSubmit={handleSubmit}>
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
                <MyInfoInput
                  formType={'username'}
                  state={inputName}
                  setState={setInputName}
                  description={
                    '최대 12글자(공백포함)까지 이름으로 등록 가능합니다.'
                  }
                />
              </div>
              <div className="row">
                <p className="profile-modify-input">프로필 아이디</p>
                <MyInfoInput
                  formType={'userId'}
                  state={inputId}
                  setState={setInputId}
                  description={
                    '사람들에게 회원님의 계정을 찾을 수 있도록 변경해주세요. '
                  }
                />
              </div>
            </div>
          </div>
          <div className="profile-form-submit-button-wrapper">
            <MyInfoButton
              width="69px"
              height="28px"
              text={'수정 완료'}
              isActive={activator()}
              requestPath={'api/users/modifyUser'}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProfileModifyForm;
