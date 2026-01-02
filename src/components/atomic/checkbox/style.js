import styled from 'styled-components'

const S={}

S.CheckboxWrap = styled.div`
    display: inline-flex;
    align-items: center;
    & input {
        appearance: none;
        outline: none;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color:#fff;
        border:1px solid ${({theme}) => theme.PALETTE.gray['900']};
        border-radius:3px;
        margin:5px;
        &:checked {
            position: relative;
            background: url(${process.env.PUBLIC_URL + '/icCheckArrow.png'}) center no-repeat;;
            background-size: 16px auto;
        }
        &:disabled {
            background-image: none;
            background-color: ${({theme}) => theme.PALETTE.gray['201']};
            border:1px solid ${({theme}) => theme.PALETTE.gray['900']};
            border-radius:3px;
        }
    }
    & label {
        color: #333;
        font-size: 14px;
        padding-right:10px;
    }
`

export default S;