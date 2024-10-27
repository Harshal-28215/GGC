"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { GGCContext } from './context/context'

const Nevbar = () => {

    const nev = useRef<HTMLElement | null>(null);
    const [active, setactive] = useState(false)
    const [sidenave, setsidenave] = useState(false)

    const context = useContext(GGCContext);
    const {getactive} = context;

    useEffect(() => {

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY; // Current vertical scroll position in pixels
            if (scrollY > 260) {
                nev.current?.style.setProperty('background-color', '#0009')
            } else {
                nev.current?.style.setProperty('background-color', 'transparent')
            }
        })
        const activestatus = localStorage.getItem('videoPlayed') === 'true'
        setactive(activestatus)
    }, [])




    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Contact', href: '/contect' },
    ]

    const handleclick = () => {
        setsidenave(!sidenave)
    }

    return (
        <header className={`w-[100vw] h-[88px] top-0 left-0 z-[10000] py-3 md:px-[120px] backdrop-blur-sm box-border transition-all sm:px-[50px] px-[10px] ${active || getactive ? 'fixed' : 'hidden'}`} ref={nev}>
            <nav className="md:flex-row flex h-full w-full justify-between items-center">
                <Link href='/'>
                    <Image src="/assets/logo2.png" width={400} height={200} alt='logo' className='md:w-36 w-28' />
                </Link>
                {/* <a className="logo" href="#">GGC<span>.</span></a> */}
                <ul className={`flex md:space-x-8 md:text-base md:bg-transparent md:flex-row md:relative md:h-auto md:w-auto md:transition-none md:translate-x-0 md:justify-normal md:items-center md:pt-0 md:text-white md:font-normal
                    
                text-sm flex-col absolute top-0 right-0 h-[100vh] bg-white text-black justify-start pt-[100px] font-bold pl-[20px] gap-8 w-[50vw] transition-all z-[100] ${sidenave? 'translate-x-0' : 'translate-x-[55vw]'}`}>
                    {links.map((link, index) => (
                        <Link className='md:hover:text-white/55 hover:text-black/50' key={index} href={link.href}>{link.name}</Link>
                    ))}
                </ul>
                <span className={`md:hidden absolute z-[1000] w-4 text-3xl right-[5%] ${sidenave? 'block text-black' : 'hidden'}`} onClick={handleclick}>&times;</span>
                <span className={`md:hidden absolute z-[1000] w-4 text-3xl right-[5%] ${sidenave? 'hidden' : 'block'}`} onClick={handleclick}>&#9776;</span>
            </nav>
        </header>
    )
}

export default Nevbar
