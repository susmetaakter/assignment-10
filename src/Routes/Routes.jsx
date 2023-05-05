import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import Home from '../Pages/Home/Home/Home';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import ErrorPage from '../Pages/Shared/ErrorPage/ErrorPage';
import Recipe from '../Pages/Recipe/Recipe';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://assignment-10-server-susmetaakter.vercel.app/chef')
        },
        {
            path: ':id',
            element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
            loader: ({params}) => fetch(`https://assignment-10-server-susmetaakter.vercel.app/chef/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        }
      ]
      
    }
  ]);

export default router;