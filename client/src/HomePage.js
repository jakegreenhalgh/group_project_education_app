import { useEffect, useState } from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { styled, makeStyles } from '@material-ui/core/styles'
// import ThermostatIcon from '@mui/icons-material/Thermostat';
// import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Button from '@material-ui/core/Button';


// file for homepage don't think we will use states on this page just visual

// const useStyles = makeStyles((theme) => ({
//     root: {
//         minHeight: '100vh',
//         backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/forest.jpg"})`,
//     }
// }))





function HomePage() {
    
    const MyButton = styled(Button)({
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      });
      
      

    function StyledComponents() {
    }
    // const classes = useStyles();


return(
 <>
    {/* <div className={classes.root}></div> */}

    <p>testing</p>
    {/* <MyButton>Styled Components</MyButton> */}
</>
)
}


export default HomePage;