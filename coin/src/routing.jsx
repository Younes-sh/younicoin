import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./Pages/Home" ;
import Contact from './Pages/Contact' ;
import About from './Pages/About' ;
import Converter from "./Pages/Converter";
import Homes from './Pages/Homes'


const Routing = () => {


    return (
        <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/converter" element={<Converter />} />
            <Route exact path="/homes" element={<Homes />} />

        </Routes>

    )
}
export default Routing;