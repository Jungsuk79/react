import styled from "styled-components";
import { flexColumn } from "../../styles/common";

const S = {};

S.Wrapper = styled.div`
    ${flexColumn}
    height:100vh;
`;
S.Header = styled.div`
    width:100dvw;
    height:60px;
    padding:0 18px;
    border-bottom:1px solid #333;
`;
S.MainContent = styled.div`
    overflow-y:auto;
    flex:1;
    padding:0 18px;
`;
S.Footer = styled.div`
    width:100dvw;
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 18px;
    border-top:1px solid #333;
    & path {
        color:#999;
    }
    & .active path {
        color:#111;
    }
`;

export default S;
