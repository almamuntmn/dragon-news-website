import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
            },
            {
                path: "/about",
                element: <h1>About</h1>,
            },
            {
                path: "/career",
                element: <h1>Career</h1>,
            },
        ],
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login,
            },
            {
                path: "/auth/register",
                Component: Register,
            },
        ]
    },
    {
        path: "/news",
        element: <h1>Register</h1>,
    },
    {
        path: "*",
        element: <h1>404</h1>,
    }
]);

export default router;