import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/styles/screen.scss";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='o-container'>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
