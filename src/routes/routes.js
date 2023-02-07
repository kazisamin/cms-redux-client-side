import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddPost from "../pages/Dashboard/AddPost";
import PostList from "../pages/Dashboard/PostList";
import UpdatePost from "../pages/Dashboard/UpdatePost";
import About from "../pages/Main/About";
import Home from "../pages/Main/Home";
import PostRead from "../pages/Main/PostRead";
import Read from "../pages/Main/Read";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "read",
                element: <Read />,
            },
            {
                path: "post/:id",
                element: <PostRead />,
                loader: ({ params }) => fetch(`https://cms-redux-server-side.vercel.app/read/${params.id}`)
            },


        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <PostList />,
            },
            {
                path: "add-post",
                element: <AddPost />,
            },
            {
                path: "update/:id",
                element: <UpdatePost />,
                loader: ({ params }) => fetch(`https://cms-redux-server-side.vercel.app/posts/${params.id}`)
            },

        ],
    },
]);

export default routes;
