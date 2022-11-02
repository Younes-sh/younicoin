import React from "react";
import { BrowserRouter } from "react-router-dom" ;
import Routing from "./routing" ;
import Navbar from './Components/Navbar' ;

import NavbarMobile from "./Components/NavbarMobile/NavbarMobile";
import { Box } from "@mui/system";
function App() {
	return (
		<div>
			<BrowserRouter>
				<Box sx={{width:'100%',height:'auto',display:'flex' , flexDirection:'column', position:'relative'}}>
					<Box sx={{ width:'100%',position:'fixed',zIndex:'9'}}>
						<Navbar />
					</Box>

						<Routing />

					<Box sx={{ display: {  md: 'none' } }}>
						<NavbarMobile />
					</Box>
				</Box>
			</BrowserRouter>
		</div>
		
	);
}

export default App;