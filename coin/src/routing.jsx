import React from "react";
import { Route, Routes } from "react-router-dom";


import Contact from './Pages/Contact' ;
import About from './Pages/About' ;
import Converter from "./Pages/Converter";
import Home from './Pages/Home'


const Routing = () => {


    return (
        <Routes>

            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/converter" element={<Converter />} />
            <Route exact path="/" element={<Home />} />

        </Routes>

    )
}
export default Routing;