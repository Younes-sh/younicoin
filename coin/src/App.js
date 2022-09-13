import React from "react";
import { BrowserRouter } from "react-router-dom" ;
import Routing from "./routing" ;
import Navbar from './Components/Navbar' ;


function App() {
	return (
    <BrowserRouter>
       	<Navbar />
		<Routing />
	</BrowserRouter>
		
	);
}

export default App;