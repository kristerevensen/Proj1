import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Campaigns from "./views/Campaigns";
import Dashboard from "./views/Dashboard";
import Growth from "./views/Growth";
import User from "./views/User";
import Login from "./views/Login";
import Signup from "./views/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/campaigns',
        element: <Campaigns />
    },
    {
        path: '/growth',
        element: <Growth />
    },
    {
        path: '/user',
        element: <User />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
])

export default router;