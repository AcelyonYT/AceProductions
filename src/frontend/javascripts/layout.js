import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/navBar/nav";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Footer />
            <Outlet />
        </>
    );
}

export default Layout;