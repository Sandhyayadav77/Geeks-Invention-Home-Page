import React from 'react'
import android from '../assets/images/platforms/android.svg'
import hybrid from '../assets/images/platforms/hybrid.svg'
import ios from '../assets/images/platforms/ios.svg'
import tv from '../assets/images/platforms/tv.svg'
import wearables from '../assets/images/platforms/wearables.svg'
import web from '../assets/images/platforms/web.svg'

const platforms = [
    {
        id: 1,
        img: web,
        name: 'Web'
    },
    {
        id: 2,
        img: ios,
        name: 'IOS'
    },
    {
        id: 3,
        img: android,
        name: 'Android'
    },
    {
        id: 4,
        img: hybrid,
        name: 'Hybrid'
    },
    {
        id: 5,
        img: wearables,
        name: 'Wearables'
    },
    {
        id: 6,
        img: tv,
        name: 'Tv'
    }]
const Software = () => {
    return (
        <>
            <div className="software min-h-full bg-[#16181C] w-screen pb-10">
                <div className="modern-platforms pt-14 w-full" data-aos="fade-up">
                    <div className="title mx-auto w-full text-center">
                        <h2 className='text-4xl leading-8 text-white md:text-5xl '>Software for modern platforms</h2>
                    </div>
                    <p className='text-white pt-[20px] pb-[40px] mx-auto w-full text-center md:text-xl'>We develop applications for mobile, web, wearables, and TV.</p>
                    <div className="platform-lists grid grid-cols-2 gap-11 md:flex md:justify-between md:items-center px-8">
                        {
                            platforms.map((platform, index) => <div key={index} className='individual-platform text-white flex flex-col justify-center items-center gap-6  '>
                                <img src={platform.img} alt={platform.name} />
                                <p className='font-semibold text-lg md:text-xl'>{platform.name}</p>
                            </div>)
                        }
                    </div>
                    <div className="btn text-[#ff5300] border-[1px] px-7 py-3 rounded-3xl w-fit mx-auto mt-16 border-[#ff5300] border-solid hover:tet-[] hover:text-black  flex justify-center items-center  transition-colors duration-300 ease-in-out hover:bg-white  transform ">
                        <a href="/" className='text-center w-full'>
                            <span className=' text-lg'>See our tech stack <span className='hover:translate-x-2 inline-block'>&rarr;</span></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Software