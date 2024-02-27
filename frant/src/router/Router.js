import React from "react";
import { Routes, Route }
    from "react-router-dom";

import Register from "../views/Register";
import Home from "../views/Home";
import Login from "../views/Login";
import Collection from "../views/Collection";
import Store from "../views/Store";
import Upload from "../views/UploadCover";
import UploadLessons from "../views/UploadLessons";


const Rout = () => (
    <Routes>
        <Route
            exact path="/"
            Component={Home}
        />
        <Route
            exact path="/collection"
            Component={Collection}
        />
        <Route
            exact path="/register"
            Component={Register}
        />
        <Route
            exact path="/login"
            Component={Login}
        />
        <Route
            exact path="/store"
            Component={Store}
        />
        <Route
            exact path="/upload"
            Component={Upload}
        />
        <Route
            exact path="/upload/lessons"
            Component={UploadLessons}
        />
    </Routes>
);

export default Rout