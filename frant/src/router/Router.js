import React from "react";
import { Routes, Route }
    from "react-router-dom";

import Register from "../views/Register";
import Home from "../views/Home";
import Login from "../views/Login";
import Feed from "../views/Feed";

const Rout = () => (
    <Routes>
        <Route
            exact path="/"
            Component={Home}
        />
        <Route
            exact path="/feed"
            Component={Feed}
        />
        <Route
            exact path="/register"
            Component={Register}
        />
        <Route
            exact path="/login"
            Component={Login}
        />
    </Routes>
);

export default Rout