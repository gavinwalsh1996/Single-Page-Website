import React from 'react';

const PriceCard = ({ title, price, list}) => {
    return (
        <div className="bg-slate-300 p-6 border-2 cursor-pointer hover:bg-white hover:scale-110 transition-all ease-in duration-300 ...">
            <h3 className="text-lg font-medium mb-2 border-b-2">{title}</h3>
            <div className="text-2xl font-medium">{price}</div>
            <ul className="pl-4 mb-4 list-none border-b-2">
                <li>Full Access</li>
                <li>Source Files</li>
                <li>100 User Accounts</li>
                <li>1 Year Access</li>
                <li>Phone and Email Support</li>
             </ul>
             <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300 ease-in-out">Sign Up</button>
        </div>
    );
};

export default PriceCard;



