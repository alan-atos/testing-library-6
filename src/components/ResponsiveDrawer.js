import { BrowserRouter, Link, NavLink, Route, RouterLink, Routes, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Confirm } from '../pages/Confirm';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { Donate } from '../pages/Donate';
import Drawer from '@mui/material/Drawer';
import { Home } from '../pages/Home';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { NotFoundPage } from '../pages/NotFoundPage';
import PersonIcon from '@mui/icons-material/Person';
import { Reports } from '../pages/Reports';
import { ReviewDonationInformation } from '../pages/ReviewDonationInformation';
import StarIcon from '@mui/icons-material/Star';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

// import { News } from '../pages/News';









const drawerWidth = 240;

export default function ResponsiveDrawer() {


  const [ mobileOpen, setMobileOpen ] = useState( false );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItemButton component={Link} to='/'>
          <ListItemIcon>
                <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </List>
      <Divider />
      <List >
        <ListItemButton component={Link} to='/donate'>
            <ListItemText primary="Donate"  />
            <ListItemIcon>
              {/* <StarIcon style={{ color: '#F96302' }} /> */}
            </ListItemIcon>
        </ListItemButton>
        <ListItemButton component={Link} to='/news'>
            <ListItemText primary="Search"  />
        </ListItemButton>
      </List>
      <Divider />
      <List >

        {/* <ListItemButton component={Link} to='/campaigns'>
            <ListItemText primary="Campaigns"  />
        </ListItemButton> */}
        <ListItemButton component={Link} to='/reports'>
            <ListItemText primary="Reports"  />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
              <ListItemText primary="My Details" />
        </ListItemButton>
      </List>
      <Divider />
      <List >
        <ListItemButton component={Link} to='/myTaxRecords'>
            <ListItemText primary="My tax records"  />
        </ListItemButton>
        <ListItemButton component={Link} to='/logout'>
            <ListItemText primary="Log out"  />
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      id="appBarTest"
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "white",
        color: "black",
        boxShadow: "0 0 0 0"
        }}
        >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Contributions Manager
          </Typography>
        </Toolbar>
      </AppBar>


      <BrowserRouter>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        >

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>


      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
        <Toolbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          {/* <Route path="/News" element={<News />} /> */}
          {/* <Route path="/Campaigns" element={<Campaigns />} /> */}
          <Route path="/Reports" element={<Reports />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />

          <Route path="/confirm" element={<Confirm />} />
          <Route path="/review" element={<ReviewDonationInformation />} />
        </Routes>


        </Box>
      </BrowserRouter>
    </Box>
  );
}



