import Image from 'next/image'
import React from 'react'

export default function Founder() {
    
    return (
        <section className='flex flex-row flex-wrap gap-8 w-full justify-center items-center mt-32 py-20 border-y border-white/10'>
            <aside className='relative'>
            <div className={`absolute bg-[radial-gradient(100%_100%_at_center,_var(--tw-gradient-stops))] from-[#dee0e259] from-0% to-black-600 to-40% h-[200%] w-[250%] top-[-50%] left-[-30%] -z-10`}></div>
                <Image src="/assets/a.jpeg" width={300} height={600} alt='founder' className='rounded-2xl' />
            </aside>
            <aside className='sm:w-1/2 w-[90vw] space-y-4 sm:text-start text-center'>
                <h2 className='text-3xl font-bold'>Founder of GGC</h2>
                <p>
                    <b>Anil Kalavadia</b>, the visionary founder of Gujarat Group of Companies,
                    has built a
                    legacy of excellence and innovation across diverse industries. With a profound
                    commitment to quality and
                    customer satisfaction, <b>Anil Kalavadia</b> has steered the group towards becoming a
                    trusted name in
                    import-export, raw material procurement, and cotton ginning sectors. His leadership and
                    foresight
                    continue to drive the group's success, ensuring it remains at the forefront of industry
                    standards.
                    Through his entrepreneurial spirit and dedication, <b>Anil Kalavadia</b> has established
                    Gujarat Group
                    of Companies as a beacon of reliability and excellence in business.
                </p>
            </aside>
        </section>
    )
}
