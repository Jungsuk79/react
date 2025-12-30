import React from 'react';
import S from './style';
import Button from "../../components/atomic/button/style";
import ButtonGroup from "../../components/moleculs/buttongroup/ButtonGroup";
import BasicInput from "../../components/atomic/input/BasicInput";

const GuideUiContainer = () => {
    return (
        <S.GuideWrapper>
            <S.GuideTitle>UI COPONENT</S.GuideTitle>
            <S.GuideSubTitle>BUTTON TYPE</S.GuideSubTitle>
            <S.GuideBoxTitle>Button Size(small,medium,large,full), Button Shape(small,large,big)</S.GuideBoxTitle>
            <S.GuideBox>
                <S.ButtonBox>
                    <Button size={"small"} shape={""} font={"h9"}>SMALL</Button>
                    <Button size={"small"} shape={"small"} font={"h9"}>SMALL</Button>
                    <Button size={"small"} shape={"large"} font={"h9"}>SMALL</Button>
                    <Button size={"small"} shape={"big"} font={"h9"}>SMALL</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button size={"medium"} shape={""} font={"h8"}>MEDIUM</Button>
                    <Button size={"medium"} shape={"small"} font={"h8"}>MEDIUM</Button>
                    <Button size={"medium"} shape={"large"} font={"h8"}>MEDIUM</Button>
                    <Button size={"medium"} shape={"big"} font={"h8"}>MEDIUM</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button size={"large"} font={"h6"} shape={""}>LARGE</Button>
                    <Button size={"large"} shape={"small"} font={"h6"}>LARGE</Button>
                    <Button size={"large"} shape={"large"} font={"h6"}>LARGE</Button>
                    <Button size={"large"} shape={"big"} font={"h6"}>LARGE</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button size={"full"} shape={""} font={"h2"}>Full</Button>
                </S.ButtonBox>
            </S.GuideBox>
            <S.GuideBoxTitle>Button Type(variant,disabled)</S.GuideBoxTitle>
            <S.GuideBox>
                <S.ButtonBox>
                    <Button>버튼</Button>
                    <Button className="active" variant={""}>버튼</Button>
                    <Button disabled="disabled">버튼</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button variant={"gray"}>버튼</Button>
                    <Button className="active" variant={"gray"}>버튼</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button variant={"black"}>버튼</Button>
                    <Button className="active" variant={"black"}>버튼</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button variant={"primaryLine"}>버튼</Button>
                    <Button className="active" variant={"primaryLine"}>버튼</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button variant={"primary"}>버튼</Button>
                    <Button className="active" variant={"primary"}>버튼</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button variant={"secondaryLine"}>버튼</Button>
                    <Button className="active" variant={"secondaryLine"}>버튼</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button variant={"secondary"}>버튼</Button>
                    <Button className="active" variant={"secondary"}>버튼</Button>
                </S.ButtonBox>
                <S.ButtonBox>
                    <Button variant={"warning"}>버튼</Button>
                    <Button className="active" variant={"warning"}>버튼</Button>
                </S.ButtonBox>
            </S.GuideBox>
            <S.GuideBoxTitle>Button Group(direction,align,gap,fullWidth)</S.GuideBoxTitle>
            <ButtonGroup>
                <Button size={""} font={""}>버튼</Button>
                <Button variant={"black"} size={""} font={""}>버튼</Button>
            </ButtonGroup>
            <ButtonGroup direction={"column"}>
                <Button size={""} font={""}>버튼</Button>
                <Button variant={"black"} size={""} font={""}>버튼</Button>
            </ButtonGroup>
            <ButtonGroup fullWidth={"1"}>
                <Button size={""} font={""}>버튼</Button>
                <Button variant={"black"} size={""} font={""}>버튼</Button>
            </ButtonGroup>
            <S.GuideSubTitle>FORM</S.GuideSubTitle>
            <S.GuideBoxTitle>Input(type, placeholder, id, labelTxt, radius, direction, fontSize, padding, disabled,success,error)</S.GuideBoxTitle>
            <S.GuideBox>
                <BasicInput placeholder={"입력해 주세요."} />
                <BasicInput type={"password"} placeholder={"비밀번호를 입력해 주세요."} />
                <BasicInput disabled={"disabled"} placeholder={"Disabled"} />
            </S.GuideBox>
            <S.GuideBox>
                <BasicInput placeholder={"입력해 주세요."} success={true} />
                <BasicInput placeholder={"입력해 주세요."} error={true} />
            </S.GuideBox>
            <S.GuideBox>
                <BasicInput placeholder={"입력해 주세요."} descpition={"아이디는 영문으로 작성해 주세요."} />
                <BasicInput placeholder={"입력해 주세요."} success={true} successTxt={"성공문구 입니다."} />
                <BasicInput placeholder={"입력해 주세요."} error={true} errorTxt={"에러문구 입니다."} />
            </S.GuideBox>
            <S.GuideBox>
                <BasicInput placeholder={"입력해 주세요."} id={"id01"} labelTxt={"레이블"} />
                <BasicInput placeholder={"입력해 주세요."} id={"id02"} direction={"reverse"} labelTxt={"레이블"} />
            </S.GuideBox>
            <S.GuideBox>
                <BasicInput placeholder={"입력해 주세요."} fontSize={"20"} padding={"10px 20px"} />
            </S.GuideBox>
        </S.GuideWrapper>
    );
};

export default GuideUiContainer;