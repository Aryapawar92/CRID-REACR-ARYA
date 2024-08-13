import React from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
