import React from 'react'
import ReactDOM from 'react-dom/client'
import { lazy } from 'react';

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import ErrorMessage from './components/ErrorMessage';
// import Contact from './components/Contacts';

const Contact = lazy(() => import('./components/Contacts'));

import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorMessage />
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorMessage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
