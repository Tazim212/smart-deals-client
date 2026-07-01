import { createBrowserRouter } from "react-router";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import SIgnIn from "../../Pages/SignIn/SIgnIn";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Mybids from "../MyBids/Mybids";
import CreateProduct from "../CreateProduct/CreateProduct";
import MyProducts from "../MyProducts/MyProducts";
import UpdateProduct from "../UpdateProduct/UpdateProduct";

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
                Component: AllProducts
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
                path: "/mybids",
                element: <PrivateRoute><Mybids></Mybids></PrivateRoute>,
                hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>
            },
            {
                path: "/myproducts",
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
                hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>
            },
            {
                path: "/createproducts",
                element: <PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>,
                hydrateFallbackElement: <span className="loading loading-dots loading-xl"></span>
            },
            {
                path: "/updateproducts/:id",
                Component: UpdateProduct
            },
            {
                path: "/productdetails/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://smart-deals-server-tc3q.onrender.com/productdetails/${params.id}`),
            }

        ]
    }
])