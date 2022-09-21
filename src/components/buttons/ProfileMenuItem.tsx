import styled from 'styled-components';
import { TextObj } from 'components/myInfo/MyInfo';

interface Props extends TextObj {
    setTextArr: Function;
}

function ProfileMenuItem({ id, data, active, setTextArr }: Props) {
    function handleClick() {
        if (active === undefined)
            setTextArr((prevState: []) =>
                prevState.map((item: TextObj) => {
                    if (item.active) return { ...item, active: undefined };
                    else if (item.id === id) return { ...item, active: true }
                    else return { ...item, active: undefined }
                }
                )
            )
    }
    return (
        <StyledButton active={active} onClick={handleClick}>
            {data}
        </StyledButton>
    )
}

export default ProfileMenuItem;
const StyledButton = styled.button < { active: boolean | undefined }> `
    display: block;
    padding: 0;
    font-family: Pretendard, sans-serif;
    font-size: 15px;
    font-weight: ${props => props.active ? 600 : 400};
    line-height: 18px;
    color: #3E3E3E;
    border-bottom: ${props => props.active ? '2px solid black' : 'none'}
`