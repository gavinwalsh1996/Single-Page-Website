import React from 'react'

//Components
import HeadingSubHeading from './HeadingSubHeading'
import PriceCard from './PriceCard'

//Headings props to pass to Heading component
const headings = {
    heading: 'SMART PRICING',
    subHeading: 'Flexible & Easy pricing for wide audience groups.'
}

function PriceCards() {

return (

   <div>
        <HeadingSubHeading headings={headings}/>
        <div className='grid sm:grid-cols-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-10'>
            <PriceCard />
        </div>
    </div>

  )
}

export default PriceCards