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
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';



function HomePage() {
    
return(
 <>

 <div className="landing-section">
      {/* <div className="overlay"/> */}
            <video className="media" src={elephant_video} autoPlay loop muted/>
            <div className="landing-text">
                  <h1>Learn why it needs protecting.</h1>
                  <h1>&nbsp;</h1>
                  <KeyboardDoubleArrowDownIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} fontSize='large' />
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
                  <h1>&nbsp;</h1>
            </div>


 </div>

 {/* <div className="explainer-text">
      <h3>'The Environment'...can kind of feel a little complicated to understand, right? We know it's important, but sometimes it can be hard to pinpoint why. OurWorld gives you useful information and lessons to help you understand the what, whens, wheres, hows and whys of climate blah blah blah blah</h3>
</div>  */}

<div className="landing-cards">

      <div className="individual-cards">
            <a href={'/'}>

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

</>
)
}


export default HomePage;
