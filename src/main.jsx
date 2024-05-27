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
import Apply from './Component/Apply/Apply';
import JobDetails from './Component/JobDetails/JobDetails';
import Home from './Component/Home/Home';
import Blog from './Component/Blog/Blog';
// import handleViewDetails from './handleViewDetails';


const router = createBrowserRouter([
  {
    path: "/Career_Lift/",
    element: <Root></Root>,
    children: [
      {
        path: "/Career_Lift/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Career_Lift/home",
        element: <Home></Home>,
      },
      {
        path: "/Career_Lift/appliedjobs",
        element: <Apply></Apply>,
      },
      {
        path: "/Career_Lift/job_Details/:jobId",
        element: <JobDetails ></JobDetails>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "/Career_Lift/blog",
        element: <Blog></Blog>,
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
