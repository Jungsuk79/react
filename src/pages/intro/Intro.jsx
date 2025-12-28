import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Intro = () => {

    const [searchParams] = useSearchParams()
    const name = searchParams.get("name")

    return (
        <div>
           인트로페이지 {name}님 환영합니다.11111
        </div>
    );
};

export default Intro;