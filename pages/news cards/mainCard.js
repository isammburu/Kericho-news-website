import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import teafarm from './cardassets/teafarm.jpg'

export default function MainNewsCard() {
  return (
    <Card sx={{ maxWidth: 750 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="275"
          image={teafarm}
          alt="Kericho Tea Farm"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kericho farm workers launch Scottish legal bid against tea giant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Seven farm workers from Kenya are suing one of the world's biggest tea producers for damages in a personal injury court in Scotland.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}