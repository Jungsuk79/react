import React from 'react';
import S from "./style";
import {pointColor,colorBar} from "./mocks/guide.mock";
import GiudeColorBar from "./GiudeColorBar";
import GuideColorTextBox from "./GuideColorTextBox";

const GuideColor = () => {
    const renderColorBars = (type) =>
        colorBar
        .filter(item => item.type === type)
        .map((data, i) => (
            <S.GuideColorBar key={`${type}-${i}`}>
                <GiudeColorBar data={data} />
            </S.GuideColorBar>
        ));
    return (
        <>
            <S.GuideSubTitle>Text Colors : 텍스트 포인트 컬러</S.GuideSubTitle>
            <S.GuideFlexBox>
                {pointColor.map((data, i) => (
                    <S.GuideColorBox key={`point-${i}`}>
                        <GuideColorTextBox data={data} />
                    </S.GuideColorBox>
                ))}
            </S.GuideFlexBox>
            <S.GuideSubTitle>Color : 컬러스타일</S.GuideSubTitle>

            <S.GuideBoxTitle>Brand Color</S.GuideBoxTitle>
            <S.GuideColorBarBox>{renderColorBars("brand")}</S.GuideColorBarBox>

            <S.GuideBoxTitle>Sub Color</S.GuideBoxTitle>
            <S.GuideColorBarBox>{renderColorBars("sub")}</S.GuideColorBarBox>

            <S.GuideBoxTitle>Gray Color</S.GuideBoxTitle>
            <S.GuideColorBarBox>{renderColorBars("gray")}</S.GuideColorBarBox>
        </>
    );
};

export default GuideColor;