import styled from 'styled-components'

const S={}

// 상태에 따른 색상을 반환하는 헬퍼 함수
const getStatusColor = (props) => {
    if (props.$error) return '#ff4d4f';   // 에러: 빨간색
    if (props.$success) return '#52c41a'; // 성공: 초록색
    return '#999';                        // 기본: 검정색
};

S.BasicInputWrap = styled.div`
    display:inline-block;
    vertical-align: top;
    & .under-txt {
        font-size:12px;
        color:#999;
        margin-top:5px;
        &.success {
            color: ${({theme})=>theme.PALETTE.primary["main"]};
        }
        &.error {
             color: ${({theme})=>theme.PALETTE.error};
        }
    }
`

S.BasicInputArea = styled.div`
    display:inline-flex;
    vertical-align: middle;
    align-items: center;
    gap:5px;
    flex-direction: ${({ $direction }) => $direction === 'reverse' ? 'row-reverse' : 'row'};
    & label {
        font-size: ${({ $fontSize }) => ($fontSize !== undefined ? `${$fontSize}px` : `14px`)};
    }
    & input {
        outline: none;
        border: 1px solid ${(props) => getStatusColor(props)};
        padding: ${({ $padding }) => $padding || '8px 12px'};
        font-size: ${({ $fontSize }) => ($fontSize !== undefined ? `${$fontSize}px` : `14px`)};
        border-radius: ${({ $radius }) => ($radius !== undefined ? `${$radius}px` : 0)};

        &:focus {
            border-color: ${(props) => getStatusColor(props)};
        }
        &:disabled {
            background-color: ${({theme})=>theme.PALETTE.gray[101]};
        }
        &::placeholder {
            color: #ccc;
            font-size: ${({ $fontSize }) => ($fontSize !== undefined ? `${$fontSize}px` : `14px`)};
        }
    }
`

export default S;