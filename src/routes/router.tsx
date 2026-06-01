import { createBrowserRouter } from "react-router";

//import Page
import RootLayout from "../Layouts/RootLayout";
import Home from "../Page/Home";
import Notice from "../Page/Notice";
import Hiring from "../Page/Hiring";
import Information from "../Page/Information";
import DeliveryCondition from "../Page/DeliveryCondition";
import BranchService from "../Page/BranchService";
import PageNotfound from "../Page/PageNotfound";
export const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout/>,
    children:[
        {index: true,
        element: <Home/>},

        {
            path:"/new",
            element:<Information/>
        },
        {
            path:"/notices",
            element:<Notice/>
        },
        {
            path:"/hiring",
            element:<Hiring/>
        },
        {
            path:"/service",
            element:<BranchService/>
        },{
            path:"/delivery",
            element:<DeliveryCondition/>
        }
        

    ]},
    {   path:"*",
        element:<PageNotfound/>
    }
]);