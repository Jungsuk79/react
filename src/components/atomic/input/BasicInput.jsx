import React from 'react';
import S from './style';

const BasicInput = ({type="text",placeholder,id,labelTxt,radius,direction,fontSize,padding,disabled,descpition,success,error,successTxt,errorTxt}) => {
    return (
        <S.BasicInputWrap
            className={descpition || successTxt || errorTxt ? 'under-txt-type' : ''}
            $success={success} $successTxt={successTxt} $error={error} $errorTxt={errorTxt} $radius={radius} $direction={direction} $padding={padding} $fontSize={fontSize}>
            {labelTxt && (
                <label htmlFor={id}>{labelTxt}</label>
            )}
            <input type={type} id={id} placeholder={placeholder} disabled={disabled} />
            {descpition && (
                <div className="under-txt">{descpition}</div>
            )}
            {successTxt && (
                <div className="under-txt success">{successTxt}</div>
            )}
            {errorTxt && (
                <div className="under-txt error">{errorTxt}</div>
            )}
        </S.BasicInputWrap>
    );
};

export default BasicInput;