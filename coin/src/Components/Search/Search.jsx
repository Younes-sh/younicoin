import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
    display:flex;
`;
const Input = styled.input`
    width:250px;
    padding: 5px;
    font-size:20px;
    color:white;
    out-line:none;
    background-color:transparent;
`;
const Button = styled.button`
    width:120px;
    font-size:20px;
    border:none;
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