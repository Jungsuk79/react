import styled from 'styled-components'

const S={}

S.DropdownWrap = styled.div`
    display: inline-block;
    position: relative;
    width: 200px;
    cursor: pointer;
    & + div {
        margin-left:10px;
    }
`;

S.DropdownHeader = styled.div`
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.$disabled ? props.theme.PALETTE.gray[101] : '#fff'};
    border-color: ${props => props.$isOpen ? props.theme.PALETTE.primary["main"] : props.theme.PALETTE.gray[900]};
`;

S.DropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 4px;
    padding: 0;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.PALETTE.gray[900]};
    border-radius: 4px;
    z-index: 10;
    list-style: none;
    overflow: hidden;
`;

S.DropdownItem = styled.li`
    padding: 10px 15px;
    &:hover {
        background-color: ${({ theme }) => theme.PALETTE.gray[101]};
        color: ${({ theme }) => theme.PALETTE.primary["main"]};
    }
`;

S.ArrowIcon = styled.span`
    font-size: 10px;
    transition: transform 0.2s;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

export default S;