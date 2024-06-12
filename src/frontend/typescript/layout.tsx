import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./layouts/header";
import NavBar from "./components/navBar/nav";
import Wrapper from "./layouts/wrapper";
import Footer from "./layouts/footer";

const navBar = new NavBar();
const header = new Header();
const wrapper = new Wrapper();
const footer = new Footer();

export default class Layout {
    constructor() {}

    render() {
        return (
            <>
                <navBar.render />
                <header.render />
                <wrapper.render />
                <footer.render />
                <Outlet /> 
            </>
        )
    }
}