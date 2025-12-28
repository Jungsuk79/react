import React from 'react';
import S from './style';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import BasicButton from '../../components/button/BasicButton';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const name ="홍길동"

    return (
        <>
            <S.Title>
                홈페이지
            </S.Title>
            <Link to={`/intro?name=${name}`}>인트로 페이지</Link>
            <div>
                <BasicButton size={""} shape={""} variant={""} border={""} font={""} color={""}>버튼</BasicButton>
                <BasicButton size={"small"} shape={"small"} variant={"sub"} border={"sub"} font={"h6"} color={"black"}>버튼</BasicButton>
                <BasicButton size={"small"} shape={"small"} variant={"white"} border={"gray300"} font={"h6"} color={"black"}>버튼</BasicButton>
                <BasicButton size={"small"} shape={"small"} variant={"primary"} border={"primary"} font={"h6"} color={"white"}>버튼</BasicButton>
            </div>
            
        </>
        
    );
};

export default Home;