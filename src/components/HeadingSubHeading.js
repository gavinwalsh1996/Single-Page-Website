import React from 'react'

function HeadingSubHeading({headings}) {

  //Destructuring headings object
  const {heading, subHeading} = headings

  return (

    <div className='flex flex-col justify-center items-center gap-4 p-10'>
        <span className='text-2xl sm:text-4xl font-bold dark:text-white text-gray-900' 
        style={{heigth: '23px', lineHeight: 1.03}}>{heading}</span>

        <span className='sm:text-2xl text-md dark:text-white text-gray-400' 
        style={{height: '21px', fontWeight: '300', lineHeight: 1.38}}>{subHeading}</span>
    </div>

  )
}

export default HeadingSubHeading