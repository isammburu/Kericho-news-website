import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import tourism from './cardassets/town.jpg'
import { CardActionArea } from '@mui/material';

export default function SecondaryCardOne() {

    return (
    <CardActionArea>
        <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" padding={3}>
                Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
            </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'right'}}>
            
            </Box>
        </Box>
        <CardMedia
            component="img"
            sx={{ width:300 }}
            image={tourism}
            alt="Live from space album cover"
        />
        </Card>
    </CardActionArea>
  );
}