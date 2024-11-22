import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children:[
      {
        path: "/",
        element: <Home />, 
      },
      // {
      //   path:"/found",
      //   element:<Found/>
      // },
      // {
      //   path:"/lost",
      //   element:<Lost/>
      // },
    ]
  }
])

export default router