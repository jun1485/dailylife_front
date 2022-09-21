import styled from 'styled-components';
import { TextObj } from 'components/myInfo/myInfoForm';
import { useNavigate } from 'react-router-dom';

interface Props extends TextObj {
    setTextArr: Function;
}

function ProfileMenuItem({ id, data, active, path, setTextArr }: Props) {
  const navigate = useNavigate();
    function handleClick() {
        if (active === undefined) {
            setTextArr((prevState: []) =>
                prevState.map((item: TextObj) => {
                    if (item.active) return { ...item, active: undefined };
                    else if (item.id === id) return { ...item, active: true }
                    else return { ...item, active: undefined }
                })
            )}
            navigate(path);
    }
    return (
        <StyledButton active={active} onClick={handleClick}>{data}
        </StyledButton>
    )
}

export default ProfileMenuItem;
const StyledButton = styled.button < { active: boolean | undefined }> `
    display: block;
    margin: 3vh 3vh 3vh 2vh;
    padding: 0;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: ${props => props.active ? 600 : 400};
    line-height: 18px;
    color: #3E3E3E;
    border-bottom: ${props => props.active ? '2px solid black' : 'none'}
`