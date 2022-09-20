import styled from 'styled-components';

interface Props {
    active: boolean;
    setActive: Function;
    text: string;
}

function ProfileMenuItem({ active, setActive, text }: Props) {
    return <StyledButton active={active} onClick={() => { setActive((prevState: boolean) => !prevState) }}>{text}</StyledButton>
}

export default ProfileMenuItem;
const StyledButton = styled.button < { active: boolean | undefined }> `
    padding: 0;
    font-family: Pretendard, sans-serif;
    font-size: 15px;
    font-weight: ${props => props.active ? 600 : 400};
    line-height: 18px;
    color: #3E3E3E;
    border-bottom: ${props => props.active ? '2px solid black' : 'none'}
`