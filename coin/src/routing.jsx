import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./Pages/Home" ;
import Contact from './Pages/Contact' ;
import About from './Pages/NFT' ;
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Landing from './Pages/LandingPage'

const Routing = () => {


    return (
        <Routes>
            <Route exact payh='/signup' element={<Signup />} />
            <Route exact payh='/login' element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />

            <Route exact path="/landing" element={<Landing />} />
        </Routes>

    )
}
export default Routing;