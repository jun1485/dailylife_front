import ProfileMenuItem from 'components/buttons/ProfileMenuItem';

function ProfileMenu({ textArr, setTextArr }) {
  return (
    <div className="profile-menu">
      {textArr.map((item) => {
        return (
          <ProfileMenuItem key={item.id} {...item} setTextArr={setTextArr} />
        );
      })}
    </div>
  );
}

export default ProfileMenu;
