// 글로벌 속성 파일
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    /* 스타일 reset */
    ${reset};
    
    * {
        box-sizing: border-box;
        letter-spacing: -0.4px;
        text-decoration: none;
        color:#131313;
    }
    
    body {
        line-height: 1.25;
        font-family: 'Pretendard',sans-serif;
    }
    button {
        cursor: pointer;
        margin:0;
        padding:0;
    }
    input {margin:0;}

    /* 폰트 적용 */
    @font-face {
        font-family: 'Pretendard';
        font-weight: 900;
        font-display: swap;
        src: url(/assets/fonts/pretendard/Pretendard-Black.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 800;
        font-display: swap;
        src: url(/assets/fonts/pretendard/Pretendard-ExtraBold.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-display: swap;
        src: url(/assets/fonts/pretendard/Pretendard-Bold.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 600;
        font-display: swap;
        src:  url(/assets/fonts/pretendard/Pretendard-SemiBold.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-display: swap;
        src: url(/assets/fonts/pretendard/Pretendard-Medium.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/pretendard/Pretendard-Regular.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 300;
        font-display: swap;
        src: url(/assets/fonts/pretendard/Pretendard-Light.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 200;
        font-display: swap;
        src: url(/assets/fonts/pretendard/Pretendard-ExtraLight.woff2) format('woff2');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 100;
        font-display: swap;
        src: url(/assets/fonts/pretendard/Pretendard-Thin.woff2) format('woff2');
    }


`

export default GlobalStyle;
