import React, {useEffect} from 'react';
import S from './style';
import Button from "../../atomic/button/style";
import ButtonGroup from "../buttongroup/ButtonGroup";

const BottomSheet = ({isOpen,title,onClose,children,radius,bottomBtn=true}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // isOpen이 false로 변하면 다시 스크롤을 살려줍니다.
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    if (!isOpen) return null;
    return (
        <S.Overlay onClick={onClose}>
            {/* e.stopPropagation()은 시트 내부 클릭 시 닫히는 것을 방지합니다. */}
            <S.SheetContainer onClick={(e) => e.stopPropagation()} $radius={radius}>
                <S.SheetHeader>
                    <S.HandleBar />
                    {title && <S.SheetTitle>{title}</S.SheetTitle>}
                    <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
                </S.SheetHeader>
                <S.SheetContent>
                    {children}
                </S.SheetContent>
                {bottomBtn &&(
                    <ButtonGroup marginTop={20}>
                        <Button onClick={onClose}>닫기</Button>
                        <Button variant={"black"}>확인</Button>
                    </ButtonGroup>
                )}
            </S.SheetContainer>
        </S.Overlay>
    );
};

export default BottomSheet;