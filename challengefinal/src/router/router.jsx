import { createBrowserRouter } from "react-router-dom";
import Layout from "../assets/layout/Layout";
import Index from "../assets/pages/Index";
import Parte1 from "../assets/pages/parte1";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import FormCV from "../pages/FormCV";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Index /> },
        { path: "/2", element: <Parte1 /> },
        {path:"/signin", element:<Signin/>},
        {path:"/signup", element:<Signup/>},
        {path:"/FormCV", element:<FormCV/>},
    ],
},
]);
export default routes;