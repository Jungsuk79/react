import styled from 'styled-components'

const S={}

S.SwitchWrap = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    & + div {margin-left:10px;}
`

S.SwitchBox = styled.div`
    position: relative;
    width: 50px;
    height: 26px;
    background-color: ${props => props.$checked
            ? props.theme.PALETTE.primary["main"]
            : props.theme.PALETTE.gray[201]};
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
`


S.SwitchBall = styled.div`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 22px;
    height: 22px;
    background-color: ${props => (props.$disabled ? props.theme.PALETTE.gray[900] : '#fff')};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: ${props => props.$checked ? 'translateX(24px)' : 'translateX(0)'};
    cursor: ${props => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

S.SwitchLabel = styled.div`
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    color: ${({ theme }) => theme.PALETTE.gray[800]};
`

export default S;