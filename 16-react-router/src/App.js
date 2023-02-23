import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
