import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import SIgnIn from "../../Pages/SignIn/SIgnIn";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";

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
                path: "/allproducts",
                element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>
            },
            {
                path: "/signin",
                Component: SIgnIn
            },
            {
                path: "/register",
                Component: Register
            },
            {
                path: "/productdetails/:id",
                Component: ProductDetails,
                loader: ({params}) => fetch(`http://localhost:5000/productdetails/${params.id}`)
            }
        ]
    }
])