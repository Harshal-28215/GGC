import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <section className='sm:m-16 flex sm:mt-[120px] mt-[150px]'>
        <div className='px-9 border-r border-white/30 relative'>
            <h1 className='sm:text-2xl'>Years of experience</h1>
            <p className='sm:text-7xl text-3xl font-bold'>20</p>
            <Image src='/assets/take-a-break.png' alt='bgpng' width={200} height={200} className='absolute top-[-40%] left-[30%] sm:w-[180px] w-[140px] opacity-30'/>
        </div>
        <div className='px-9 relative'>
            <h1 className='sm:text-2xl'>Connected Componies</h1>
            <p className='sm:text-7xl text-3xl font-bold'>112</p>
            <Image src='/assets/share-contact.png' alt='bgpng' width={200} height={200} className='absolute top-[-30%] left-[30%] sm:w-[150px] w-[110px] opacity-30'/>
        </div>
    </section>
  )
}
