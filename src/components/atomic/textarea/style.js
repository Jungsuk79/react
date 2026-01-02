import styled from 'styled-components'

const S={}

S.TextareaWrap = styled.div`
    & textarea {
        appearance: none;
        outline: none;
        padding: 5px 10px;
        border:1px solid #333;
        resize: none;
        width: 100%;
    }
`

S.LabelWrap = styled.div`
    margin-bottom:5px;
    & label {
        color: #333;
        font-size: 14px;
    }
`

S.HelperWrap = styled.div`
    
`
S.CountWrap = styled.span`
    
`
S.CounterLabel = styled.span`
    
`
S.CounterLine = styled.span`
    padding:0 2px;
`

export default S;