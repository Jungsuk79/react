import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Intro from "../pages/intro/Intro.jsx";
import GuideContainer from "../pages/guide/GuideContainer.jsx";
import PostContainer from "../pages/posts/PostContainer.jsx";
import Post from "../pages/posts/Post.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/intro",
        element: <Intro />
    },
    {
        path: "/guide",
        element: <GuideContainer />
    },
    {
        path: "/posts",
        element: <PostContainer />
    },
    {
        path: "/posts/read/:id",
        element: <Post />
    }
])

export default router;