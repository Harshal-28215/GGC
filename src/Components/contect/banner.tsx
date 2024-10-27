import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <section className='w-full md:h-[50vh] h-[60vh] relative flex mb-10'>
            <div className='flex justify-between w-full bg-black/65'>
                <div className='md:w-1/2 sm:p-12 ml-4 flex flex-col justify-center gap-4 text-white'>
                    <h2 className='sm:text-4xl font-bold'>Contact Us Today</h2>
                    <p className='sm:text-xl'>At Gujarat Group of Companies, we are committed to supporting your business with a diverse range of services designed to meet the challenges of today’s global market. Ready to take your business to the next level? Reach out to us for all your inquiries about Gujarat Group Of Companies.
                    </p>
                </div>
            </div>
            <Image src='/assets/contact.jpg' width={3000} height={1500} alt='banner' className='w-full h-full object-cover -z-10 absolute' />
        </section>
    )
}
