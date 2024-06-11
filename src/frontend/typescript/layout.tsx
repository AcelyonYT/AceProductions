import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./layouts/header";
import NavBar from "./components/navBar/nav";
import Wrapper from "./layouts/wrapper";
import Footer from "./layouts/footer";

const Layout = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Wrapper />
            <Footer />
            <Outlet />
        </>
    );
}

export default Layout;