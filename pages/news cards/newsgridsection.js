import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../news cards/newscardstyles/newscards.css'
import MainNewsCard from './mainCard'
import SecondaryCardOne from './secondary card1';
import SecondaryCardTwo from './secondarycard2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NewsGrid() {
  return (
    <div className='mainCard'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid className ='mainContainer' xs={6} md={6.5}>
            <Item>
              <MainNewsCard/>
            </Item>
          </Grid>
          <Grid className="primartContainer" xs={6} md={5.5}>
            <div className='smallNewsSection'>
              <Item className='NewsSection'>
                <SecondaryCardOne/>
              </Item>
              <Item className='NewsSection'>
                <SecondaryCardTwo/>
              </Item>
            </div>
          </Grid>
          </Grid>
      </Box>
    </div>
  );
}