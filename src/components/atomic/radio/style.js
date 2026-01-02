import styled from 'styled-components'

const S={}

S.RadioWrap = styled.div`
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
        border-radius:50%;
        margin:5px;
        &:checked {
            position: relative;
            background: url(${process.env.PUBLIC_URL + '/icRadioOn.png'}) center no-repeat;;
            background-size: 10px auto;
        }
        &:disabled {
            background-image: none;
            background-color: ${({theme}) => theme.PALETTE.gray['201']};
            border:1px solid ${({theme}) => theme.PALETTE.gray['900']};
            border-radius:50%;
        }
    }
    & label {
        color: #333;
        font-size: 14px;
        margin-right:10px;
    }
`

export default S;