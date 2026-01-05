import styled from 'styled-components';

const S = {};

S.PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 20px 0;
`;

S.PageNum = styled.button`
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
    border: 1px solid #ddd;
    background: #fff;
    font-size: 13px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
        background: #f0f0f0;
    }

    &.active {
        background:${({theme}) => theme.PALETTE.primary["main"]};
        color: #fff;
        border-color:${({theme}) => theme.PALETTE.primary["main"]};
    }
`;

S.PageArrow = styled(S.PageNum)`
    font-weight: bold;
    color: #999;
    
    &:disabled {
        cursor: default;
        opacity: 0.5;
        background: #f5f5f5;
    }
`;

export default S;