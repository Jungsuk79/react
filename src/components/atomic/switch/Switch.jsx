import React, { useState } from 'react';
import S from './style';

const BasicSwitch = ({ id, label, defaultChecked = false, onChange,disabled=false }) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const handleToggle = () => {
        if (disabled) return;
        const nextState = !isChecked;
        setIsChecked(nextState);
        onChange?.(nextState);
    };

    return (
        <S.SwitchWrap>
            <S.SwitchBox $disabled={disabled} $checked={isChecked} onClick={handleToggle}>
                <S.SwitchBall $checked={isChecked} $disabled={disabled} />
            </S.SwitchBox>
            {label && (
                <S.SwitchLabel htmlFor={id} onClick={handleToggle}>
                    {label}
                </S.SwitchLabel>
            )}
        </S.SwitchWrap>
    );
};

export default BasicSwitch;