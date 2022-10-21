import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from "@emotion/styled";

const Open = styled.button`
  margin: 0 auto;
  border-radius: 50%;
`
const Close = styled.button`
  
  margin: 0 auto;
  border-radius: 0 0 15px 15px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;


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
      
            <Open 
                className=" "
                onClick={() => setDisplayModal(!displayModal)}
              >
                <KeyboardDoubleArrowUpIcon />
            </Open>
            <div className={`Modal ${displayModal ? "Show" : ""}`} >
              <Close 
                className="Close"
                onClick={() => setDisplayModal(!displayModal)}
                >
                <ExpandMoreIcon />
              </Close>
                <Container>
                  <div>
                    <p>Younes</p>
                    <p>1</p>
                  </div>
                  <div>
                    <p>Sheikhlar</p>
                    <p>2</p>
                  </div>
                </Container>
            </div>
        <div
          className={`Overlay ${displayModal ? "Show" : ""}`}
          onClick={() => setDisplayModal(!displayModal)}
        />
        
      </div>
    
  );
}

export default ModalSlid ;