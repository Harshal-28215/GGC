"use client"

import Link from 'next/link'
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Lottie component
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import contect from '../../../public/assets/animation/email-marketing.json'

export default function Contacthome() {
    
    return (
        <section className='w-full sm:h-[50vh] flex justify-center flex-wrap items-end gap-4 mb-32'>
            <Lottie animationData={contect} className='sm:w-1/3'/>
            <div className='sm:w-1/3 w-[90vw] h-full flex justify-end text-center sm:text-left items-center sm:items-start flex-col gap-4 mb-20'>
                <h1 className='text-2xl font-bold'>Need Help?</h1>
                <p>Ready to take your business to the next level? Reach out to us for all your inquiries about Gujarat Group Of Companies.</p>
                <Link href='/contect' className='bg-white px-3 py-2 text-black rounded-lg text-center hover:bg-white/70 w-[200px]'>Connect with GCC</Link>
            </div>
        </section>
    )
}


