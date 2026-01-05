import React from 'react';
import S from './style';

const Tag = ({ children, type="gray", size = "medium" }) => {
    return (
        <S.Tag $type={type} $size={size}>
            {children}
        </S.Tag>
    );
};

export default Tag;