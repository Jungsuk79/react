import React from 'react';
import S from './style'


const ButtonGroup = ({marginTop,children, gap, align, direction, fullWidth}) => {
    return (
        <S.BtnGoup $marginTop={marginTop} gap={gap} align={align} direction={direction} $fullWidth={fullWidth}>
            {children}
        </S.BtnGoup>
    );
};

export default ButtonGroup;