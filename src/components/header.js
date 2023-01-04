import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; 
import {Link as Scroll} from 'react-scroll';


const useStyles = makeStyles((theme) => ({
root : {
display : 'flex',
justifyContent : 'center',
alignItems : 'center',
height  : '100vh',
fontFamily : 'Nunito',
},
    appbar : {
    background : 'none',
},
icon : {
    color : '#fff',
    fontSize : '2rem'
},
appbarTitle:{
    flexGrow : '1',
    textAlign : 'left',
    color : '#fff',
    fontSize : '1rem',
},
appbarWraper : {
    width : '95%',
    margin : '0 auto'
},
colorText : {
color : '#c214cd',
},
title : {
    color : '#fff',
    fontSize : '3rem',
        fontWeight : 'bold',
},
container : {
    textAlign : 'center',
},
goDown : {
color : '#fff',
fontSize : '4rem',
},
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked ] = useState(false);

   useEffect(()=>{
    setChecked(true);
  },[]);

    return (
    <div className={classes.root} id="header">
        <AppBar className  = {classes.appbar} elevation = {0}>
            <Toolbar className={classes.appbarWraper}>
            <h1 className={classes.appbarTitle}>I am Bishwas Shrestha</h1>
            <IconButton>
                <SortIcon className={classes.icon}/>
            </IconButton>
            </Toolbar>
        </AppBar>
        <Collapse in = {checked} {...(checked ? { timeout  : 1500 } : {} )}>
        <div className={classes.container}>
            <h1 className={classes.title}>
                My Name <br />is Bishwas <span className={classes.colorText}>Shrestha</span>
            </h1>
            <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
            </Scroll>
        </div>
        </Collapse>
    </div>
  )
}
