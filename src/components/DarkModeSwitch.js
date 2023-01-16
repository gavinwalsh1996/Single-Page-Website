import React, { useState, useEffect } from "react";
//Icons 
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


function DarkModeSwitch({handleThemeSwitch, theme}) {

  return (

    // Will need to change padding to parent div
    <div className="pt-32"> 
        <span className="cursor-pointer">
            {theme === 'dark' 
            ? <span className="flex gap-2 italic"><DarkModeIcon sx={{fontSize: 35, color: 'white'}} onClick={handleThemeSwitch} className='bg-yellow-400 h-14 rounded-2xl hover:bg-purple-400' /><span className="text-white">Dark</span></span> 
            : <span className="flex gap-2 italic"><LightModeIcon sx={{fontSize: 35, color: 'white'}} onClick={handleThemeSwitch} className='bg-yellow-400 h-14 rounded-2xl hover:bg-purple-400' /><span className="text-white">Light</span></span>}
        </span>
    </div>

  )
}

export default DarkModeSwitch