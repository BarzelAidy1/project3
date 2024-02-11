import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminPage from './components/admin/AdminPage.jsx';
import EditBusinessData from './components/businessData/EditBusinessData.jsx';
import BusinessData from './components/businessData/BusinessData.jsx';
import Meeting from './components/meeting/Meeting.jsx';

const routes = createBrowserRouter([{

  path: "/",
  element: <App />,
  //errorElement:<ErorNotFound />

}, {
  path: "/admin",
  element: <AdminPage />,

  children: [{ path: "service", element: <EditBusinessData /> },
  {path:"meetings", element:<Meeting />},],
  //errorElement:<ErorNotFound />
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
