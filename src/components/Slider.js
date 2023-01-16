import React from 'react'

//Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Slider() {

  return (

    <div className='h-80 flex justify-between items-center'>
      <ArrowBackIosIcon style={{fontSize: 35, color: 'white', height: '4rem'}} className='bg-gray-900 opacity-30 rounded-md cursor' />
      <span className='text-center flex flex-col gap-6'>
        <h1 style={{fontSize: '64px', fontWeight: '800', letterSpacing: '3.2px', color: 'white'}}>WELCOME TO DEVEIRE</h1>
        <h3 className='text-white text-xl'>Create just what you need for your perfect website. Chose from a wide range of elements & simply put them on your own canvas.</h3>
      </span>
      <ArrowForwardIosIcon style={{fontSize: 35, color: 'white', height: '4rem'}} className='bg-gray-900 opacity-30 rounded-md cursor-pointer'/>
    </div>

  )
}

export default Slider