import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Page/Home/Home';
import Layout from './Layout/Layout';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  delay: 500,
  easing: "ease-in-out",
  once: true,
  mirror: false,
  offset: 5,
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
