import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {

    const { id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const datas = await response.json();
            setPosts(datas);
        }
        getPosts();
    }, []);

    return (
        <li>
            <p>제목: {posts.title}</p>
            <p>내용: {posts.body}</p>
        </li>
    );
};

export default Post;