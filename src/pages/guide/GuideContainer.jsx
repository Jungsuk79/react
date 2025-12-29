import React from 'react';
import GuideText from "./GuideText";
import S from './style';
import GuideColor from "./GuideColor";

const GuideContainer = () => {
    return (
        <S.GuideWrapper>
            <S.GuideTitle>스타일 가이드 페이지</S.GuideTitle>
            <GuideText />
            {/*<GuideColor />*/}
        </S.GuideWrapper>
    );
};

export default GuideContainer;