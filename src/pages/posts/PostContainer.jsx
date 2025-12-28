import React,{useEffect,useState} from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';

const PostContainer = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const datas = await response.json();
            setPosts(datas);
        }
        getPosts();
    }, []);

    const titleList = posts.map(({id,title},i)=>(
        <li key={i}>
            <Link to={`/posts/read/${id}`}> {i+1}. {title}</Link>
        </li>
    ));


    return (
        <>
            <ul>
                {titleList}
            </ul>
        </>
    );
};

export default PostContainer;