import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/tailwind.css"

import Home from './routes/Home';
import About from './routes/About';
import Learning from './routes/Learning';
import Projects from './routes/Projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/learning',
    element: <Learning />
  },
  {
    path: '/projects',
    element: <Projects />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
