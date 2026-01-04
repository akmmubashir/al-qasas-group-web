import React from 'react'
import Header from '../components/header'
import BannerSection from '../components/bannerSection'
import Footer from '../components/footer'

// type Props = {}

const page = () => {
    return (
        <div className="min-h-dvh overflow-hidden">
            <Header />
            <BannerSection title="Contact Us" />
            <Footer />
        </div>
    )
}

export default page