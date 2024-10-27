"use client";

import React from 'react'
import Product from './service'
import allservices from '../../../utils/services'
import useGsap from '../../../utils/gsap'

export default function Products() {

  useGsap({elementRef: '.elementRef'});

  return (
    <section className='sm:px-16 px-6 border-t border-white/30'>
        <h1 className='text-4xl font-bold my-9 elementRef'>Services</h1>
        {allservices.map((service, index) => (
            <Product key={index} service={service} elementRef='elementRef'/>
        ))}
    </section>
  )
}
