import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            페이지를 찾을 수 없습니다. (404 Not Found)
            <div>
                <Link to="/">홈으로 이동</Link>
            </div>
        </div>
    );
};

export default NotFound;