import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export default function Product() {

    const Products = [
        {
            title: "Cumin Seeds",
            descripiton: `Our cumin seeds are sourced from the finest farms, ensuring premium quality and rich
                            flavor for your
                            culinary needs.`,
            image: "/assets/CuminSeeds.webp"
        },
        {
            title: "Cotton",
            descripiton: `High-quality cotton perfect for textile manufacturing and other industrial uses, meeting
                                international
                                standards.`,
            image: "/assets/cotton.jpeg"
        },
        {
            title: "Peanuts",
            descripiton: `Fresh and crunchy peanuts sourced directly from farmers, ideal for snacks and oil
                                production.`,
            image: "/assets/Peanuts.jpeg"
        },
        {
            title: "Cumin Seeds",
            descripiton: `Our cumin seeds are sourced from the finest farms, ensuring premium quality and rich
                            flavor for your
                            culinary needs.`,
            image: "/assets/CuminSeeds.webp"
        },
        {
            title: "Cotton",
            descripiton: `High-quality cotton perfect for textile manufacturing and other industrial uses, meeting
                                international
                                standards.`,
            image: "/assets/cotton.jpeg"
        },
        {
            title: "Peanuts",
            descripiton: `Fresh and crunchy peanuts sourced directly from farmers, ideal for snacks and oil
                                production.`,
            image: "/assets/Peanuts.jpeg"
        }
    ]
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const carousel = useRef<HTMLDivElement | null>(null);
    let offset = 0;

    const slide = Products.length; // Number of products

    const calculatedoffset = (slide/3)

    

    const autoScroll = useCallback(() => {
        // Move by 100% of the container's width for each set of 3 items
        
        offset += screenWidth < 800? 100 / slide : 100 / calculatedoffset;

        // Reset the offset when reaching the last set of products
        if (offset >= 100) {
            offset = 0;
        }

        if (carousel.current) {
            carousel.current.style.transition = 'transform 0.5s ease-in-out';
            carousel.current.style.transform = `translateX(-${offset}%)`;
        }
    }, []);

    // Use useEffect to set up the interval once when the component mounts
    useEffect(() => {
        const interval = setInterval(autoScroll, 5000);
        return () => clearInterval(interval); // Cleanup the interval when the component unmounts
    }, [autoScroll]);



    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    

    return (
        <section className='w-full overflow-hidden flex justify-center items-center flex-col'>
            <h1 className="text-4xl font-bold leading-[1.1] text-center after:w-[50px] after:block after:h-[3px] after:bg-[#949493] after:my-[.67em] after:ml-[calc(50%-25px)] mt-[100px]" id="Products">Products</h1>

            <div className='flex relative overflow-x-hidden flex-row md:w-[80vw] w-[90vw] mt-8'>
                <div ref={carousel} className='relative sm:gap-[16px] flex text-center w-[calc((90vw-15px)*6)] sm:w-[calc((30vw-15)*6)] md:w-[calc((26.666666-15px)*6)]'>
                    {
                        Products.map((p, index) =>
                            <div key={index} className="md:w-[calc(26.666666vw-15px)] sm:w-[calc(30vw-15px)] w-[calc(90vw-15px)] p-5 border border-white/30 rounded-lg sm:ml-0 ml-[16px]">
                                <Image src={p.image} alt="Cumin Seeds" className="rounded-lg" width={1000} height={500}/>
                                <h2 className='mt-4 text-3xl font-black'>{p.title}</h2>
                                <p className='mb-4 mt-4'>
                                    {p.descripiton}
                                </p>
                                <Link href="/products" className="px-5 py-2 bg-white rounded-md text-black font-medium hover:bg-white/50">Explore</Link>
                            </div>
                        )
                    }

                </div>
            </div>

        </section>
    )
}
