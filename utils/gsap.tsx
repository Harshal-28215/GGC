import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type UseGsapProps = {
    elementRef: string;
}

const useGsap = ({elementRef}:UseGsapProps) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.utils.toArray(elementRef).forEach((elementRef) => {
                gsap.fromTo(
                    elementRef as Element,
                    { opacity: 0, y: 100 }, // Initial state: hidden and slightly translated down
                    {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: elementRef as Element,
                            start: "top 70%", // Adjust the start point of the animation
                            toggleActions: "play none none reverse", // Play animation when entering, reverse when leaving
                        },
                        duration: 0.2, // Duration of the animation
                    }
                );
            });
        }
    }, []);
}

export default useGsap;