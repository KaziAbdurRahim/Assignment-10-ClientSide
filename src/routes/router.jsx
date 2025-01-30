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
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/getfeaturegames'),
            },
            {
                path: '/allgames',
                element: <AllGames />,
                loader: () => fetch('http://localhost:5000/allgames'),
            },
            {
                path: '/faq',
                element: <Faq />,
            },
        ],
    },
    {
        path: '/games',
        element: (
            <PrivateRoute>
                <HomeLayout />
            </PrivateRoute>
        ),
        children: [
            {
                path: '/games/:id',
                element: <DetailsGame />,
                loader: ({ params }) => fetch(`http://localhost:5000/games/${params.id}`),
            },
            {
                path: '/games/update/:id',
                element: <UpdateGame />,
                loader: ({ params }) => fetch(`http://localhost:5000/games/${params.id}`),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "/auth/login", element: <Login /> },
            { path: "/auth/register", element: <Register /> },
        ],
    },
    {
        path: "/user",
        element: (
            <PrivateRoute>
                <HomeLayout />
            </PrivateRoute>
        ),
        children: [
            { path: "/user/addgames", element: <AddGames /> },
            { path: "/user/favgames/:id", element: <FavGames />, loader: ({ params }) => fetch(`http://localhost:5000/getfavorite/${params.id}`) },
        ],
    },
    {
        path: "*",
        element: <Errorpage />,
    }
]);

export default router;
