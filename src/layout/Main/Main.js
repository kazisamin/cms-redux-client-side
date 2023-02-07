import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
    return (
        <div className='px-10 '>
            <Navbar />
            <Outlet className='mb-80' />
            <Footer />
        </div>
    );
};

export default Main;
