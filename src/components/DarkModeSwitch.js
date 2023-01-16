import React, { useState, useEffect } from "react";
//Icons 
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


function DarkModeSwitch() {

    //State to toggle darkmode
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme])

    //Function that handles onClick event and toggles light & dark mode
    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }


  return (

    // Will need to change padding to parent div
    <div className="pt-32"> 
        <span className="cursor-pointer">
            {theme === 'dark' 
            ? <span className="flex gap-2 italic"><DarkModeIcon sx={{fontSize: 35, color: 'white'}} onClick={handleThemeSwitch} className='bg-purple-700 h-14 rounded-2xl' />Dark</span> 
            : <span className="flex gap-2 italic"><LightModeIcon sx={{fontSize: 35, color: 'white'}} onClick={handleThemeSwitch} className='bg-purple-700 h-14 rounded-2xl' />Light</span>}
        </span>
    </div>

  )
}

export default DarkModeSwitch