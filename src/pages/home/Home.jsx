import React from 'react';
import S from './style';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import BasicButton from '../../components/atomic/button/BasicButton';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const name ="홍길동"

    return (
        <div>
            <S.Title>
                홈페이지11
            </S.Title>
            <Link to={`/intro?name=${name}`}>인트로 페이지</Link>
            <div>
                <Link to="/guide">가이드 페이지</Link>
            </div>
            <div>
                <Link to="/guide-ui">ui 가이드 페이지</Link>
            </div>
            <div>
                <Link to="/guide-sample">가이드 샘플페이지</Link>
            </div>
        </div>
        
    );
};

export default Home;