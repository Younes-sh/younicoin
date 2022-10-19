import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import CloseIcon from '@mui/icons-material/Close';

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
    <Box sx={{}}>
      <div className="">
        <button
          className="Button CenterAlign"
          onClick={() => setDisplayModal(!displayModal)}
        >
          <KeyboardDoubleArrowUpIcon />
        </button>
        <Box sx={{}}>
          <div className={`Modal ${displayModal ? "Show" : ""}`} style={{borderRadius:'25px 25px 0 0'}}>
            <button
            className="Button CenterAlign"
            onClick={() => setDisplayModal(!displayModal)}
          >
            <CloseIcon />
          </button>
            <h3>Settings</h3>
            <Box sx={{backgroundColor:'red'}}>
              <button
                className="Close"
                onClick={() => setDisplayModal(!displayModal)}
              >
                X
              </button>
            </Box>
            <p className="HelpText" style={{color:'red'}}>
              Note: these settings are saved in the browser only and can be lost
            </p>
        
          </div>
        </Box>

        <div
          className={`Overlay ${displayModal ? "Show" : ""}`}
          onClick={() => setDisplayModal(!displayModal)}
        />
        <p className="Alert">{alert}</p>
      </div>
    
    </Box>
  );
}

export default ModalSlid ;