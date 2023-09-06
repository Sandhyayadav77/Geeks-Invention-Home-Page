import React from 'react'
import fintechSolution from '../assets/images/Services/fintechSolution.svg'
import industrialIot from '../assets/images/Services/industrialIot.webp'
import smartEducation from '../assets/images/Services/smartEducation.webp'
const ServicesSection = () => {
    return (
        <>
            <div className="services-wrapper ">
                <div className="individual-wrapper">
                    {/* 1st secction */}
                    <div className="min-h-screen w-screen bg-[#3F2CAA] lg:bg-[#16181C] py-8 px-5 md:flex md:flex-row-reverse justify-between items-center">
                        <div className="img-section h-full w-full basis-[50%]">
                            <img src={fintechSolution} alt="fintechSolution" />
                        </div>
                        <div className="div text-section text-left text-white basis-[50%]" data-aos="fade-up">
                            <h3 className="text-6xl text-white">Fintech Solution</h3>
                            <p className=' text-2xl text-gray-400 py-2'>Transforming Fintech with AI</p>
                            <div className="tags mt-5">
                                <span className='text-center inline-block leading-9 text-white bg-[#ffffff1c] text-sm px-3 rounded-[30px] mr-2'>Fraud detection</span>
                                <span className='text-center inline-block leading-9 text-white bg-[#ffffff1c] text-sm px-3 rounded-[30px] mr-2'>Transaction categorisation</span>
                                <span className='text-center inline-block leading-9 text-white bg-[#ffffff1c] text-sm px-3 rounded-[30px] mr-2'>Risk Scoring</span>
                            </div>
                            <div className="content mt-3">
                                <p className='text-white text-base'>
                                    Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets
                                </p>
                            </div>
                            <div className="btn text-white border-[1px] px-7 py-3 rounded-3xl w-fit max-md:mx-auto mt-16 border-white border-solid hover:tet-[] hover:text-black  flex justify-center items-center md:justify-start md:items-start md:self-start transition-colors duration-300 ease-in-out hover:bg-white  transform ">
                                <a href="/" className='text-center w-full'>
                                    <span className=' text-lg'>See full case study <span className='hover:translate-x-2 inline-block'>&rarr;</span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* 2nd section */}
                    <div className="min-h-screen w-screen bg-[#02B5AC] lg:bg-[#16181C] py-8 px-5 md:flex md:flex-row justify-between items-center">
                        <div className="img-section h-full w-full basis-[50%]">
                            <img src={industrialIot} alt="Industrial IoT" />
                        </div>
                        <div className="div text-section text-left text-white basis-[50%] max-md:mt-3 md:pl-10" data-aos="fade-up">
                            <h3 className="text-6xl text-white">Industrial IoT</h3>
                            <p className=' text-2xl text-gray-400 py-2'>Providing a better connected experience</p>
                            <div className="tags mt-5">
                                <span className='text-center inline-block leading-9 text-white bg-[#ffffff1c] text-sm px-3 rounded-[30px] mr-2'>Connected manufacturing</span>
                                <span className='text-center inline-block leading-9 text-white bg-[#ffffff1c] text-sm px-3 rounded-[30px] mr-2'>Aviation</span>
                                <span className='text-center inline-block leading-9 text-white bg-[#ffffff1c] text-sm px-3 rounded-[30px] mr-2'>Smart Building</span>
                            </div>
                            <div className="content mt-3">
                                <p className='text-white text-base'>

                                    Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.

                                </p>
                            </div>
                            <div className="btn text-white border-[1px] px-7 py-3 rounded-3xl w-fit max-md:mx-auto mt-16 border-white border-solid hover:tet-[] hover:text-black  flex justify-center items-center md:justify-start md:items-start md:self-start transition-colors duration-300 ease-in-out hover:bg-white  transform ">
                                <a href="/" className='text-center w-full'>
                                    <span className=' text-lg'>See full case study <span className='hover:translate-x-2 inline-block'>&rarr;</span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* 3rd section */}
                    <div className="min-h-screen w-screen bg-[#19181E] lg:bg-[#16181C] py-8 px-5 md:flex md:flex-row justify-between items-center">
                        <div className="img-section h-full w-full basis-[50%]">
                            <img src={smartEducation} alt="smartEducation" />
                        </div>
                        <div className="div text-section text-left text-white basis-[50%]  md:pl-10 " data-aos="fade-up">
                            <h3 className="text-6xl text-white">Smart Education</h3>
                            <p className=' text-2xl text-gray-400 py-2'>Elevate your Education Institutio</p>
                            <div className="tags mt-5">
                                <span className='text-center inline-block leading-9 text-white bg-[#ffffff1c] text-sm px-3 rounded-[30px] mr-2'>Learning Management </span>
                                <span className='text-center inline-block leading-9 text-white bg-[#ffffff1c] text-sm px-3 rounded-[30px] mr-2'>Course offering</span>
                                <span className='text-center inline-block leading-9 text-white bg-[#ffffff1c] text-sm px-3 rounded-[30px] mr-2'>Professional Training</span>
                            </div>
                            <div className="content mt-3">
                                <p className='text-white text-base'>

                                    Elevate your education institution with our comprehensive software solutions. Learning management, course offerings, professional training, certification, and school management tools to streamline your operations and enhance your students' learning experience. Trust us to provide the cutting-edge technology and support you need to thrive in the ever-evolving education industry.

                                </p>
                            </div>
                            <div className="btn text-white border-[1px] px-7 py-3 rounded-3xl w-fit max-md:mx-auto mt-16 border-white border-solid hover:tet-[] hover:text-black  flex justify-center items-center md:justify-start md:items-start md:self-start transition-colors duration-300 ease-in-out hover:bg-white  transform ">
                                <a href="/" className='text-center w-full'>
                                    <span className=' text-lg'>See full case study <span className='hover:translate-x-2 inline-block'>&rarr;</span></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* bottom section */}
                    <div className="bottom section py-[35px] px-[20px] text-center w-full mx-auto bg-[#19181E] ">
                      <div className='w-full md:w-[45%] mx-auto'>
                      <h2 className='text-4xl py-[15px] text-white md:text-5xl'>Check out more works by Geeks Invention</h2>
                        <p className='text-white'>
                            Our case studies describe design and development solutions implemented at our Geeks Invention projects. The stories are a
                            valuable resource for those looking to develop their own mobile apps.
                        </p>  
                      </div> 
                        <div className="btn text-[#ff5300] border-[1px] px-7 py-3 rounded-3xl w-fit mx-auto mt-16 border-[#ff5300] border-solid hover:tet-[] hover:text-black  flex justify-center items-center  transition-colors duration-300 ease-in-out hover:bg-white  transform ">
                            <a href="/" className='text-center w-full'>
                                <span className=' text-lg'>See all case study <span className='hover:translate-x-2 inline-block'>&rarr;</span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesSection