import Image from 'next/image'
import React, { useState } from 'react'

type PopupProps = {
    active: boolean;
    setactive: React.Dispatch<React.SetStateAction<boolean>>;
    location: string;
}

export default function Popup({ active, setactive, location }: PopupProps) {

    const [page, setpage] = useState(0);


    const handleclick = () => {
        setactive(false)
        document.body.style.overflow = '';
    }

    const content = [
        {
            country: 'India',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas tenetur, architecto tempore qui, saepe, accusantium corrupti itaque rem aperiam illum nisi dicta quisquam earum sit similique asperiores. Nam, eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas tenetur, architecto tempore qui, saepe, accusantium corrupti itaque rem aperiam illum nisi dicta quisquam earum sit similique asperiores. Nam, eius!',
            image: '/assets/co.webp'
        },
        {
            country: 'Japan',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas tenetur, architecto tempore qui, saepe, accusantium corrupti itaque rem aperiam illum nisi dicta quisquam earum sit similique asperiores. Nam, eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas tenetur, architecto tempore qui, saepe, accusantium corrupti itaque rem aperiam illum nisi dicta quisquam earum sit similique asperiores. Nam, eius!',
            image: '/assets/co1.jpg'
        },
        {
            country: 'russia',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas tenetur, architecto tempore qui, saepe, accusantium corrupti itaque rem aperiam illum nisi dicta quisquam earum sit similique asperiores. Nam, eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quas tenetur, architecto tempore qui, saepe, accusantium corrupti itaque rem aperiam illum nisi dicta quisquam earum sit similique asperiores. Nam, eius!',
            image: '/assets/cu1.jpg'
        }
    ]

    const handlprevious = () => {
        setpage(page - 1)
    }

    const handlenext = () => {
        setpage(page + 1)
    }

    return (
        <main className={`w-[100vw] h-[100vh] ${!active ? 'hidden' : 'flex'} justify-center items-center fixed top-0 left-0 z-[100] bg-black/50 text-black`}>
            <div className='p-5 sm:w-[70vw] sm:h-[70vh] w-[90vw] h-[80vh] bg-white rounded-xl'>
                <div className='border border-green-700 relative flex justify-center items-center flex-col gap-5 w-full h-full p-6 rounded-xl'>
                    <div className='absolute w-[30px] h-[30px] top-[2%] right-[1%] flex justify-center items-center cursor-pointer' onClick={handleclick}>
                        <div className='h-[20px] w-[1px] rounded-md absolute bg-green-700 -rotate-45'></div>
                        <div className='h-[20px] w-[1px] rounded-md absolute bg-green-700 rotate-45'></div>
                    </div>
                    <div className='flex md:flex-row flex-col w-full h-full md:gap-7 gap-4 mt-10'>
                        <div className='md:w-1/3 h-full relative'>
                            <Image src={content[page].image} alt='product image' width={500} height={1000} className='w-full h-full object-cover rounded-xl shadow-2xl' />
                        </div>
                        <div className='md:w-2/3 h-full space-y-4 flex flex-col justify-center'>
                            <h1 className='sm:text-2xl font-semibold'>{location}</h1>
                            <p className='sm:text-3xl font-bold uppercase text-green-700'>Product</p>
                            <p className='text-md font-semibold'>{content[page].description}</p>
                        </div>
                    </div>
                    <div className='space-x-5 flex'>
                        {<button className={`disabled:opacity-50 disabled:cursor-not-allowed`} disabled={page == 0 ? true : false} onClick={handlprevious}>
                            <Image src='/assets/arrow.svg' alt='product image' width={100} height={100} className='w-14 h-14 object-cover rounded-full shadow-2xl' />
                        </button>}

                        <button className={`disabled:opacity-50 disabled:cursor-not-allowed`} disabled={page == content.length - 1 ? true : false} onClick={handlenext}>
                            <Image src='/assets/arrow (1).svg' alt='product image' width={100} height={100} className='w-14 h-14 object-cover rounded-full shadow-2xl' />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
