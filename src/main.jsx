import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, Login, FAQ, ModuloUsers, Contact } from './components'

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/login', element: <Login />},
  { path: '/FAQ', element: <FAQ />},
  { path: '/user', element: <ModuloUsers />},
  { path: '/Contact', element: <Contact />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
