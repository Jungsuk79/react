import React from 'react';
import S from './style';

const BasicRadio = ({id,name,checked,onChange,disabled,labelTxt,defaultChecked}) => {
    return (
        <S.RadioWrap>
            <input
                type="radio"
                id={id}
                name={name}
                defaultChecked={defaultChecked}
                onChange={onChange}
                disabled={disabled}
            />
            {labelTxt && (
                <label htmlFor={id}>{labelTxt}</label>
            )}
        </S.RadioWrap>
    );
};

export default BasicRadio;