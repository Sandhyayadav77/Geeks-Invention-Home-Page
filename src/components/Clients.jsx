import React from 'react'
import ibmLogo from '../assets/images/ibmLogo.webp'
import equityLogo from '../assets/images/equityLogo.webp'
import audiLogo from '../assets/images/audiLogo.webp'
import energyProducerLogo from '../assets/images/energyProducerLogo.webp'
import insurityLogo from '../assets/images/insurityLogo.webp'
import byjuLogo from '../assets/images/byjuLogo.webp'
import linuxLogo from '../assets/images/linuxLogo.webp'
import fitLogo from '../assets/images/fitLogo.webp'
import payyitLogo from '../assets/images/payyitLogo.webp'
import baanxLogo from '../assets/images/baanxLogo.webp'
import inchLogo from '../assets/images/inchLogo.webp'
import pennyLogo from '../assets/images/pennyLogo.webp'

const clients = [
    {
        img: ibmLogo,
        id:1,
        title: "Global Technology",
        content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world."
    },
    {
        img: equityLogo,
        id:2,
        title: "4th Strongest Bank",
        content: "Empowering a continent by creating better livelihoods, Equity bank has been awarded 4th strongest Bank in the world in 2023. Offering various banking services over Africa region"
    },
    {
        img: audiLogo,
        id:3,
        title: "Intelligence on wheel",
        content: "Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology."
    },
    {
        img: energyProducerLogo,
        id:4,
        title: "Energy Producer",
        content: "One of the world's largest integrated energy and chemicals companies, creating value across the hydrocarbon chain, and delivering societal and economic benefits to people and communities around the globe who rely on the vital energy we supply."
    },
    {
        img: insurityLogo,
        id:5,
        title: "Cloud-Native Insurance",
        content: "Insurity, a leading provider of cloud-based software for insurance carriers, brokers, and MGAs. Insurity serves 500+ insurers, with 400+ in the cloud and 330+ in the public cloud. It is trusted by 22 of the top 25 P&C carriers & 7 of the top 10 MGAs."
    },
    {
        img: byjuLogo,
        id:6,
        title: "The Learning Platform",
        content: "BYJU'S is India's largest ed-tech company and the creator of India's most loved school learning app. BYJU’S provides India’s best teachers and subject matter experts to teach and clear doubts of the students in an ongoing class."},
    {
        img: linuxLogo,
        id:7,
        title: "Open Source Giant",
        content: " The Linux Foundation is a non-profit organization that supports the development and growth of the Linux operating system and other open source technologies like NodeJs, Kubernetes, GraphQL, OpenAPI etc."
    },
    {
        img: fitLogo,
        id:8,
        title: "Fitness Platform",
        content: "iFit is a workout app with thousands of on-demand classes to suit a variety of fitness levels. Stream classes using an iFit-compatible exercise machine or access them on your smartphone to work up a sweat in any location."
    },
    {
        img: payyitLogo,
        id:9,
        title: "Smooth Invoicing",
        content: "Payyit is a cutting-edge Software as a Service (SAAS) platform designed to revolutionize the invoicing, bookkeeping, payment processing, virtual bank account and debit card management for businesses of all sizes."
    },
    {
        img: baanxLogo,
        id:10,
        title: "Crypto Bank ",
        content: "The Baanx Platform bridges the gap between fiat and digital asset technology to provide with an API-driven platform to create disruptive, cutting-edge digital products offering Payments, Digital Assets, Loans."
    },
    {
        img: inchLogo,
        id:11,
        title: "Mobility Solution",
        content: "Inchcape is the leading independent multi-brand global automotive distributor, operating in over 40 markets and territories with a portfolio of the world’s leading automotive brands."
    },
    {
        img: pennyLogo,
        id:12,
        title: "Global Procurement",
        content: "Penny is a cloud-based Source-To-Pay system. Penny helps digitize and manage full procurement cycle from Request to approval, Manage RFQs to vendors, Compare quotations, Send POs and even payment."
    }
]

const Clients = () => {
    return (
        <>
            <div className="recent-client min-h-screen w-full bg-[#23252C] md:pt-[20px] pb-5 ">
                <div className="pb-[30px] text-white mx-auto flex flex-col justify-center items-center space-y-5 pt-[15px]">
                    <h3 className=' text-3xl'>Recent clients</h3>
                    <p className=' leading-7'>
                        We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East
                        <br />World's 4th Strongest Banking Brand, Automobile &amp; IoT industry
                    </p>
                </div>
                {/* clients-cards */}
                <div className="client-cards md:grid md:grid-cols-3 md:py-[40px] px-[80px] " data-aos="fade-up">
                   {
                    clients.map((client, index)=> <div key={index} className="client-card mt-8 mx-2 bg-[#2e3038] py-11 px-8 flex flex-col justify-center items-center md:col-span-1">
                        <img src={client.img} alt="ibm" />
                        <div className="text-section text-center text-white flex flex-col justify-center items-center pt-[30px]">
                            <p className="item-title pb-[15px] text-[24px]">{client.title}</p>
                            <p >{client.content}</p>
                        </div>

                    </div>)
                   }
                </div>
            </div >
        </>
    )
}

export default Clients