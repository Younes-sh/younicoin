import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function ModalSlid() {
  const [alert, setAlert] = useState("");
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    const clearMessage = setTimeout(() => {
      setAlert("");
    }, 5000);
    return () => clearTimeout(clearMessage);
  }, [alert]);

  return (
      <div className="">
          <button
            className="Button CenterAlign"
            onClick={() => setDisplayModal(!displayModal)}
          >
            <KeyboardDoubleArrowUpIcon />
          </button>
            <div className={`Modal ${displayModal ? "Show" : ""}`} >
              {/* <button
              className="Button CenterAlign"
              onClick={() => setDisplayModal(!displayModal)}
              >
              </button> */}
              <h3>Settings</h3>
             
              <button 
                className="Close"
                onClick={() => setDisplayModal(!displayModal)}
              >
                <ExpandMoreIcon />
                
              </button>
                <Box sx={{ width:'100%' ,display:'flex' , justifyContent:'space-evenly'}}>
                  <div>
                    <p>Younes</p>
                    <p>1</p>
                  </div>
                  <div>
                    <p>Sheikhlar</p>
                    <p>2</p>
                  </div>
                </Box>
            </div>
        <div
          className={`Overlay ${displayModal ? "Show" : ""}`}
          onClick={() => setDisplayModal(!displayModal)}
        />
        
      </div>
    
  );
}

export default ModalSlid ;