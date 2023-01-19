import React from 'react';

const PriceCard = ({ title, price, accounts, access, popular }) => { //Receives title and price props from parent
    return (
        <div className="bg-slate-300 p-6 border-2 cursor-pointer hover:bg-white hover:scale-110 transition-all ease-in duration-300 ...">
            <h3 className="text-lg font-medium mb-2 border-b-2">{title}</h3>
            <span className='text-xs text-red-600'>{popular}</span>
            <div className="text-2xl font-medium border-b-2">{price}</div>
            <ul className="pl-4 mb-4 list-none border-b-2">
                <li>Full Access</li>
                <li>Source Files</li>
                <li>{accounts}</li>
                <li>{access}</li>
                <li>Phone and Email Support</li>
             </ul>
             <button className="bg-red-600 hover:bg-indigo-800 text-white px-4 py-2 rounded-lghover:bg-indigo-600
              transition-colors duration-300 ease-in-out">Sign Up</button>
        </div>
    );
};

export default PriceCard;



