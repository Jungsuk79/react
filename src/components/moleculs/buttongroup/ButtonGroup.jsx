import React from 'react';
import S from './style'


const ButtonGroup = ({children, gap, align, direction, fullWidth}) => {
    return (
        <S.BtnGoup gap={gap} align={align} direction={direction} $fullWidth={fullWidth}>
            {children}
        </S.BtnGoup>
    );
};

export default ButtonGroup;