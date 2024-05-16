import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Error from './Component/404/Error';
import Statistics from './Component/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/Career_Lift",
    element: <Root></Root>,
    children: [
      {
        path: "/Career_Lift/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
