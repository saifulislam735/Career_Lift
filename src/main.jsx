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
        loader: () => fetch('categories.json'),
      },
      {
        path: "/Career_Lift/start_apply",
        element: <Apply></Apply>,
      },
      {
        path: "/Career_Lift/job_Details/:jobId",
        element: <JobDetails ></JobDetails>,
        loader: () => fetch('jobs.json')
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
