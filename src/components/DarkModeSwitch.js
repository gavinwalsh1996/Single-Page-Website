import React from "react";

//Icons 
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


function DarkModeSwitch({handleThemeSwitch, theme}) {
  //Takes in theme change function and current state of theme (light or dark). Icons are rendered conditionally

  return (

    <div className="pt-32 fixed"> 
        <span className="cursor-pointer">
            {theme === 'dark' 
            ? <span className="flex gap-2 italic"><DarkModeIcon sx={{fontSize: 35, color: 'white'}} 
                onClick={handleThemeSwitch} 
                className='hover:bg-yellow-400 h-14 rounded-2xl bg-purple-400' />
                <span className="text-white text-xs">Dark, shhh..</span>
              </span> 

            : <span className="flex gap-2 italic"><LightModeIcon sx={{fontSize: 35, color: 'white'}}
                    onClick={handleThemeSwitch} 
                    className='hover:bg-yellow-400 h-14 rounded-2xl bg-purple-400' />
                    <span className="text-white text-xs">Light</span>
              </span>}
        </span>
    </div>

  )
}

export default DarkModeSwitch