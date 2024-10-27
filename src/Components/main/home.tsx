"use client";

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  //   const endposi = 'calc(200vh - 88px)';

  useEffect(() => {

    const scrollY = window.scrollY; // Current vertical scroll position in pixels
    const viewportHeight = window.innerHeight; // Height of the viewport in pixels

    // Calculate the offset in vh
    const offsetYInVH = (scrollY / viewportHeight) * 100;


    if (typeof window !== 'undefined') {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
      const bgGradient = document.querySelector("#bggradient") as HTMLElement;
      const heroContainer = document.querySelector('#herocontainer') as HTMLElement;

      // Set initial fixed position for both elements
      if (offsetYInVH < 10) {
        heroContainer.style.position = 'fixed'; // Initially absolute
        bgGradient.style.position = 'fixed'; // Initially absolute
      }else{
        bgGradient.style.position = 'absolute'; // Initially absolute
        heroContainer.style.position = 'absolute'; // Initially fixed
      }

      // Refresh ScrollTrigger to recalculate on mount
      ScrollTrigger.refresh();

      gsap.to(bgGradient, {
        translateY: '-100%',
        scale: 3.2,
        backgroundColor: '#00d4ff',
        duration: 3,
        scrollTrigger: {
          trigger: bgGradient,
          start: 'top 0%',
          end: 'center 30%',
          scrub: true,
          onEnterBack: () => {
            if (bgGradient) {
              bgGradient.style.position = "fixed";
              bgGradient.style.top = "0";
            }
          },
          onLeave: () => {
            if (bgGradient) {
              bgGradient.style.position = "absolute";
              bgGradient.style.top = "";
            }
          },
        },
        onComplete: () => {
          if (bgGradient) {
            bgGradient.style.position = "absolute";
          }
        },
      });

      gsap.to(heroContainer, {
        opacity: 0,
        duration: 4,
        scrollTrigger: {
          trigger: heroContainer,
          start: 'top',
          end: 'center 20%',
          scrub: true,
          onEnterBack: () => {
            if (heroContainer) {
              heroContainer.style.position = "fixed";
            }
          },
          onLeave: () => {
            if (heroContainer) {
              heroContainer.style.position = "absolute";
            }
          },
          onLeaveBack: () => {
            if (heroContainer) {
              heroContainer.style.position = "fixed"; // Keep it fixed when scrolling back
            }
          },
        },
        onComplete: () => {
          if (heroContainer) {
            heroContainer.style.position = "absolute";
          }
        },
      });

      gsap.to('.herotext', {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.herotext',
          start: 'top',
          end: '+=300',
          scrub: true,
        },
      });

      // Cleanup function to kill ScrollTriggers on component unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);



  return (
    <main className="relative h-[150vh] overflow-hidden pt-[88px]">
      <div className='h-[90vh]'>
        <div id='bggradient' className="absolute md:block bg-[radial-gradient(70%_100%_at_bottom,_var(--tw-gradient-stops))] from-blue-600 from-0% to-black-600 to-50% h-full w-[150%] left-[-65%] -z-50 hidden"></div>
        <section id='herocontainer' className="mainheight opacity-1 flex justify-between sm:items-center items-start md:pl-28 z-20 sm:px-20 px-6 w-[100vw]">
          <div className="md:w-[40%] z-30 w-[100%] sm:mt-0 mt-36">
            <h2 className="flex font-bold sm:text-5xl sm:leading-[70px] text-3xl leading-[40px]">Welcome to Gujarat Group of Companies.</h2>
            <p className="my-5">
              At Gujarat Group of Companies, we pride ourselves on delivering excellence across a diverse range of industries.
              Our commitment to quality and customer satisfaction has established us as a trusted name in the market.
              Explore our comprehensive services and discover how we can help your business thrive.
            </p>
            <Link href="/services" className="px-5 py-2 bg-white rounded-md text-black font-medium hover:bg-white/50">
              Explore
            </Link>
          </div>
          <div className="md:w-[60%] md:relative md:block absolute sm:top-0 top-[-5%] left-0 w-[100vw] h-[calc(100vh-88px)] phonebg">
            <Image
              className="h-full w-full object-contain hidden md:block"
              src="/assets/i.png"
              width={1000}
              height={1000}
              alt="Gujarat Group Of Companies"
            />
          </div>
        </section>
      </div>


      <section className='h-[150vh] w-full p-5 absolute top-[20%] flex justify-center items-center opacity-0 herotext'>
        <div className='md:w-[60vw] md:px-0 h-[30vh] opacity-[0.5] text-center herotext sm:px-20'>
          <p className='text-xl font-bold'>"This is where innovative minds converge, dedicated to driving the excellence that defines our industries. At Gujarat Group of Companies, you won’t just be a part of something extraordinary—you’ll contribute to shaping it."</p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
