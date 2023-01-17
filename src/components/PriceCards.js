import React from 'react'

//Components
import HeadingSubHeading from './HeadingSubHeading'
import PriceCard from './PriceCard'
import Elipse from './Elipse'

//Headings props to pass to Heading component
const headings = {
    heading: 'SMART PRICING',
    subHeading: 'Flexible & Easy pricing for wide audience groups.'
}


function PriceCards() {

return (

   <div>
        <HeadingSubHeading headings={headings}/>
        {/* <PriceCard /> */}

        <div className="flex flex-wrap justify-center items-center gap-1">
            <PriceCard title="STARTER" price="$7" />
            <PriceCard title="PROFESSIONAL" price="$12" />
            <PriceCard title="BUSINESS" price="$19" />
            <PriceCard title="ENTERPRISE" price="$29" />
        </div>
        <Elipse />
    </div>

  )
}

export default PriceCards