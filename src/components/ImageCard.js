import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Zoom from '@mui/material/Zoom';
import { Button } from "@mui/material";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    background: '#fff',
    margin: '20px',
  },
  media: {
    height: 400,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#c214cd',
  },
  desc: {
    fontFamily: 'Poppins',
    fontSize: '1rem',
    color: 'black',
  },
goDown : {
color : '#c214cd',
fontSize : '4rem',
},
});

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <section id="imagecard">
    <Zoom in={checked} {...(checked ? { timeout: 800 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
          <Button variant="contained" color="secondary" className='mt-3'>
        VISIT SITE
        </Button>
        </CardContent>
      </Card>
 </Zoom>
 </section>
  );
}