import { Background, LoadingText } from "./Background";

export function LoadingSpinner() {
    return (
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <img src="/assets/spinner.gif" alt="로딩중" />
        </Background>
    );
};
