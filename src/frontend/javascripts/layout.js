import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/navBar/nav";
import Header from "./layouts/header";
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