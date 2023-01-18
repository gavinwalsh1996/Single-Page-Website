import React, { useState } from 'react'

//Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

//Slides array
const slides = [
  {
    heading: 'WELCOME TO DEVEIRE',
    subHeading: 'Create just what you need for your perfect website. Choose from a wide range of Elements & simply put them on your own Canvas'
  },
  {
    heading: 'THIS IS THE SECOND HEADING IN THE SLIDESHOW',
    subHeading: 'This is the second sub-heading in the slideshow'
  },
  {
    heading: 'THIS IS THE THIRD HEADING IN THE SLIDESHOW',
    subHeading: 'This is the third sub-heading in the slideshow'
  },
]

function Slider() {

  //State to hold current slide in slideshow
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const handlePrev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  return (
  
    <div className='h-80 flex justify-between items-center'>
      <ArrowBackIosIcon style={{fontSize: 35, color: 'white', height: '4rem'}} className='bg-gray-900 opacity-30 rounded-md cursor-pointer' onClick={handlePrev} />
      <span className='text-center flex flex-col gap-6'>
        <h1 style={{fontSize: '24px', fontWeight: '800', letterSpacing: '3.2px', color: 'white'}}>{slides[currentSlide].heading}</h1>
        <h3 className='text-white text-xl'>{slides[currentSlide].subHeading}</h3>
      </span>
      <ArrowForwardIosIcon style={{fontSize: 35, color: 'white', height: '4rem'}} className='bg-gray-900 opacity-30 rounded-md cursor-pointer' onClick={handleNext} />
    </div>
    
  )
}

export default Slider;