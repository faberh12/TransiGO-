import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, Login, FAQ, ModuloUsers, Contact, Signup } from './components'
import ConsultaRuta from './components/ConsultaRuta';
import RutasDiscapacidad from './components/RutaDiscapacidad';

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/login', element: <Login />},
  { path: '/FAQ', element: <FAQ />},
  { path: '/user', element: <ModuloUsers />},
  { path: '/Contact', element: <Contact />},
  { path: '/signup', element: <Signup />},
  { path: '/user/rutas', element: <ConsultaRuta />},
  { path: '/user/rutas-discapacidad', element: <RutasDiscapacidad />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
