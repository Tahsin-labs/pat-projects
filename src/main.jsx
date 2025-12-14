import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
"react-router";
import { RouterProvider } from "react-router/dom";
import App from './App.jsx'
import { createBrowserRouter } from 'react-router';
import Root from './Root.jsx';
import Home from './Home.jsx';

import Game from './Game.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';
import ForgetPassword from './ForgetPassword.jsx';
import Eror from './Eror.jsx';
import AuthProvider from './AuthProvider.jsx';

import Login from './Login.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Details from './Details.jsx';
import AddService from './AddService.jsx';
import Mylisting from './Mylisting.jsx';
import Edit from './Edit.jsx';
import Orders from './Orders.jsx';
import About from './About.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    hydrateFallbackElement: <h2>Loading....</h2>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "game",
        Component: Game
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "details/:id",
        element: (<PrivateRoute
        >
          <Details></Details>
        </PrivateRoute>),

        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:3000/services/${params.id}`);
          const data = await res.json();
          console.log(data)
          return data
        },

      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword
      },

      {
        path: "/*",
        Component: Eror
      },
      {
        path: "addService",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: "myListing",
        element: <PrivateRoute><Mylisting></Mylisting></PrivateRoute>
      },
      {
        path: "edit/:id",
        Component: Edit
      },
      {
        path: "about",
        Component: About
      },
        {
        path: "orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },


    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
