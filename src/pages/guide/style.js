import styled from 'styled-components';
import {flexRow, h2Bold, pageSubTitle, pageTitle} from "../../styles/common";
import theme from "../../styles/theme";

const S = {}

S.GuideWrapper = styled.div`
    width:100%;
    max-width:1024px;
    margin:0 auto;
    padding:20px;
`

S.GuideTitle = styled.h3`
    ${h2Bold}
`

S.GuideSubTitle = styled.h4`
    ${pageTitle}
    padding-bottom:5px;
    border-bottom:1px solid ${theme.PALETTE.gray["300"]};
    margin-top:20px;
    word-break: break-all;
`

S.GuideFlexBox = styled.div`
    ${flexRow}
    flex-wrap:wrap;
    gap:10px;
    margin-top:20px;
`
S.GuideBox = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:10px;
    
`

S.GuideBoxTitle = styled.h4`
    margin-top:20px;
    margin-bottom:10px;
    font-weight: bold;
    ${pageSubTitle}
`

S.GuideFontBox = styled.div`
    ${flexRow}
    align-items:center;
`

S.GuideColorBox = styled.div`
    ${flexRow}
    align-items: center;
`

S.GuideColorBarBox = styled.div`
    ${flexRow}
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`

S.GuideColorBar = styled.div`
    min-width:230px;
    height:200px;
    border:1px solid #ddd;
    border-radius:10px;
    overflow: hidden;
`

S.ColorBar = styled.div`
    width:100%;
    height:80px;
    border-bottom:1px solid #ddd;
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
    padding:15px;
    border:1px solid #ddd;
    border-radius:15px;
    & > p {
        font-size:${theme.FONT_SIZE.h7};
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
            font-size:${theme.FONT_SIZE.h8};
            color:${theme.PALETTE.gray["900"]};
        }
        & > dd {
            font-size:${theme.FONT_SIZE.h8};
            color:${theme.PALETTE.black};
        }
    }
`

S.GuideFontLineBox = styled.div`
    min-width:235px;
    padding:10px;
    border:1px solid #ddd;
    & dt {
        font-size:${theme.FONT_SIZE.h7};
    }
    & dd {
        margin-top:5px;
        font-size:30px;
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

S.ColorBox = styled.div`
    margin:20px;
    background-color:#ddd;
    border-radius:10px;
    display:flex;
    align-items: center;
    width:48px;
    height:48px;
`

S.ColorBarInfoList = styled.div`
    padding:15px;
`
S.ColorBarInfoTitle = styled.h4`
    font-size:${theme.FONT_SIZE.h7};
    font-weight:600;
    color:${theme.PALETTE.gray["600"]};
`
S.ButtonBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:10px;
    align-items: center;
    margin-bottom:10px;
`

S.TagGuide = styled.div`
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    gap:10px;
`

export default S;