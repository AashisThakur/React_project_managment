import { RouteObject } from "react-router";
import Layout from "../layout";
import Boards from "../pages/Boards";
import Projects from "../pages/Projects";
import Home from "../pages/Home";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "/boards",
                    element: <Boards />,
                },
                {
                    path: "/projects",
                    element: <Projects />,
                }]
            }
        ]
    },
    // {
    //     path: "/projects",
    //     element: <Projects />
    // },
    // {
    //     path:"/Board",
    //     element: <Boards/>,
    // }
];

export default routes;