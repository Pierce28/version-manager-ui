import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import OrganizationsView, { organizationsLoader } from './organization/OrganizationsView';
import ErrorPage from './common/ErrorPage';
import reportWebVitals from './reportWebVitals';
import ApplicationsView, { applicationsLoader } from './application/ApplicationsView';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <OrganizationsView />,
        loader: organizationsLoader,
      },
      {
        path: "/organization/:organizationId/applications",
        element: <ApplicationsView />,
        loader: applicationsLoader,
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
