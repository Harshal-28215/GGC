"use client";

import Image from 'next/image'
import React, { useState } from 'react'

type service = {
    title: string,
    Description: string,
    image: string,
    Descriptionexpend: string,
    color: string,
}

export default function Product({ service,elementRef }: { service: service ,elementRef:string}) {

    const [active, setActive] = useState(false);

    const handleclick = () => {
        setActive(!active);
    }

    return (
        <div className={`w-full relative overflow-hidden mb-36 ${elementRef}`}>
            <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center z-30'>
                <div className='w-[calc(100%-40px)] h-[calc(100%-40px)] absolute border'></div>
            </div>
            <div className={`w-full h-full flex flex-col-reverse ${!active ? 'sm:flex-row' : 'flex-col-reverse'}`}>
                <div className={`${!active ? 'sm:w-3/6 lg:w-2/6 xl:p-16 p-10' : 'w-full h-1/2'} flex flex-col gap-3 p-10`} style={{backgroundColor:service.color}}>
                    {active ? null : <h1 className='sm:text-2xl text-xl font-bold'>{service.title}</h1>}
                    <p className='text-sm sm:text-base'>{
                   !active? service.Description : service.Descriptionexpend}</p>

                    <div className='z-40 flex items-center mt-3 gap-3'>
                        <div className='w-[50px] h-[50px] bg-transparent border border-white/50 rounded-full flex justify-center items-center cursor-pointer hover:rotate-180 transition-all duration-700' onClick={handleclick}>
                            <div className={`h-[20px] w-[2px] rounded-lg absolute bg-white ${!active ? 'rotate-90' : 'rotate-90'}`}></div>
                            <div className={`h-[20px] w-[2px] rounded-lg absolute bg-white ${!active ? 'rotate-0' : 'rotate-90'}`}></div>
                        </div>
                        <h2 className='font-bold'>{!active ? 'Read more' : 'Read less'}</h2>
                    </div>
                </div>
                <div className={`${!active ? 'sm:w-3/6 lg:w-4/6' : 'w-full h-[350px]'} relative sm:h-[350px] h-[30vh]`}>
                    <Image src={service.image} alt='product image' width={1000} height={500} className='absolute w-full h-full object-cover top-0 left-0' />
                    {!active ? null : <h1 className='sm:text-2xl text-xl font-bold absolute bottom-5 sm:left-[50px] left-5 px-3 py-1' style={{backgroundColor:service.color}}>{service.title}</h1>}
                </div>
            </div>


        </div>
    )
}
