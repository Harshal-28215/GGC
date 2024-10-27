"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { GGCContext } from '../context/context'

export default function Footer() {

    const [active, setactive] = useState(false)

    const context = useContext(GGCContext)
    const {getactive} = context;

    const Overview = [
        {
            link: "/about",
            title: "About"
        },
        {
            link: "/services",
            title: "Services"
        },
        {
            link: "/products",
            title: "Products"
        },
        {
            link: "/contect",
            title: "Contact"
        },
    ]

    const Company = [
        {
            link: "#Gujarat Overseas",
            name: "Gujarat Overseas"
        },
        {
            link: "#Gujarat Trading",
            name: "Gujarat Trading"
        },
        {
            link: "#Ankan Industries",
            name: "Ankan Industries"
        },
    ]
    useEffect(() => {
        const activestatus = localStorage.getItem('videoPlayed') === 'true'
        setactive(activestatus)
    }, [])


    return (
        <footer className={`${active || getactive ? 'relative' : 'hidden'} w-[100vw] `}>
            <div className="absolute -z-10 bg-[radial-gradient(100%_100%_at_bottom,_var(--tw-gradient-stops))] from-blue-600 to-black-600 h-[100%] w-[144%] left-[-44%] top-[-40%]"></div>
            <div className="w-full flex relative md:flex-row md:items-start flex-col items-center bg-black rounded-t-[4rem] p-7 sm:justify-center sm:pt-32 gap-9 sm:h-[60vh] h-[50vh]">
                <div className="footer-logo absolute md:top-auto md:scale-100 md:left-[10%] top-[10%] sm:scale-125 scale-75">
                    <Image src="/assets/logo2.png" width={200} height={100} alt="Frame.io Logo" />
                </div>
                <div className="flex gap-16 sm:scale-150 md:scale-100 scale-75 sm:mt-0 mt-32">
                    <div className="space-y-3">
                        <h4 className='text-xl font-semibold'>Overview</h4>
                        <div className='h-[10vh]'>
                            <ul className='flex flex-col space-y-2'>
                                {Overview.map((Overview, index) =>
                                    <Link key={index} className='text-white/60 hover:text-white' href={Overview.link}>
                                        {Overview.title}
                                    </Link>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-column space-y-3">
                        <h4 className='text-xl font-semibold'>Company</h4>
                        <div className='h-[10vh]'>
                            <ul className='flex flex-col space-y-2'>
                                {Company.map((Company, index) =>
                                    <Link key={index} className='text-white/60 hover:text-white' href={Company.link}>
                                        {Company.name}
                                    </Link>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-column space-y-3">
                        <h4 className='text-xl font-semibold'>Support</h4>
                        <div className='h-[10vh]'>
                            <ul className='flex flex-col space-y-2'>
                                <Link href='/contect' className='text-white/60 hover:text-white'>Contact Us</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 border-t border-white/10 text-center text-white/50">
                <p className='text-sm'>© 2024 Gujarat Group Of Companies. All rights reserved.</p>
            </div>
        </footer>
    )
}
