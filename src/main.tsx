
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Matches from './pages/Matches'
import Chat from './pages/Chat'
import Health from './pages/Health'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'health', element: <Health /> },
    { path: 'login', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: 'matches', element: <ProtectedRoute><Matches /></ProtectedRoute> },
    { path: 'profile', element: <ProtectedRoute><Profile /></ProtectedRoute> },
    { path: 'chat', element: <ProtectedRoute><Chat /></ProtectedRoute> },
  ]},
])

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>)
