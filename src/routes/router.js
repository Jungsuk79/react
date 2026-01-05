import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Intro from "../pages/intro/Intro.jsx";
import GuideContainer from "../pages/guide/GuideContainer.jsx";
import GuideUiContainer from "../pages/guide/GuideUiContainer.jsx";
import PostContainer from "../pages/posts/PostContainer.jsx";
import Post from "../pages/posts/Post.jsx";
import Layout from "../pages/layout/Layout.jsx";
import Join from "../pages/join/Join.jsx";
import Login from "../pages/login/Login.jsx";
import MyPage from "../pages/mypage/MyPage.jsx";
import NotFound from "../pages/error/NotFound.jsx";
import GuideSamples from "../pages/guide/GuideSamples";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/join",
                element: <Join />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/my-page",
                element: <MyPage />
            },
            {
                path: "/posts",
                element: <PostContainer />
            },
            {
                path: "/posts/read/:id",
                element: <Post />
            }
        ]
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
        path: "/guide-ui",
        element: <GuideUiContainer />
    },
    {
        path: "/guide-sample",
        element: <GuideSamples />
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;