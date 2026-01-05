import React from 'react';
import S from './style';

const BasicModal = ({ isOpen, onClose, title, children,alignRight=false }) => {
    if (!isOpen) return null;

    return (
        <S.Overlay onClick={onClose}>
            {/* stopPropagation으로 본체 클릭 시 닫힘 방지 */}
            <S.ModalContainer onClick={(e) => e.stopPropagation()}>
                <S.ModalHeader>
                    {title && <h3>{title}</h3>}
                    <button onClick={onClose}>&times;</button>
                </S.ModalHeader>
                <S.ModalContent>
                    {children}
                </S.ModalContent>
                <S.ModalFooter alignRight={alignRight}>
                    <button onClick={onClose}>확인</button>
                </S.ModalFooter>
            </S.ModalContainer>
        </S.Overlay>
    );
};

export default BasicModal;