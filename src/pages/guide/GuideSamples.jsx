import React, {useState} from 'react';
import S from './style';
import Button from "../../components/atomic/button/style";
import ButtonGroup from "../../components/moleculs/buttongroup/ButtonGroup";
import BottomSheet from "../../components/moleculs/bottomsheet/BottomSheet";
import BasicModal from "../../components/moleculs/modal/BasicModal";

const GuideSamples = () => {
    // Alert
    const [activeAlert, setActiveAlert] = useState(null);
    const openAlert = (id) => setActiveAlert(id);
    const closeAlert = () => setActiveAlert(null);

    // 팝업 데이터 정의
    const alertData = {
        alert01: {
            title: "첫 번째 알림",
            content: <p>첫번째 알럿입니다<br/> 텍스트 텍스트 텍스트 텍스트</p>
        },
        alert02: {
            title: "두 번째 알림",
            content: <p>두번째 알럿입니다<br/> 텍스트 텍스트 텍스트 텍스트</p>
        }
    };

    // BottomSheet
    const [activeSheet, setActiveSheet] = useState(null);
    const openSheet = (name) => setActiveSheet(name);
    const closeAllSheets = () => setActiveSheet(null);

    return (
        <S.GuideWrapper>
            <S.GuideTitle>SAMPLE</S.GuideTitle>
            <S.GuideSubTitle>Alert(align:true,false true일때 우측정렬 기본은 중앙정렬)</S.GuideSubTitle>
            <S.GuideBox>
                <S.ButtonBox>
                    <Button onClick={() => openAlert("alert01")}>알럿1</Button>
                    <Button onClick={() => openAlert("alert02")}>알럿2</Button>
                </S.ButtonBox>
                <BasicModal
                    isOpen={activeAlert !== null}
                    onClose={closeAlert}
                    alignRight={true}
                    title={activeAlert ? alertData[activeAlert].title : ""}
                >
                    {activeAlert && alertData[activeAlert].content}
                </BasicModal>
            </S.GuideBox>
            <S.GuideSubTitle>BottomSheet</S.GuideSubTitle>
            <S.GuideBox>
                <S.ButtonBox>
                    <Button onClick={() => openSheet("service")}>서비스 안내</Button>
                    <Button onClick={() => openSheet("login")}>로그인 필요</Button>
                </S.ButtonBox>
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