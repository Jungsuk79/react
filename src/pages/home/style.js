import styled from "styled-components";
import { fadeIn } from "../../keyframes/keyframes";
import { media } from "../../styles/breakpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const S={};

S.Title = styled.p`
    font-size:30px;
    animation: ${fadeIn} 0.2s ease-in forwards;

    @media ${media.mobile} {
        font-size:20px;
    }
`;

// 아이콘 스타일링
S.CommentIcon = styled(FontAwesomeIcon)`
    font-size: 50px;
    color:blue;
`;

export default S;