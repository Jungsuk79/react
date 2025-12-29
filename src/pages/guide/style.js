import styled from 'styled-components';
import {flexRow, pageSubTitle, pageTitle} from "../../styles/common";
import theme from "../../styles/theme";
import {media} from "../../styles/breakpoint";

const S = {}

S.GuideWrapper = styled.div`
    width:100%;
    max-width:1024px;
    margin:0 auto;
    padding:20px;
`

S.GuideTitle = styled.h3`
    ${pageTitle}
`

S.GuideSubTitle = styled.h4`
    ${pageSubTitle}
    padding-bottom:5px;
    border-bottom:1px solid ${theme.PALETTE.gray["300"]};
    margin-top:20px;
`

S.GuideFlexBox = styled.div`
    ${flexRow}
    flex-wrap: wrap;
    gap:10px;
    margin-top:10px;
    & > dl {
        width:calc(100%/4 - 8px);
        padding:10px;
        border:1px solid #ddd;
        @media ${media.tablet} {
            width:calc(100%/3 - 7px);
        }
        @media ${media.mobile} {
            width:calc(100%/2 - 8px);
        }
        & dt {
            font-size:${theme.FONT_SIZE.h7};
        }
        & dd {
            margin-top:5px;
            font-size:${theme.FONT_SIZE.h4};
        }
    }
`
S.GuideBox = styled.div`
    margin-top:10px;
    & > div {
        margin-top:20px;
    }
    & > div:first-child {
        margin-top:0px;
    }
`

S.GuideFontBox = styled.div`
    ${flexRow}
    align-items: center;
`

S.Left = styled.div`
    width:100px;
    flex-shrink: 0;
`
S.Right = styled.div`
    font-size:${theme.FONT_SIZE.h1};
    padding-right:30px;
`
S.LeftTitle = styled.h4`
    font-size:${theme.FONT_SIZE.h7};
`
S.LeftText = styled.p`
    font-size:${theme.FONT_SIZE.h7};
    color:${theme.PALETTE.gray["900"]};
    margin-top:3px;
`

S.ColorTextBox = styled.div`
    width:150px;
    height:120px;
    padding:15px;
    border:1px solid #ddd;
    border-radius:15px;
    & > p {
        font-size:${theme.FONT_SIZE.h6};
        font-weight:bold;
    }
`

S.ColorTextInfo = styled.div`
    margin-top:10px;
    & dl {
        display:flex;
        align-items: center;
        margin-top:5px;
        gap:20px;
        &:first-child {
            margin-top:0px;
        }
        & > dt {
            flex-shrink:0;
            width:30px;
            font-size:12px;
            color:${theme.PALETTE.gray["900"]};
        }
        & > dd {
            font-size:${theme.FONT_SIZE.h7};
            color:${theme.PALETTE.black};
        }
    }
`

S.ColorBox = styled.div`
    margin:20px;
    background-color:#ddd;
    border-radius:10px;
    display:flex;
    align-items: center;
    width:80px;
    height:80px;
`

export default S;