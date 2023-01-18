import React, { useState, useEffect } from "react";
//Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Navbar({links, logo}) {


    // State to open and close nav bar on mobile
    const [isOpen, setIsOpen] = useState(false);

    //State to track scroll for navbar
    const [scrolled, setScrolled] = useState(false);

    // Function to handle scroll event and to update the scroll state. 
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);



  return (

    <nav className={`bg-transparent text-white py-3 px-5 flex justify-around items-end flex-col lg:flex-row border-b-2 border-white fixed w-full z-50 ${scrolled ? 'bg-slate-900 dark:bg-slate-900' : ''}`}>

        {/* Logo */}
        <span className="lg:block hidden cursor-pointer"><img src={logo.Image} alt='Logo'></img></span>

        {/* Button for mobile nav */}
      <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon />
          )}
      </button>

        {/* Links */}
      <div className={`${ isOpen ? "block" : "hidden" } lg:flex lg:items-center lg:w-auto h-screen lg:h-20`} >
        <div className="flex flex-col text-sm lg:flex-grow lg:flex-row gap-12 sm:p-0 p-5">

            {links.map((link) => (
                <>
                    <div className="group text-white transition duration-300 cursor-pointer">{link}<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-white"></span></div>
                </>
            ))}

        </div>
      </div>

    </nav>
  );
}

export default Navbar;


