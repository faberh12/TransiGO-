import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, Login, FAQ } from './components'

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/login', element: <Login />},
  { path: '/FAQ', element: <FAQ />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
