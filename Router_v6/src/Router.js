/* import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";

function Router() {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
}
export default Router */

////////////////////

import React from "react";
import  { createBrowserRouter } from 'react-router-dom'
import App from "./App";
import MyErr from "./components/MyErr";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Followers from "./screens/users/Followers";
import User from "./screens/users/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
                errorElement: <MyErr />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "users/:userId",
                element: <User />,
                children: [
                    {
                        path: "followers",
                        element: <Followers />
                    },
                    {
                        path: "following",
                        element: <Followers />
                    }
                ]

            }
        ],
        errorElement: <NotFound />
    }
])
export default router;

