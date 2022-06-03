import { BottomNavigation, BottomNavigationAction,  } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ExploreIcon from '@mui/icons-material/Explore';
import SettingsIcon from '@mui/icons-material/Settings';

import { useState } from "react";


export const BottomNavigationMenu = () => {
    const [value, setValue] = useState(0)
    return (
        <BottomNavigation 
        sx={{ width: '100%', position: 'fixed', bottom: 0, display: { sm: 'none' }}} 
        value={value} 
        onChange={(event, newValue) => { 
            setValue(newValue)
        }} 
        showLabels
        >
            <BottomNavigationAction label='Home' icon={<HomeIcon />} />
            <BottomNavigationAction label='Donate' icon={<VolunteerActivismIcon />} />
            <BottomNavigationAction label='News' icon={<ExploreIcon />} />
            <BottomNavigationAction label='Settings' icon={<SettingsIcon />} />
        </BottomNavigation>
    )
}