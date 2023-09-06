import React from 'react'
import geekslogo from '../assets/images/geekslogo.svg'
const navbar = [
    {
        id: 1,
        link: 'Works',
        href: '/'
    },
    {
        id: 2,
        link: 'Technologies',
        href: '/'
    },
    {
        id: 3,
        link: 'Services',
        href: '/'
    },
    {
        id: 4,
        link: 'Company',
        href: '/'
    },
    {
        id: 5,
        link: 'Contacts',
        href: '/'
    },
    {
        id: 6,
        link: 'Terms and Conditions',
        href: '/'
    },
    {
        id: 7,
        link: 'Privacy Policy',
        href: '/'
    },
]


const Footer = () => {
    return (
        <>
            <div className="footer relative w-full h-screen bg-[#16181C] flex flex-col justify-between">
                <div className="footer-msg-section w-[80%] mt-44 mx-auto  flex flex-col justify-center items-center ">
                    <div className="title text-white text-center ">
                        <h2 className='text-4xl leading-10 md:text-[48px] pb-[30px]'>Get to know us better!</h2>
                        <div className="text px-5 pb-5">
                            <p>
                                It is a pleasure to have you on our website. Let us know if there's an opportunity to do something together.
                            </p>
                        </div>
                        <div className="btn bg-[#ff5300] text-white border-[1px] px-7 py-3 rounded-3xl w-fit mx-auto mt-16 border-[#ff5300] border-solid hover:tet-[] hover:text-black  flex justify-center items-center  transition-colors duration-300 ease-in-out hover:bg-white  transform ">
                            <a href="/" className='text-center w-full'>
                                <span className=' text-lg'>Drop us a message <span className='hover:translate-x-2 inline-block'>&rarr;</span></span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* main footer */}
                <div className="main-footer w-full bg-[#16181C] mx-auto flex flex-col justify-center items-center py-5">
                    <img src={geekslogo} alt="Geeks Inverntion" />
                    <p className='text-gray-400  text-center w-[49%]' > 447 Broadway, 2nd Floor Suite #772, New York 10013, United States
                        <br /> +1-347-535-0004 </p>
                    <nav className='py-8 px-7'>
                        <ul className='text-white flex  justify-center items-center space-x-5 flex-wrap'>
                            {
                                navbar.map((navItem, index) => <li key={index}>
                                    <a href={navItem.href}>
                                        <span>{navItem.link}</span>
                                    </a>

                                </li>)
                            }
                        </ul>
                    </nav>
                    <div className="btn text-white border-[1px] px-7 py-3 rounded-3xl w-fit mx-auto mt-16 border-white border-solid hover:tet-[] hover:text-black  flex justify-center items-center  transition-colors duration-300 ease-in-out hover:bg-white  transform ">
                        <a href="/" className='text-center w-full'>
                            <span className=' text-lg'>Stay tuned for our updates</span>
                        </a>
                    </div>
                    <p className='text-gray-400 text-center pt-5'>©&nbsp;Copyright 2023
                        <span> – Mobile App Design and Development Company</span>. All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer