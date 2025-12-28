import React, { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Post = () => {

    const { id } = useParams();
    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const datas = await response.json();
            setPosts(datas);
        }
        getPosts()
        .then(() => setLoading(false))
        .catch(() => {
            setLoading(true)
        });
    }, []);

    if (loading) {
        return <div>로딩중...</div>;
    }

    return (
        <li>
            <p>제목: {posts.title}</p>
            <p>내용: {posts.body}</p>
            <Link to="/posts">목록으로</Link>
        </li>
    );
};

export default Post;