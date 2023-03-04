import { createBrowserRouter, Navigate, NavigationType } from "react-router-dom";
import Campaigns from "./views/campaigns/Index";
import Dashboard from "./views/Dashboard";
import Growth from "./views/growth/index";
import User from "./views/user/Index";
import Login from "./views/Login";
import Signup from "./views/Signup";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Projects from "./views/projects/index";
import Settings from "./views/user/Settings";
import Pages from "./views/pages/index";
import Links from "./views/campaigns/Links";
import NewCampaign from "./views/campaigns/NewCampaign";

const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <NavigationType to="/" />
    },
    {
        path: '/',
        element: <DefaultLayout />,
        children: [

            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/campaigns',
                element: <Campaigns />,
                children: [
                    {
                        path: 'links',
                        element: <Links />
                    },
                    {
                        path: 'new_campaign',
                        element: <NewCampaign />
                    },
                ]
            },
            {
                path: '/growth',
                element: <Growth />
            },
            {
                path: '/pages',
                element: <Pages />
            },
            {
                path: '/user',
                element: <User />,
                children: [
                    {
                        path: 'settings',
                        element: <Settings />
                    },
                ]
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    }
])

export default router;
