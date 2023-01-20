import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from '~/App';
import '~/styles/app.scss';
import {
  Home,
  Cart,
  About,
  Contact,
  Blog,
  Shop,
  BlogDetail,
  Checkout,
} from '~/pages/frontend';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Oops!!</div>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'blog/blog-detail',
        element: <BlogDetail />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
    ],
  },
  { path: 'admin', element: <div>This is admin page</div> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
