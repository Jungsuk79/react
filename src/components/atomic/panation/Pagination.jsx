import React from 'react';
import S from './style';

const Pagination = () => {
    return (
        <S.PaginationWrap>
            <S.PageArrow disabled>&lt;</S.PageArrow>
            <S.PageNum className="active">1</S.PageNum>
            <S.PageNum>2</S.PageNum>
            <S.PageNum>3</S.PageNum>
            <S.PageNum>4</S.PageNum>
            <S.PageNum>5</S.PageNum>
            <S.PageArrow>&gt;</S.PageArrow>
        </S.PaginationWrap>
    );
};

export default Pagination;