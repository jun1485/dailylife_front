import styled from "styled-components"
import { TextObj } from "components/myInfo/myInfoForm";

interface Props {
  path: string;
  textArr: TextObj[];
}

export default function MyInfoTitle({ path, textArr }: Props) {
  return <div className='myinfo-title-container'>
    {
      textArr.filter((item) => item.path === path).map((item) => {
        return <div key={item.id} className="myinfo-title-wrapper">
          <MainTitle>{item.data}</MainTitle>
          <SubTitle>{item.description}</SubTitle>
        </div>
      }
      )
    }
  </div>
}

const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #3E3E3E;
    text-align: left;
`;
const SubTitle = styled.p`
    margin-top: 0.8vh;
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    color: #6A6A6A;
`