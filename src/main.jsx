import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import ProductList from "./Components/ProductList.jsx";

//Applying lazy loading to the components to avoid unnecessary renders
const ProductDetails = lazy(() => import("./Components/ProductDetails.jsx"));
const Cart = lazy(() => import("./Components/Cart.jsx"));
const NotFound = lazy(() => import("./Components/NotFound.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <Suspense fallback="Loading...">
          <NotFound />
        </Suspense>
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <LandingPage />
            <ProductList />
          </>
        ),
      },
      {
        path: "/productdetails/:id",
        element: (
          <>
            <Suspense fallback="Loading...">
              <ProductDetails />
            </Suspense>
          </>
        ),
      },
      {
        path: "/cart",
        element: (
          <>
            <Suspense fallback="Loading...">
              <Cart />
            </Suspense>
          </>
        ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
);
