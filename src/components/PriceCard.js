import React from 'react'

function PriceCard() {

  return (
    <div className="bg-slate-400 rounded-lg p-3 sm:p-6 md:p-6 lg:p-6 shadow-md flex flex-col justify-center text-center sm:gap-12 gap-2 w-full border-2 hover:bg-slate-100 cursor-pointer hover:p-12">
        <span className='border-b-2'><h2 className="text-lg font-medium mb-2">STARTER</h2></span>
        <div className="text-gray-600 mb-4 border-b-2 text-3xl">$7/mo</div>
            <ul className="pl-4 mb-4 list-none border-b-2">
                <li>Full Access</li>
                <li>Source Files</li>
                <li>100 User Accounts</li>
                <li>1 Year Access</li>
                <li>Phone and Email Support</li>
             </ul>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Sign Up</button>
    </div>
  )
}

export default PriceCard