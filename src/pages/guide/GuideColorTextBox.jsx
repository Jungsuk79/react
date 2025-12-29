import React from 'react';
import S from "./style";

const GuideColorTextBox = ({data}) => {
    return (
        <>
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
        </>
    );
};

export default GuideColorTextBox;