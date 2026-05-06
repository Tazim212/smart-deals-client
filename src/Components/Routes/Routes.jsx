import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import AllProducts from "../../Pages/AllProducts/AllProducts";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "allproducts",
                Component: AllProducts
            }
        ]
    }
])