import React from 'react';
import S from "./style";
import {useState,useEffect} from 'react'

const BasicTextarea = ({id,labelTxt,rows,placeholder,maxLength = 100,value,onChange,CountWrap=false}) => {

    const [counterLength, setCounterLength] = useState(0);

    useEffect(() => {
        setCounterLength(value?.length ?? 0);
    }, [value]);

    const handleOnchange = (e) => {
        const str = e.target.value;
        // maxLength를 넘지 않을 때만 부모에게 전달
        if (str.length <= maxLength) {
            setCounterLength(str.length);
            onChange?.(str);
        }
    };

    return (
        <S.TextareaWrap>
            {labelTxt && (
                <S.LabelWrap>
                    <label htmlFor={id}>{labelTxt}</label>
                </S.LabelWrap>
            )}
            <textarea
                rows={rows}
                maxLength={maxLength}
                id={id}
                value={value ?? ''}
                placeholder={placeholder}
                onChange={handleOnchange}
            />
            {CountWrap && (
                <S.HelperWrap>
                    <S.CountWrap>
                        <S.CounterLabel>{counterLength}</S.CounterLabel>
                        <S.CounterLine>{`/`}</S.CounterLine>
                        <S.CounterLabel>{maxLength}</S.CounterLabel>
                    </S.CountWrap>
                </S.HelperWrap>
            )}
        </S.TextareaWrap>
    );
};

export default BasicTextarea;