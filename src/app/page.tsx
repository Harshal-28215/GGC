"use client";

import About from '@/Components/about/about';
import Services from '@/Components/services/services';
import Product from '@/Components/product/product';
import Founder from '@/Components/founder/founder';
import Contecthome from '@/Components/contect/contacthome';
import Hero from '@/Components/main/home';
import { useState } from 'react';
import VideoPreloader from '@/Components/preloader/preloader';
import { Modelsection } from '@/Components/3dmodel/3dsection';

export default function Home() {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  }


  return (
    <main className='mb-20 w-[100vw] overflow-x-hidden'>
      {!isVideoFinished && <VideoPreloader onVideoEnd={handleVideoEnd} />}
      {isVideoFinished && (
        <main className='w-[100vw] overflow-x-hidden'>
          <Hero />
          <About />
          <Services />
          <Modelsection />
          <Product />
          <Founder />
          <Contecthome />
        </main>
      )}
    </main>
  );
}
