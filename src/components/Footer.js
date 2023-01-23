import React from 'react'

//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { GitHub } from '@mui/icons-material';
import TagFacesIcon from '@mui/icons-material/TagFaces';

function Footer() {

  return (

  <footer className="bg-gray-900 dark:bg-slate-600 text-white p-4 h-60 flex flex-col justify-around items-center sm:flex-row">
    <div className="w-full text-center flex flex-col justify-start items-start gap-4 sm:w-1/3">
        <h5 className="font-medium">Copyrights <CopyrightIcon/> 2022 All rights reserved by Deveire</h5>
        <p className="text-sm">Terms of use / Privacy Policy</p>
    </div>
    
    <div className="flex justify-between items-center sm:w-1/3">
        <div className="text-center flex flex-col justify-start items-start gap-4">
            <span className='flex gap-6 cursor-pointer'>
              <FacebookIcon sx={{"&:hover": {color: "#00acee"}}}/>
              <TwitterIcon sx={{"&:hover": {color: "#00acee"}}}/>
              <GoogleIcon sx={{"&:hover": {color: "#00acee"}}}/>
              <PinterestIcon sx={{"&:hover": {color: "#00acee"}}}/>
              <GitHub sx={{"&:hover": {color: "#00acee"}}}/>
              <LinkedInIcon sx={{"&:hover": {color: "#00acee"}}}/></span>
            <span className='flex flex-wrap text-xs gap-2 cursor-pointer'><MailOutlineIcon/>Info@deveire.com <HeadphonesIcon/> +91-11-6541-6369 <TagFacesIcon/> CanvasOnSkype</span>
        </div>
    </div>
  </footer>


  )
}

export default Footer