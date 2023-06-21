/* import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

interface IRouterProps {
    toggleDark: () => void
    isDark: boolean;
}

function Router({toggleDark, isDark}: IRouterProps) {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Coins  toggleDark={toggleDark}  />}></Route>
            <Route path="/:coinId" element={<Coin isDark={isDark} />}>
                <Route path="chart" element={<Chart />} />
                <Route path="price" element={<Price />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default Router; */


//////////////////////////


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Coins />}></Route>
            <Route path="/:coinId" element={<Coin  />}>
                <Route path="chart" element={<Chart />} />
                <Route path="price" element={<Price />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default Router;