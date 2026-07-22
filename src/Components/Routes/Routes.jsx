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
import Loading from "../../Layout/Loading/Loading";

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
                Component: AllProducts,
                hydrateFallbackElement: <Loading></Loading>
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
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: "/myproducts",
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/createproducts",
                element: <PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
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