import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from "../static/places";
import useWindowsPosition from '../hook/useWindowsPosition';




const useStyles = makeStyles((theme) => ({
root : {
    minheight : '100vh',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
}
}));

export default function PlaceToVisit() {
    const classes = useStyles() ; 
    const checked =  useWindowsPosition('header');

  return (
    <div className={classes.root} id="place-to-visit">
        <ImageCard place={places[0]} checked={checked}/>
        <ImageCard place={places[1]} checked={checked}/>
    </div>
  )
}
