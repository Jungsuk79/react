import React from 'react';
import S from './style'; // 체크박스 전용 스타일이 필요할 수 있습니다.

const BasicCheckbox = ({ id, labelTxt, checked,defaultChecked, onChange, disabled }) => {
    return (
        <>
            <S.CheckboxWrap>
                <input
                    type="checkbox"
                    id={id}
                    defaultChecked={defaultChecked}
                    onChange={onChange}
                    disabled={disabled}
                />
                {labelTxt && (
                    <label htmlFor={id}>{labelTxt}</label>
                )}
            </S.CheckboxWrap>
        </>
    );
};

export default BasicCheckbox;