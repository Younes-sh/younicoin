import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "./Pages/Home" ;
import Contact from './Pages/Contact' ;
import NFT from './Pages/NFT' ;

const Routing = () => {


    return (
        <Routes>
           
            <Route exact path="/" element={<Home />} />
            <Route exact path="/nft" element={<NFT />} />
            <Route exact path="/contact" element={<Contact />} />
         
            
        </Routes>

    )
}
export default Routing;