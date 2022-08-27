import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CardMedia } from '@mui/material';
import { css } from "@mui/material";
import elephant_video from './assets/elephant_video.mp4'
import ourworld_short from './assets/ourworld_short.mp4'
import './HomePage.css'
import {Grid} from "@mui/material";
import {Paper} from "@mui/material";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';



function HomePage() {
    
return(
 <>

 <div className="landing-section">
      {/* <div className="overlay"/> */}
            <video className="media" src={ourworld_short} autoPlay loop muted/>
            <div className="landing-text">
                  <h1>&nbsp;</h1>
                  <h1>Learn why it needs protecting.</h1>
                  <KeyboardDoubleArrowDownIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} fontSize='large' />
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
            </div>


 </div>

<div className="home-explainer">
      <Paper elevation={3}>
            <div sx={{ maxWidth: 10, padding: 10}}>
            <h2 className="explainer-text">
            'The Environment'. We know its important, but sometimes we can't exactly explain why. 
            <br/> <br/>  
            Developed with the BBC, OurWorld gives you useful information and lessons to help 
            <br/>  
            understand the whats, whens, and most importantly, whys of climate change. Etc etc.
            <br/> <br/>  
            Click on the links below to learn and test your knowledge.
            </h2>
            </div>
      </Paper>
      
</div> 

<div className="landing-cards">

      <div className="individual-cards">
            <a href={'/ourstats'}>

            <Card 
                  elevation={24} 
                  sx={{ maxWidth: 400,
                              '&:hover': {
                        opacity: [0.9, 0.8, 0.7],
                        }}}>
                              <CardMedia
                              component="img"
                              height="300"
                              image="https://images.unsplash.com/photo-1502637098811-fa9526d2b659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"/>
                              <CardContent>
                              <Typography  variant="h5" component="div">
                              OurStats        
                              </Typography>
                              </CardContent>

            </Card>

      </a>
    </div>

    <div className="individual-cards">
       <a href={'/categories'}>

            <Card 
                  
                  elevation={24} 
                  sx={{ maxWidth: 400,
                              '&:hover': {
                        opacity: [0.9, 0.8, 0.7],
                        }}}>
                              <CardMedia
                              component="img"
                              height="300"
                              image="https://images.unsplash.com/photo-1581242163695-19d0acfd486f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"/>
                              <CardContent>
                              <Typography  variant="h5" component="div">
                              Lessons       
                              </Typography>
                              </CardContent>

            </Card>
      </a>
    </div>


</div> 

    {/* <div className="home-explainer2">
      <Paper elevation={3}>
            <div sx={{ maxWidth: 10, padding: 10}}>
            <h2 className="explainer-text"> 
            Important - this website is under development. 
            <br/>
            Therefore, some are some elements of the functionality that are incomplete.
            </h2>
            </div>
      </Paper>
      

      </div> */}

</>
)
}


export default HomePage;
