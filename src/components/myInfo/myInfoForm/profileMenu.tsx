import ProfileMenuItem from 'components/buttons/ProfileMenuItem';
import { TextObj } from './profileModifyForm';

function ProfileMenu({ textArr, setTextArr }) {
  return (
    <div className="profile-manage-tap-container">
      {textArr.map((item) => {
        return (
          <ProfileMenuItem key={item.id} {...item} setTextArr={setTextArr} />
        );
      })}
    </div>
  );
}

export default ProfileMenu;
