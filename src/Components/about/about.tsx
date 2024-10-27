"use client"

import Image from 'next/image'
import Link from 'next/link'
import useGsap from '../../../utils/gsap';

const About = () => {

    useGsap({elementRef: '.elementRef'});

    return (
        <section className="mt-[200px] w-full h-[100vh]">
            <div className="w-full">
                <h1 className="text-4xl font-bold leading-[1.1] text-center after:w-[50px] after:block after:h-[3px] after:bg-[#949493] after:my-[.67em] after:ml-[calc(50%-25px)] opacity-1 elementRef" id="About">About Us</h1>
                <div className="flex justify-center sm:gap-12 items-center mt-20 md:flex-row flex-col">
                    <div className="md:w-2/6 md:h-[29vw] relative flex justify-center items-center elementRef sm:w-[70vw] w-[90vw]">
                        <div className={`absolute bg-[radial-gradient(100%_100%_at_center,_var(--tw-gradient-stops))] from-[#dee0e259] from-0% to-black-600 to-40% h-[200%] w-[200%]`}></div>
                        <div className="relative rounded-2xl overflow-hidden sm:h-[500px] w-full">
                            <Image src="/assets/96208a56-9ef1-499b-98c2-6a2243abd367.jpeg" width={500} height={500} alt="" className="w-full object-contain hover:scale-105 transition ease-in duration-150" />
                        </div>
                    </div>
                    <div className="md:w-2/6 z-20">
                        <div className='elementRef md:w-auto md:text-left sm:w-[70vw] w-[90vw] text-center'>
                            <h2 className="font-bold sm:text-5xl leading-[70px] text-2xl">About of GGC</h2>
                            <p className='mb-5'>Founded in 1999, Gujarat Group of Companies has emerged as a leader in multiple sectors, driven by a
                                commitment to excellence and customer satisfaction. Over the years, we have diversified our operations to
                                include import-export services, specialized raw material procurement through Gujarat Trading, and advanced
                                cotton ginning capabilities under Ankan Industry.</p>
                            <Link href="/about" className="px-5 py-2 bg-white rounded-md text-black font-medium hover:bg-white/50">Explore</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
