import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Products from "../pages/Products";
import Shop from "../pages/shop";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Products", element: <Products /> },
      { path: "Shop", element: <Shop /> },


    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
