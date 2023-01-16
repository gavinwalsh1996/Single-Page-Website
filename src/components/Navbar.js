import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar({links, logo}) {


    // State to open and close nav bar on mobile
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className={`bg-slate-500 text-white py-3 px-5 flex justify-around items-end flex-col lg:flex-row`}>

        {/* Logo */}
        <span className="lg:block hidden cursor-pointer"><img src={logo.Image}></img></span>

        {/* Button for mobile nav */}
      <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon />
          )}
      </button>

        {/* Links */}
      <div className={`${ isOpen ? "block" : "hidden" } lg:flex lg:items-center lg:w-auto h-screen lg:h-16 `} >
        <div className="flex flex-col text-sm lg:flex-grow lg:flex-row gap-12 sm:p-0 p-5">

            {links.map((link) => (
             <>
                <span className="z cursor-pointer">{link}</span>
            </>
            ))}

        </div>
      </div>

    </nav>
  );
}

export default Navbar;


