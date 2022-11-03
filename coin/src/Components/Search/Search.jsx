import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
    display:flex;
`;
const Input = styled.input`
    width:250px;
    font-size:20px;
    padding: 7px;
    color:white;
    out-line:none;
    background-color:transparent;
`;
const Button = styled.button`
    width:50%;
    font-size:18px;
    border:none;
    
    @media (max-width:600px){
        font-size: 16px;
    }
    

`;
const Search = () => {
    return (
        <Div>
            <Input type="text"/>
            <Button >Get started</Button>
        </Div>
    )
}

export default Search ;