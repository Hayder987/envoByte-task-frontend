import { createBrowserRouter } from "react-router";
import MainLayout from "../main/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ComboSales from "../pages/ComboSales";
import Portfolio from "../pages/Portfolio";
import AboutUs from "../pages/AboutUs";
import Blogs from "../pages/blogs";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {path:'/', element: <Home/>},
            {path:'/services', element: <Services/>},
            {path:'/combosales', element: <ComboSales/>},
            {path:'/portfolio', element: <Portfolio/>},
            {path:'/aboutUs', element: <AboutUs/>},
            {path:'/blogs', element: <Blogs/>},
        ]
    }
])