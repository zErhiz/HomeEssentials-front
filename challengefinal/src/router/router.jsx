import { createBrowserRouter } from "react-router-dom";
import Layout from "../assets/layout/layout";
import Index from "../assets/pages/Index";
import Parte1 from "../assets/pages/parte1";

import Home from "../assets/pages/Home"

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

import AdminPanel from "../pages/AdminPanel";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/2", element: <Parte1 /> },
        { path:"/signin", element:<Signin/>},
        { path:"/signup", element:<Signup/>},
        { path:"/admin", element:<AdminPanel/>},
    ],
},
]);
export default routes;