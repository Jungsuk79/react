import styled from "styled-components";

const S = {}

S.BtnGoup = styled.div`
    display: flex;
    gap: ${({ gap }) => gap || 6}px;
    width: 100%;
    justify-content: ${({ align }) => align || 'center'};
    flex-direction: ${({ direction }) => direction || 'row'};

    & > button, & > a {
        flex: ${({ $fullWidth }) => ($fullWidth ? 1 : 'initial')};
    }
    transform: translateZ(0);
    + div {
        margin-top:10px;
    }
`

export default S;