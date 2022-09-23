import ProfileModifyForm from './profileModifyForm';
import './accountManage.scss';
import AccountModifyForm from './AccountModifyForm';
import { useLocation } from 'react-router-dom';

function MyInfoForm() {
  const location = useLocation();

  const handlePage = () => {
    if (location.pathname === '/profileModify') return <ProfileModifyForm />;
    else if (location.pathname === '/findAccount') return <AccountModifyForm />;
  };

  return <div>{handlePage()}</div>;
}

export default MyInfoForm;
