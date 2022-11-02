import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
    display:flex;
`;
const Input = styled.input`
    width:250px;
    font-size:18px;
    color:white;
    out-line:none;
    background-color:transparent;
`;
const Button = styled.button`
    width:50%;
    font-size:18px;
    border:none;
    @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 812px) 
    and (-webkit-min-device-pixel-ratio: 3) {
        width:100px;
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