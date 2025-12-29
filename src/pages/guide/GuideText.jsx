import React from 'react';
import S from './style';
import { fontStyle, fontSizeWeight, pointColor } from "./mocks/guide.mock";

const GuideText = () => {

    const fontStyleList = fontStyle.map((data,i)=>(
        <dl key={i}>
            <dt>{data.title}</dt>
            <dd style={{fontWeight:data.fontWeight}}>{data.text}</dd>
        </dl>
    ));

    const fontSizeWeightList = fontSizeWeight.map((data,i)=>(
        <S.GuideFontBox key={i}>
            <S.Left>
                <S.LeftTitle>{data.title}</S.LeftTitle>
                <S.LeftText>{data.size},{data.weightTxt}</S.LeftText>
            </S.Left>
            <S.Right style={{fontSize:data.size,fontWeight:data.fontWeight}}>
                {data.title}
            </S.Right>
        </S.GuideFontBox>
    ));

    const pointColorList = pointColor.map((data,i)=>(
        <S.GuideFontBox key={i}>
            <S.ColorTextBox>
                <p style={{color:data.color}}>{data.title}</p>
                <S.ColorTextInfo>
                    <dl>
                        <dt>Name</dt>
                        <dd>{data.name}</dd>
                    </dl>
                    <dl>
                        <dt>Hex</dt>
                        <dd>{data.color}</dd>
                    </dl>
                    <dl>
                        <dt>Rgb</dt>
                        <dd>{data.rgbColor}</dd>
                    </dl>
                </S.ColorTextInfo>
            </S.ColorTextBox>
            <S.ColorBox style={{backgroundColor:data.color}}></S.ColorBox>
        </S.GuideFontBox>
    ));

    return (
        <>
            <S.GuideSubTitle>FONT : PRETENDARD</S.GuideSubTitle>
            <S.GuideFlexBox>
                {fontStyleList}
            </S.GuideFlexBox>
            <S.GuideSubTitle>Usage : 폰트 크기 및 자족</S.GuideSubTitle>
            <S.GuideBox>
                {fontSizeWeightList}
            </S.GuideBox>
            <S.GuideSubTitle>Text Colors : 텍스트 포인트 컬러</S.GuideSubTitle>
            <S.GuideFlexBox>
                {pointColorList}
            </S.GuideFlexBox>
        </>
    );
};

export default GuideText;