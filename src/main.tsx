import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Flavors from './Flavors.tsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/flavors",
    element: <Flavors />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);