import useSetToken from '../../../hooks/useSetToken';

function MyInfoForm() {
  const userData = useSetToken();
  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      {userData.userInfo.userName}님의 회원 정보 페이지입니다.
      <div className="profile-container">
        <div className="user-email">
          userEmail: {userData.userInfo.userEmail}
        </div>
        <div className="user-id">userId: {userData.userInfo.userId}</div>
      </div>
    </div>
  );
}

export default MyInfoForm;
