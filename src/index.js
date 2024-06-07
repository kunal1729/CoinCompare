import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import Crypto from './pages/Crypto';
import Saved from './pages/Saved';
import Trending from './pages/Trending';
import CryptoDetails from './component/CryptoDetails'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/crypto",
        element: <Crypto />,
        children: [
          {
          path: ":coinId", 
          element: <CryptoDetails />,
          }
        ]
      },
      {
        path: "/trending",
        element: <Trending />,
        children: [
          {
          path: ":coinId", 
          element: <CryptoDetails />,
          }
        ]
      },
      {
        path: "/saved",
        element: <Saved />,
        children: [
          {
          path: ":coinId", 
          element: <CryptoDetails />,
          }
        ]
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
