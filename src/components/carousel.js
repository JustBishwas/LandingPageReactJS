import React, {useEffect, useState} from 'react'
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Grow from '@mui/material/Grow';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    margin: "0 auto",
    width: "100%",
    height: "auto",
    padding: "30px",
  },
  styleimg: {
    width: "500px",
    height: "400px",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#c214cd",
  },
  desc: {
    fontFamily: 'Poppins',
    fontSize: "1rem",
    color: "black",
    textAlign : 'justify'
  },
}));

function MyCarousel(place) {
    
    
  var items = [
    {
      name: "Slider 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: process.env.PUBLIC_URL + "assets/nft2.avif",
    },
    {
      name: "Slider 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: process.env.PUBLIC_URL + "assets/nft3.webp",
    },
    {
      name: "Slider 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: process.env.PUBLIC_URL + "assets/nft4.webp",
    },
    {
      name: "Slider 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      imageUrl: process.env.PUBLIC_URL + "assets/nft.webp",
    },
  ];

  return (
    <div className="container mt-5">
  
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    
    </div>

  );
}

function Item(props) {

  const classes = useStyles();


  return (

   
    <Paper className={classes.root}>
      <div className="col-6">
        <img src={props.item.imageUrl} className={classes.styleimg}></img>
      </div>
      <div className="col-6">
        <h2 className={classes.title}>{props.item.name}</h2>
        <p className={classes.desc}>{props.item.description}</p>
        <Button variant="contained" color="secondary">
          READ MORE
        </Button>
      </div>
    </Paper>

    
  );
}

export default MyCarousel;
