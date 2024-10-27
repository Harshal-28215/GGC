"use client";

import Product from '@/Components/services/service'
import React from 'react'
import allProducts from '../../../utils/products'
import Banner from '@/Components/services/banner'
import useGsap from '../../../utils/gsap'

export default function Page() {

    useGsap({elementRef: '.elementRef'});

    return (
        <main>
            <Banner title='Agro Commodities' src='/assets/productbanner.webp'/>
            <section className='w-full space-y-3 pb-16 text-white/70 sm:px-16 p-6 border-b border-white/30'>
                <p className='sm:text-xl font-bold'>
                    With a robust infrastructure and cutting-edge technology, Gujarat Group of Companies stands as a leader in various sectors, including Import/Export, Agri-Commodities, and Ginning. Gujarat Overseas, our import-export arm, efficiently manages global trade operations, connecting markets across the globe. Gujarat Trading sources and supplies high-quality agri-commodities, catering to the needs of domestic and international buyers. Ankan Industries, our ginning division, processes raw cotton with a high level of precision and quality control, meeting the needs of the textile industry.
                    As a growth engine, Gujarat Group of Companies contributes significantly to the industry, driving innovation and excellence while maintaining the highest standards of quality and customer satisfaction.
                </p>
            </section>
            <section className='sm:px-16 px-6'>
                <h1 className='text-3xl font-bold my-10 elementRef'>Products</h1>
                {allProducts.map((service, index) => (
                    <Product key={index} service={service} elementRef='elementRef'/>
                ))}
            </section>
        </main>
    )
}
