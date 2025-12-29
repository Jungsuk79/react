import React from 'react';
import GuideText from "./GuideText";
import S from './style';

const GuideContainer = () => {
    return (
        <S.GuideWrapper>
            <S.GuideTitle>스타일 가이드 페이지</S.GuideTitle>
            <GuideText />
        </S.GuideWrapper>
    );
};

export default GuideContainer;