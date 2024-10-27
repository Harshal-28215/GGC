import React from 'react'

export default function Videosection() {
    return (
        <section className='sm:p-16 p-5 mt-10 flex md:flex-row md:gap-0 flex-col gap-6 w-[100vw] overflow-hidden'>
            <aside className='space-y-4 md:w-1/2 sm:w-[70vw] w-[calc(100vw-40px)] relative'>
                <h1 className='sm:text-6xl text-3xl text-2px font-bold'>Management Speak</h1>
                <p className='text-2xl font-medium'><i>Mr. Anil Kalavadia</i></p>
                <p>Founder & Managing diractor of GGC.</p>
                <svg className='absolute bottom-[-50%] left-[20%] hidden md:block' xmlns="http://www.w3.org/2000/svg" width="417" height="362.664" viewBox="0 0 417 362.664"><defs><style type="text/css">{`.a{fill:none;stroke:#a4a4a4;stroke-width:3px;fill-rule:evenodd;opacity:0.3;}`}</style></defs><path className="a" d="M434.929,483.287c-36.584,0-64.854-15.2-84.334-45.373-16.154-24.945-24.23-56.3-24.23-93.837,0-47.749,12.115-90.747,36.584-128.519Q399.294,158.9,473.176,124.1l13.3,25.656c-29.7,12.59-55.352,32.308-76.731,58.914-21.143,26.607-31.833,53.689-31.833,81.008,0,11.64,1.187,21.619,4.038,29.933,16.392-12.353,33.971-18.768,52.976-18.768,25.894,0,47.511,8.316,65.091,24.707,17.342,16.629,26.132,38.723,26.132,66.517,0,25.894-9.027,47.749-26.607,65.091s-39.2,26.132-64.615,26.132Zm-214.213,0c-36.584,0-64.615-15.2-84.1-45.373-16.391-24.945-24.468-56.3-24.468-93.837,0-47.749,12.353-90.747,36.584-128.519,24.469-37.772,61.053-68.179,110.228-91.46l13.3,25.656c-29.694,12.59-55.114,32.308-76.494,58.914S163.7,262.358,163.7,289.676q0,17.461,4.277,29.933c15.678-12.353,33.258-18.768,52.737-18.768,25.656,0,47.275,8.316,64.854,24.707,17.578,16.629,26.368,38.723,26.368,66.517a88.839,88.839,0,0,1-12.59,46.562,89.812,89.812,0,0,1-33.259,32.782A91.107,91.107,0,0,1,220.715,483.287Z" transform="translate(-110.651 -122.123)"/></svg>
            </aside>
            <aside className='md:w-1/2 sm:w-[calc(100vw-128px)] w-[calc(100vw-40px)] h-[50vh] relative flex justify-center items-center'>
                <video className="h-full w-full object-cover rounded-xl" autoPlay muted controls >
                    <source src='/assets/videoplayback.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={`absolute bg-[radial-gradient(100%_100%_at_center,_var(--tw-gradient-stops))] from-[#dee0e259] from-0% to-black-600 to-40% h-[200%] w-[200%] -z-10`}></div>
            </aside>
        </section>
    )
}
