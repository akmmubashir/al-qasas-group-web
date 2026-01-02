"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { useEnquiryModal } from '@/app/components/enquiryContext';

const WhyInvestDubai = () => {
    const { openModal } = useEnquiryModal()
    const investReasons = [
        {
            id: 1,
            title: 'Higher Rental Yields',
            description: 'Earn competitive rental returns with strong market demand and stable property appreciation.',
            icon: (
                <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Zero Taxes',
            description: 'Benefit from no personal income tax, capital gains tax, or property tax on residential properties.',
            icon: (
                <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Premium Healthcare',
            description: 'Access world-class medical facilities with advanced treatment options and expert specialists.',
            icon: (
                <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 4,
            title: 'World Class Education',
            description: 'Excellent international schools and universities offering premium education standards.',
            icon: (
                <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25m20-11.002c-3.5-4.745-8-9.247-10-11.002M2 17.25h20" />
                </svg>
            )
        },
        {
            id: 5,
            title: 'UAE Golden Visa',
            description: 'Obtain long-term residency visa for property investors and their families.',
            icon: (
                <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            id: 6,
            title: 'Entertainment Hub',
            description: 'World-renowned attractions, shopping, dining, and leisure activities at your doorstep.',
            icon: (
                <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 7,
            title: 'Communal Safety',
            description: 'One of the safest cities in the world with low crime rates and excellent security.',
            icon: (
                <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 8,
            title: 'Touristic Appeal',
            description: 'Thriving tourism industry provides strong rental market for vacation properties.',
            icon: (
                <svg className='w-8 h-8' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9l6 6m-6-6l-6 6m6-6l6-6m-6 6l-6-6" />
                </svg>
            )
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    }

    return (
        <div className='bg-white'>
            <div className='p-[80px_0px_80px] max-xl:p-[60px_40px_60px] max-lg:p-[40px_20px_40px] max-w-300 mx-auto'>
                {/* Header Section */}
                <div className='flex flex-col gap-6 mb-16'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4 }}
                        className='border-2 border-[#D9BAA0] items-center p-[10px_20px] max-lg:p-[8px_16px] max-w-max flex justify-center rounded-full cursor-default'
                    >
                        <h3 className='uppercase whitespace-nowrap text-[#3a3a3a] text-[16px] max-lg:text-[14px] font-semibold'>Investment Benefits</h3>
                    </motion.div>
                    <div className='flex flex-col gap-4'>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className='text-[#282828] text-[48px] max-lg:text-[24px] w-2/3 max-lg:w-full font-bold'
                        >
                            Why Invest in Dubai
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className='text-[#3a3a3a] text-[18px] max-lg:text-[16px] w-3/4 max-lg:w-full'
                        >
                            Dubai offers unparalleled opportunities for property investors with exceptional returns, zero taxes, world-class amenities, and a thriving economy.
                        </motion.p>
                    </div>
                </div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-lg:gap-5'
                >
                    {investReasons.map((reason) => (
                        <motion.div
                            key={reason.id}
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className='bg-linear-to-br from-[#f6f3ec] to-white rounded-[25px] p-8 max-lg:p-6 border border-[#D9BAA0]/30 shadow-lg hover:shadow-xl transition-all duration-300'
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className='bg-linear-to-br from-[#887362] to-[#c9a080] text-[#ffffff] p-4 rounded-full w-fit mb-5'
                            >
                                {reason.icon}
                            </motion.div>

                            {/* Content */}
                            <h3 className='text-[#282828] text-[20px] max-lg:text-[18px] font-semibold mb-3'>
                                {reason.title}
                            </h3>
                            <p className='text-[#3a3a3a] text-[16px] max-lg:text-[14px] leading-relaxed'>
                                {reason.description}
                            </p>

                            {/* Bottom Accent */}
                            <div className='mt-6 h-1 w-12 bg-linear-to-r from-[#d9baa0] to-[#c9a080] rounded-full' />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='mt-16 text-center'
                >
                    <p className='text-[#3a3a3a] text-[18px] max-lg:text-[16px] mb-6 max-w-2xl mx-auto'>
                        Start your investment journey with DAMAC Properties today and be part of Dubai&apos;s real estate success story.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='cursor-pointer uppercase text-[16px] max-md:text-[14px] p-[12px_28px] rounded-lg bg-[#d9baa0] border border-[#d9baa0] text-[#160A0A] hover:bg-white hover:border-[#d9baa0] transition-all duration-300 font-semibold shadow-2xl'
                        onClick={openModal}
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default WhyInvestDubai
