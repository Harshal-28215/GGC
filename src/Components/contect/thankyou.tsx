"use client"

import React from 'react'
import thankyou from '../../../public/assets/animation/successfully-done.json'
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Thankyou({result, setresult}: {result: boolean, setresult: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className={`w-full h-[100vh] ${result? 'flex' : 'hidden'} justify-center items-center bg-black/60 fixed z-[1000] top-0 left-0`}>
      <div className='border border-white/30 rounded-lg p-11 space-y-4 flex flex-col justify-center items-center bg-black/70'>
        <Lottie animationData={thankyou} className='w-80 mx-auto' />
        <h1 className='sm:text-3xl text-xl font-medium'>Thank You for Contacting Us!</h1>
        <p>We will get back to you soon.</p>
        <button className='bg-white text-black px-6 py-2 rounded-lg' onClick={()=>setresult(false)}>Close</button>
      </div>
    </div>
  )
}
