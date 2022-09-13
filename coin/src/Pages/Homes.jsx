import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Apicoin from "../Components/Apicoin";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000000',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} >
        <Box gridColumn="span 8">
            <Item style={{color:'#ccc'}}>
                xs=8
            </Item>
        </Box>
        <Box gridColumn="span 4">
            <Item style={{color:'#ccc'}}>xs=4
            <h1>younes</h1>
            </Item>
        </Box>
        <Box gridColumn="span 4">
            <Item style={{color:'#ccc'}}>
            <Apicoin />
            </Item>
        </Box>
        <Box gridColumn="span 8">
            <Item style={{color:'#ccc'}}>
            xs=8
            </Item>
        </Box>
      </Box>
    </Box>
  );
}
