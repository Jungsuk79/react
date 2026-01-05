import styled from 'styled-components';
import {slideUp,fadeIn} from '../../../keyframes/keyframes';

const S = {};

S.Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1000;
    animation: ${fadeIn} 0.3s ease-out;
`;

S.SheetContainer = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    border-radius: ${(props) => props.$radius || '15px 15px 0 0'};
    padding: 10px 20px 20px;
    animation: ${slideUp} 0.3s ease-out;
    box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
`;

S.SheetHeader = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 20px;
`;

S.HandleBar = styled.div`
    position:absolute;
    left:50%;
    top:0px;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    background-color: #ddd;
    border-radius: 2px;
`;

S.SheetTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-top: 20px;
`;

S.CloseButton = styled.button`
    position: absolute;
    right: 0;
    top: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #999;
`;

S.SheetContent = styled.div`
    max-height: 70vh;
    overflow-y: auto;
`;

export default S;