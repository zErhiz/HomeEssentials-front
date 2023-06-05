import { createBrowserRouter } from "react-router-dom";
import Layout from "../assets/layout/layout";
import Index from "../assets/pages/Index";
import Parte1 from "../assets/pages/parte1";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Index /> },
        { path: "/2", element: <Parte1 /> },
        {path:"/signin", element:<Signin/>},
        {path:"/signup", element:<Signup/>},
    ],
},
]);
export default routes;