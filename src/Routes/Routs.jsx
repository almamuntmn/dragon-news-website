import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        path: "/login",
        element: <h1>Login</h1>,
    },
    {
        path: "/register",
        element: <h1>Register</h1>,
    },
]);

export default router;