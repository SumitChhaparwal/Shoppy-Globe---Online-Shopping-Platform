import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Components/NotFound.jsx'
import LandingPage from './Components/LandingPage.jsx'
import ProductList from './Components/ProductList.jsx'
import  ProductDetails from "./Components/ProductDetails.jsx"
import Cart from "./Components/Cart.jsx"

const appRouter = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  errorElement: <NotFound />,
  children: [
    {
      path: "/",
      element: (
        <>
        <LandingPage />
        <ProductList />
        </>
      )
    },
    {
      path: "/productdetails/:id",
      element: <ProductDetails />,
    },
    {
      path: "/cart",
      element: <Cart />
    }
  ],
}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
