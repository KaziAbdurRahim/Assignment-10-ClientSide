import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import AllGames from '../pages/AllGames';
import Faq from '../pages/Faq';
import DetailsGame from '../pages/DetailsGame';
import UpdateGame from '../pages/UpdateGame';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddGames from '../pages/AddGames';
import FavGames from '../pages/FavGames';
import PrivateRoute from '../routes/PrivateRoute';
import Errorpage from '../pages/Errorpage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <Home />,
                loader: async () => {
                    const res = await fetch('https://asst-server.vercel.app/getfeaturegames');
                    const data = await res.json();
                    return Array.isArray(data) ? data : [];
                },
            },
            {
                path: 'allgames',
                element: <AllGames />,
                loader: async () => {
                    const res = await fetch('https://asst-server.vercel.app/allgames');
                    const data = await res.json();
                    return Array.isArray(data) ? data : [];
                },
            },
            {
                path: 'faq',
                element: <Faq />,
            },
        ],
    },
    {
        path: 'games',
        element: (
            <PrivateRoute>
                <HomeLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: ':id',
                element: <DetailsGame />,
                loader: async ({ params }) => {
                    const res = await fetch(`https://asst-server.vercel.app/games/${params.id}`);
                    return res.json();
                },
            },
            {
                path: 'update/:id',
                element: <UpdateGame />,
                loader: async ({ params }) => {
                    const res = await fetch(`https://asst-server.vercel.app/games/${params.id}`);
                    return res.json();
                },
            },
        ],
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ],
    },
    {
        path: "user",
        element: (
            <PrivateRoute>
                <HomeLayout />
            </PrivateRoute>
        ),
        children: [
            { path: "addgames", element: <AddGames /> },
            {
                path: "favgames/:id",
                element: <FavGames />,
                loader: async ({ params }) => {
                    const res = await fetch(`https://asst-server.vercel.app/getfavorite/${params.id}`);
                    return res.json();
                },
            },
        ],
    },
    {
        path: "*",
        element: <Errorpage />,
    }
]);

export default router;
