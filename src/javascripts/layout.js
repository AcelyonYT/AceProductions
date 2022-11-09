import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/navBar";
import Button from "./components/buttons";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Button />
        </>
    );
}

export default Layout;