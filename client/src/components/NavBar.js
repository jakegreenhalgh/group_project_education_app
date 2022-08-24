import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import PublicIcon from '@mui/icons-material/Public';


// State for opening and closing the menus

const NewAppBar = () => {


// * state and functions for collapsing the menu to burger

  // const [anchorElNav, setAnchorElNav] = useState(null);
  
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };


  
  
  
  // State for determining the formatting of the top menu bar?
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    // <ThemeProvider>
    <AppBar position="sticky" sx={{ background: 'black' }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>


          {/* Below renders the icon/logo ---------------------------------------------------------- */}

          <PublicIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} fontSize='large' />
          
          {/* Below renders logo text ---------------------------------------------------------- */}
          
          <Typography
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Staatliches',
              fontWeight: 800,
              fontSize: 60,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            OurWorld
            {/* OurEarth, Urth */}
          </Typography>

          {/* Below renders the shrinken menu when ratio is reduced  ---------------------------------------------------------- */}

{/* 
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="xl"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

            {/* Below renders Compact Icon and Logo  ---------------------------------------------------------- */}

          {/* <PublicIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Arial',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            COMPACT CAJJ
          </Typography> */}

          {/* Below renders menu buttons  ---------------------------------------------------------- */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Button component={Link} to="/ourstats" sx={{ my: 2, color: 'white', display: 'block' }}>
                  OurStats
              </Button>
              <Button component={Link} to="/categories" sx={{ my: 2, color: 'white', display: 'block' }}>
                  Lessons
              </Button>
              <Button component={Link} to="/statistics" sx={{ my: 2, color: 'white', display: 'block' }}>
                  Profile
              </Button>
  
          </Box>

            {/* Below renders Profile menu  ---------------------------------------------------------- */}


          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar 
                // alt="Andrew" src="/static/images/avatar/2.jpg" 
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem component={Link} to="/login" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Log In</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/statistics" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/login" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Log Out</Typography>
                </MenuItem>

            </Menu>
          </Box>


          
        </Toolbar>
      </Container>
    </AppBar>
    // </ThemeProvider>
  );
};
export default NewAppBar;


