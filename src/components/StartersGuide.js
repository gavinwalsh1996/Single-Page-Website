import React from 'react'

//Components
import HeadingSubHeading from './HeadingSubHeading'

//Icons
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

//Headings props to pass to Heading component
const headings = {
    heading: 'STARTERS GUIDE TO CREATE LANDING PAGES',
    subHeading: 'Building a landing page was never so easy & interactive.'
}


function StartersGuide() {

  return (
      //It's probabaly not best practice in terms of performance
      //but I've spaced the elements out to make them more readable for this test as Tailwind can be hard to read sometimes.
    <div className='p-10 bg-slate-100 dark:bg-slate-900'>
      <HeadingSubHeading headings={headings}/>

      <div className='flex justify-center items-center gap-6'>
        <button className="hover:bg-indigo-800 text-white px-4 py-2 rounded-lg 
        bg-indigo-600 transition-colors duration-300 ease-in-out w-80 whitespace-nowrap">
          <StarIcon/> 
          <span className='hidden sm:inline '>START YOUR </span>
          <span className='sm:inline'>FREE TRIAL</span>
        </button>

        <span className='dark:text-white'>- OR -</span>

        <button className="bg-red-600 text-white px-4 py-2 rounded-lg 
        hover:bg-red-800 transition-colors duration-300 ease-in-out w-80 whitespace-nowrap">
          <PersonIcon/>
          <span className='hidden sm:inline'>SIGN UP FOR A </span>
          <span className='sm:inline'>SUBSCRIPTION</span>
        </button>

      </div>
    </div>


  )
}

export default StartersGuide