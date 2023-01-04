import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { CssBaseline } from "@material-ui/core";
import  Header from "./components/header";
import PlaceToVisit from "./components/PlaceToVisit";
import MyCarousel from  "./components/carousel";


const useStyles = makeStyles((theme) => ({
  root : {
    minHeight : '100vh',
    backgroundImage : `url(${process.env.PUBLIC_URL +'/assets/bg.jpg'})`,
    width : `100%`,
    backgroundSize : 'cover',
    backgroundRepeat : 'no-repeat',
  },
}));

function App() {
  const classes = useStyles();
      return (
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <PlaceToVisit />
        <MyCarousel />
        </div>
          );
}

export default App;
