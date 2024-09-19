import App from "./App.jsx";
import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/Aboutpage.jsx";
import Career from "./pages/Career.jsx";
import ProductsDisplay from "./pages/product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/product",
    element: <ProductsDisplay />,
  },
  {
    path: "/career",
    element: <Career />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
