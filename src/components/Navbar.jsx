import React, { useState } from 'react';
import geeksLogo from '../assets/images/geekslogo.svg';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import gLetter from '../assets/images/gLetter.png';

const menuItems = [
  { text: 'HOME', link: '#' },
  { text: 'WORKS', link: '#' },
  { text: 'TECHNOLOGIES', link: '#' },
  { text: 'SERVICES', link: '#' },
  { text: 'COMPANY', link: '#' },
  { text: 'CONTACTS', link: '#' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[916px] bg-[#16181C] w-screen relative">
      <div className="top-header flex justify-between px-3 py-4 items-center">
        <div className="logo">
          <img src={geeksLogo} alt="geeksLogo" />
        </div>
        <div className="menu">
          {/* mobile */}
          <button className="md:hidden" onClick={toggleMenu}>
            <div className="text-white p-1 bg-gray-900 w-fit rounded-md">
              {isOpen ? (
                <RxCross1 size={33} />
              ) : (
                <RxHamburgerMenu size={33} />
              )}
            </div>
          </button>
          <div className={`md:hidden ${isOpen ? '' : 'hidden'} z-[10000]`}>
            <div
              className="fixed inset-0 z-50 bg-black -transform ease-in-out duration-300 transform"
              style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black"></div>
              <div className="px-2 pt-2 pb-3 space-y-1 relative">
                <button
                  onClick={toggleMenu}
                  className="absolute top-2 right-2 text-white hover:text-gray-300 focus:outline-none"
                >
                  <RxCross1 size={30} />
                </button>
                <div className="mobile-menu flex flex-col w-full h-screen justify-center items-center space-y-3">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="text-white hover:text-gray-300"
                    >
                      <li className={`text-white list-none hover:text-gray-300 ${index === 0 ? 'underline-orange' : 'hover-orange-underline'}`}>
                        {item.text}
                      </li>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-4 cursor-pointer">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`text-white  list-none hover:text-gray-300 ${index === 0 ? 'underline-orange' : 'hover-orange-underline'}`}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* G-section */}
      <div className="absolute mx-auto h-full flex justify-center items-center w-screen p-4 bottom-5">
        <img src={gLetter} alt="" />
      </div>
      <div className="absolute mx-auto text-center h-full flex flex-col justify-center items-center w-screen font-bold bottom-5">
        <p className="text-white text-4xl md:text-7xl">EMBRACE THE FUTURE</p>
        <p className="text-white mx-auto text-center font-semibold text-2xl mt-6 md:text-4xl md:mt-8">Welcome to the Age of Action</p>
      </div>
    </div>
  );
};

export default Navbar;

