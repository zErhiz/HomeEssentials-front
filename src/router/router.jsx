import { createBrowserRouter } from "react-router-dom";
import Layout from "../assets/layout/layout";
import Parte1 from "../assets/pages/parte1";
import Home from "../assets/pages/Home"
import Signup from "../assets/pages/Signup";
import Signin from "../assets/pages/Signin";
import AllProducts from "../assets/components/Products/AllProducts";
import FormCV from "../assets/pages/FormCV";
import AdminPanel from "../pages/AdminPanel";
import UserPanel from "../assets//pages/UserPanel";
import ProductDetail from "../assets/components/Products/ProductDetail";
import CategoryProducts from "../assets/pages/CategoryDetail"
import About from "../assets/pages/About";
import Contact from "../assets/pages/Contact";
import Attendance from "../assets/pages/Attendance";

const routes = createBrowserRouter([
        {
                path: "/",
                element: <Layout />,
                children: [
                        { path: "/", element: <Home /> },
                        { path: "/2", element: <Parte1 /> },
                        { path: "/signin", element: <Signin /> },
                        { path: "/signup", element: <Signup /> },
                        { path: '/allproducts', element: <AllProducts /> },
                        { path: "/FormCV", element: <FormCV /> },
                        { path: "/admin", element: <AdminPanel /> },
                        { path: "/userPanel", element: <UserPanel /> },
                        {path:"/products/:id", element:<ProductDetail/>},
                        {path:"/products/category/:id", element:<CategoryProducts/>},
                        {path:"/about", element:<About/>},
                        {path:"/contact", element:<Contact/>},
                        {path:"/attendance", element:<Attendance/>},
                ],
        }
]);
export default routes;