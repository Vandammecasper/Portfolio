import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./assets/styles/screen.scss";

import Home from './routes/Home';
import About from './routes/About';
import Learning from './routes/Learning';
import Projects from './routes/Projects';
import Header from './components/Header';

import { Link } from 'react-router-dom';

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
    <div className='o-container'>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
