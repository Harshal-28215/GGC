"use client"

import React, { useEffect, useRef } from 'react'
import { Description } from './description'
import My3DModel from './3dmodel'
import Star from './star'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'

export const Modelsection = () => {

  const mainRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (mainRef.current && modelRef.current) {
      const mainElement = mainRef.current;
      const modelElement = modelRef.current;


      console.log("Main element bounding rect:", mainElement.getBoundingClientRect());


      gsap.to(modelElement, {
        opacity: 1,
        bottom: 0,
        duration: 1,
        ease: 'out',
        scrollTrigger: {
          trigger: mainElement,
          start: "top 100%",
          end: "bottom 200%",
          scrub: true,
        },
      });


      ScrollTrigger.refresh();
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main ref={mainRef} className='mt-20 w-full flex flex-col justify-center items-center relative sm:h-[140vh] md:h-[180vh] h-[150vh] overflow-hidden'>
      <Description />
      <div ref={modelRef} className='absolute flex items-center justify-center sm:bottom-[40%] bottom-[70%] overflow-hidden opacity-0' style={{ height: '100vh', width: '100vw' }}>
        <div className='h-[100vw] w-[100vw] sm:w-[80vw] sm:h-[80vw] md:w-[80vh] md:h-[80vh] relative flex items-center justify-center'>
          <My3DModel />
        </div>
        <Star />
      </div>
    </main>
  );
}
