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
// Array of objects for Price Cards
const priceCardsData = [
    { title: 'STARTER', price: '$7', accounts: '100 user Accounts', access: '1 Year Access' },
    { title: 'PROFESSIONAL', price: '$12', accounts: '1000 user Accounts', access: '2 Years Access' },
    { title: 'BUSINESS', price: '$19', accounts: '500 user Accounts', access: '3 Years Access' },
    { title: 'ENTERPRISE', price: '$29', accounts: '1000 user Accounts', access: '5 Years Access' },
  ];


function PriceCards() {

return (

    <div>
        <HeadingSubHeading headings={headings} />
        <div className="flex flex-wrap justify-center items-center gap-1">
            {/* Mapping through PriceCards array and printing a Price Card for each object in the array */}
            {priceCardsData.map((card) => (
                <PriceCard 
                title={card.title}
                price={card.price}
                accounts={card.accounts}
                access={card.access}
                />
            ))}
        </div>
        <Elipse />
    </div>

  )
}

export default PriceCards