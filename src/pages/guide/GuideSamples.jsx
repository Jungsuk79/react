import React, {useState} from 'react';
import S from './style';
import Button from "../../components/atomic/button/style";
import ButtonGroup from "../../components/moleculs/buttongroup/ButtonGroup";
import BottomSheet from "../../components/moleculs/bottomsheet/BottomSheet";

const GuideSamples = () => {
    // bottomSheet
    const [activeSheet, setActiveSheet] = useState(null);
    const openSheet = (name) => setActiveSheet(name);
    const closeAllSheets = () => setActiveSheet(null);

    return (
        <S.GuideWrapper>
            <S.GuideTitle>SAMPLE</S.GuideTitle>
            <S.GuideSubTitle>Alert</S.GuideSubTitle>
            <S.GuideBox>
                11
            </S.GuideBox>
            <S.GuideSubTitle>BottomSheet</S.GuideSubTitle>
            <S.GuideBox>
                <Button onClick={() => openSheet("service")}>서비스 안내</Button>
                <Button onClick={() => openSheet("login")}>로그인 필요</Button>
                <BottomSheet
                    title="서비스 안내"
                    isOpen={activeSheet === "service"}
                    onClose={closeAllSheets}
                >
                    <div>
                        서비스 안내 컨텐츠<br />
                        서비스 안내 컨텐츠
                    </div>
                </BottomSheet>
                <BottomSheet
                    title="로그인 안내"
                    radius={"10px 10px 0 0"}
                    isOpen={activeSheet === "login"}
                    onClose={closeAllSheets}
                >
                    <div>
                        로그인 안내 컨텐츠<br />
                        로그인 안내 컨텐츠
                    </div>
                </BottomSheet>
            </S.GuideBox>
        </S.GuideWrapper>
    );
};

export default GuideSamples;