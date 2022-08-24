import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { CardMedia } from '@mui/material';
import { css } from "@mui/material";
import elephant_video from './assets/elephant_video.mp4'
import './HomePage.css'
import {Grid} from "@mui/material";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function HomePage() {
    
return(
 <>

 <div className="landing-section">
      {/* <div className="overlay"/> */}
            <video className="media" src={elephant_video} autoPlay loop muted/>
            <div className="landing-text">
                  <h1>Learn why it needs protecting.</h1>
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
            </div>


 </div>
 {/* <div className="landing-section">
            <img className="media" src="https://images.unsplash.com/photo-1563994798145-aac79dece602?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"/>
            <div className="landing-text">
                  <h1>Learn why it needs protecting.</h1>
            </div>
 </div> */}



{/* OURSTATS / LESSONS CARDS */}

<div className="box1">

      <div>

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

    </div>

    <div>

            <Card 
                  elevation={24}
                  sx={{ maxWidth: 400,
                              '&:hover': {
                        opacity: [0.9, 0.8, 0.7],}}}>
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
    </div>

</div>

</>
)
}


export default HomePage;
