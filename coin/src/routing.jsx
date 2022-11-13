import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from './Pages/Home';
import Market from "./Pages/Market" ;
import Exchanges from './Pages/Exchanges' ;
import NFT from './Pages/NFT' ;

const Routing = () => {


    return (
        <Routes>
           
            <Route exact path="/" element={<Home />} />
            <Route exact path="/market" element={<Market />} />
            <Route exact path="/nft" element={<NFT />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
         
            
        </Routes>

    )
}
export default Routing;