import React from 'react'

//Components
import HeadingSubHeading from './HeadingSubHeading'

//Headings props to pass to Heading component
const headings = {
    heading: 'SMART PRICING',
    subHeading: 'Flexible & Easy pricing for wide audience groups.'
}

function ContentGrid() {

  return (

    <div>
        <HeadingSubHeading headings={headings}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 text-center p-10">
            <div className="bg-white dark:bg-slate-900 p-4 flex flex-col justify-center items-start gap-6">
                <h2 className="text-lg font-medium dark: dark:text-white">Q. How do I become an author?</h2>
                <p className="text-gray-700 text-left dark:text-white border-b-2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
            </div>      
       
            <div className="bg-white dark:bg-slate-900 p-4 flex flex-col justify-center items-start gap-6">
                <h2 className="text-lg font-medium dark: dark:text-white">Q. How do I become an author?</h2>
                <p className="text-gray-700 text-left dark:text-white border-b-2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
            </div>      
       
            <div className="bg-white dark:bg-slate-900 p-4 flex flex-col justify-center items-start gap-6">
                <h2 className="text-lg font-medium dark: dark:text-white">Q. How do I become an author?</h2>
                <p className="text-gray-700 text-left dark:text-white border-b-2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
            </div>      
       
            <div className="bg-white dark:bg-slate-900 p-4 flex flex-col justify-center items-start gap-6">
                <h2 className="text-lg font-medium dark: dark:text-white">Q. How do I become an author?</h2>
                <p className="text-gray-700 text-left dark:text-white border-b-2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
            </div>      
       
            <div className="bg-white dark:bg-slate-900 p-4 flex flex-col justify-center items-start gap-6">
                <h2 className="text-lg font-medium dark: dark:text-white">Q. How do I become an author?</h2>
                <p className="text-gray-700 text-left dark:text-white border-b-2">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
            </div>   
       
      
    </div>

    </div>
    
  )
}

export default ContentGrid