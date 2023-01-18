import React from 'react'

//Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

//Components
import Elipse from './Elipse';
import HeadingSubHeading from './HeadingSubHeading';

//Headings props to pass to Heading component
const headings = {
    heading: 'FEATURES OVERVIEW',
    subHeading: 'Some of the features that are going to blow your mind off.'
}

// Instead of writting out each element, I combined the array and map method to use less code which makes it easier to make style changes in the future.
const gridContent = Array.from({length:9}, () => (
    {
        heading: 'RESPONSIVE LAYOUT',
        subHeading: 'Powerful layout with responsive functionality that can be adapted to any screen size.', 
    }
));


function FeaturesGrid() {

  return (

    <div className='mt-32 mb-32'>
        <HeadingSubHeading headings={headings}/>

        <div className="grid sm:grid-cols-3">

            {gridContent.map((item) => (
                <div className="col-span-1 flex flex-col justify-center items-center p-10 ">
                    <span className='flex gap-4 text-lg font-medium dark:text-white sm:font-medium md:font-bold' style={{letterSpacing: '0.75px'}}><PlayArrowIcon sx={{color: '#1abc9c'}}/>{item.heading}</span>
                    <span className='text-sm' style={{fontSize: '14px', color: '#999', lineHeight: '1.79'}}>{item.subHeading}</span>
                </div>
            ))}
        </div>

        <Elipse />

    </div>

  )
}

export default FeaturesGrid
          
