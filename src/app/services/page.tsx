import Banner from '@/Components/services/banner'
import { Brochure } from '@/Components/services/brochure'
import SmoothSlider from '@/Components/services/certificate'
import HeadingText from '@/Components/services/headingText'
import Products from '@/Components/services/servicees_section'
import { InputForm } from '@/Components/services/subscribe'
import React from 'react'

export default function Page() {
    return (
        <main>
            <Banner title='Businessis' src='/assets/banner.png'/>
            <HeadingText />
            <Products />
            <SmoothSlider />
            <InputForm />
            <Brochure />
        </main>
    )
}
