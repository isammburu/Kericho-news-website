import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import politics from './cardassets/politics.jpg'
import { CardActionArea } from '@mui/material';

export default function SecondaryCardTwo() {

    return (
    <CardActionArea>
        <Card sx={{ display: 'flex' }}>
            <Box boxShadow={'none'} sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ display: 'flex', alignItems: 'left'}}>
                
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width:300}}
                image={politics}
                alt="Live from space album cover"
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" padding={4}>
                Dead From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
            </Typography>
            </CardContent>
        
            </Card>
    </CardActionArea>
  );
}