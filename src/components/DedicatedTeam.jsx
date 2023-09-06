import React from 'react'
import agile from '../assets/images/DedicatedTeam/agile.svg'
import deepTech from '../assets/images/DedicatedTeam/deepTech.svg'
import personalCommit from '../assets/images/DedicatedTeam/personalCommit.svg'
import regularReporting from '../assets/images/DedicatedTeam/regularReporting.svg'
import scalability from '../assets/images/DedicatedTeam/scalability.svg'
import time from '../assets/images/DedicatedTeam/time.svg'


const dedicatedPlatforms = [
    {
        id: 1,
        img: agile,
        name: 'agile approach'
    },
    {
        id: 2,
        img: deepTech,
        name: 'Deep tech expertise'
    },
    {
        id: 3,
        img: personalCommit,
        name: 'Personal commitment'
    },
    {
        id: 4,
        img: regularReporting,
        name: 'Regular reporting'
    },
    {
        id: 5,
        img: scalability,
        name: 'Time tracking'
    },
    {
        id: 6,
        img: time,
        name: 'Scalability'
    }]
const DedicatedTeam = () => {
    return (
        <div className='h-full  w-screen bg-[#16181C] md:bg-[#23252C] py-20 relative'>
            <div className="dedicated-team w-full text-white mx-auto md:w-[80%] ">
                <h2 className='title text-center text-4xl py-[10px] '>Only dedicated teams</h2>
                <div className="content text-center py-[15px] "><p>
                    Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.
                </p>
                </div>
                <div className="dt-logos w-full mx-auto md:grid md:grid-cols-3">
                    {
                        dedicatedPlatforms.map((dedicatedPlatform, index) => <div key={index} className='flex justify-center items-center gap-5 flex-col p-6'>
                            <img src={dedicatedPlatform.img} alt={dedicatedPlatform.name} />
                            <p className='text-white text-xl md:text-2xl mx-auto text-center capitalize'>{dedicatedPlatform.name}</p></div>)
                    }
                </div>
                {/* button */}
                <div className="btn text-[#ff5300] border-[1px] px-7 py-3 rounded-3xl w-fit mx-auto mt-16 border-[#ff5300] border-solid hover:tet-[] hover:text-black  flex justify-center items-center  transition-colors duration-300 ease-in-out hover:bg-white  transform ">
                    <a href="/" className='text-center w-full'>
                        <span className=' text-lg'>See our services<span className='hover:translate-x-2 inline-block'>&rarr;</span></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DedicatedTeam