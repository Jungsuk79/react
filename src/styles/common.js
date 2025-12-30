// 공통 관련 파일
import {css} from 'styled-components';

export const flexColumn = css`
    display : flex;
    flex-direction: column;
`

export const flexRow = css`
    display : flex;
    flex-direction: row;
`

export const flexCenterColumn = css`
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const flexCenterRow = css`
    display : flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const flexCenter = css`
    display : flex;
    justify-content: center;
    align-items: center;
`

// 공통 속성 정리
export const h1Bold = css`
    font-size:${({theme})=>theme.FONT_SIZE["h1"]};
    line-height: ${({theme})=>theme.FONT_LINE["h1"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["black"]};
`

export const h2Bold = css`
    font-size:${({theme})=>theme.FONT_SIZE["h2"]};
    line-height: ${({theme})=>theme.FONT_LINE["h2"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
`
export const h3Bold = css`
    font-size:${({theme})=>theme.FONT_SIZE["h3"]};
    line-height: ${({theme})=>theme.FONT_LINE["h3"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
`
export const h4Bold = css`
    font-size:${({theme})=>theme.FONT_SIZE["h4"]}; 
    line-height: ${({theme})=>theme.FONT_LINE["h4"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["bold"]};
`

export const pageTitle = css`
    font-size:${({theme})=>theme.FONT_SIZE["h5"]};
    line-height: ${({theme})=>theme.FONT_LINE["h5"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["semiBold"]};
`

export const pageSubTitle = css`
    font-size:${({theme})=>theme.FONT_SIZE["h6"]};
    line-height: ${({theme})=>theme.FONT_LINE["h6"]};
    font-weight: ${({theme})=>theme.FONT_WEIGHT["semiBold"]};
`

export const text = css`
    font-size:${({theme})=>theme.FONT_SIZE["h7"]};
    line-height: ${({theme})=>theme.FONT_LINE["h7"]};
`

export const smallText = css`
    font-size:${({theme})=>theme.FONT_SIZE["h8"]};
    line-height: ${({theme})=>theme.FONT_LINE["h8"]};
`

export const tynyText = css`
    font-size:${({theme})=>theme.FONT_SIZE["h9"]};
    line-height: ${({theme})=>theme.FONT_LINE["h9"]};
`