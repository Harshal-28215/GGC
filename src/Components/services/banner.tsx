import Image from 'next/image'
import React from 'react'


type BannerProps = {
    title: string,
    src: string
}
export default function Banner({title, src} : BannerProps) {
    return (
        <section className='w-[100vw] h-[calc(100vh-88px)] relative flex mb-10'>
            <div className='flex justify-between w-full bg-black/65'>
                <div className='w-1/2 sm:p-12 p-8 sm:ml-4 flex flex-col justify-end gap-4 text-white'>
                    <h2 className='sm:text-6xl text-3xl font-bold uppercase'>{title}</h2>
                </div>
            </div>
            <Image src={src} width={3000} height={1500} alt='banner' className='w-full h-full object-cover -z-10 absolute' />
        </section>
    )
}
