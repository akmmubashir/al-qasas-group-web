"use client";
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const PropertiesExpertise = () => {
    const expertisePoints = [
        {
            id: 1,
            icon: (
                <svg className='w-8 h-8 max-lg:w-6 max-lg:h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            count: "48,000+",
            title: "Homes Delivered"
        },
        {
            id: 2,
            icon: (
                <svg className='w-8 h-8 max-lg:w-6 max-lg:h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            count: "50,100+",
            title: "In Planning and Progress"
        },
        {
            id: 3,
            icon: (
                <svg className='w-8 h-8 max-lg:w-6 max-lg:h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            count: "100+",
            title: "Awards Received"
        },
        {
            id: 4,
            icon: (
                <svg className='w-8 h-8 max-lg:w-6 max-lg:h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            count: "7+",
            title: "Countries"
        }
    ]

    return (
        <div className='bg-[#f6f3ec]'>
            <div className='grid grid-cols-12 gap-8 max-lg:gap-6 p-[80px_0px_80px] max-xl:p-[60px_40px_60px] max-lg:p-[40px_20px_40px] max-w-300 mx-auto'>
                {/* Header Section */}
                <div className="col-span-full flex flex-col gap-4 mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4 }}
                        className='border-2 border-[#D9BAA0] items-center p-[10px_20px] max-lg:p-[8px_16px] max-w-max flex justify-center rounded-full cursor-default'
                    >
                        <h3 className='uppercase whitespace-nowrap text-[#3a3a3a] text-[16px] max-lg:text-[14px] font-semibold'>Our Expertise</h3>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className='text-[#282828] text-[48px] max-lg:text-[24px] w-2/3 max-lg:w-full'
                    >
                        Properties Expertise That Speaks for Itself
                    </motion.h2>
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        {/* <h3 className='text-[#282828] text-[32px] max-lg:text-[22px] font-semibold mb-4'>
                            Transforming Visions into Reality
                        </h3> */}
                        <p className='text-[#3a3a3a] text-[18px] max-lg:text-[16px] max-md:text-[14px] leading-relaxed'>
                            With decades of experience and an unwavering commitment to excellence, DAMAC Properties has established itself as a global leader in luxury real estate development. Our portfolio spans continents, delivering world-class residences that redefine modern living and set new standards in architectural brilliance.
                        </p>
                    </motion.div>
                </div>

                {/* Video Section */}
                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="col-span-6 max-lg:col-span-full"
                >
                    <div className='relative rounded-[30px] overflow-hidden shadow-2xl bg-black aspect-video'>
                        <iframe
                            className='w-full h-full'
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="DAMAC Properties Showcase"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </motion.div> */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="col-span-6 max-lg:col-span-full"
                >
                    <div className='relative rounded-[20px] overflow-hidden shadow-2xl'>
                        <Image src="/assets/images/interior.png" alt="DAMAC Properties Interior Showcase" width={1000}
                            height={800} />
                    </div>
                </motion.div>

                {/* Content Section */}
                <div className="col-span-6 max-lg:col-span-full flex flex-col gap-6">
                   

                    {/* Stats Grid */}
                    <div className='grid grid-cols-2 gap-5 max-lg:gap-4 mt-4'>
                        {expertisePoints.map((point, index) => (
                            <motion.div
                                key={point.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className='bg-white rounded-[20px] p-6 max-lg:p-4 shadow-lg flex flex-col gap-3'
                            >
                                <div className='flex items-center gap-3'>
                                    <div className='bg-[#937258] text-[#ffffff] p-3 max-lg:p-2 rounded-full'>
                                        {point.icon}
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[#282828] text-[32px] max-lg:text-[24px] font-bold'>
                                        {point.count}
                                    </p>
                                    <p className='text-[#3a3a3a] text-[16px] max-lg:text-[14px] font-medium'>
                                        {point.title}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesExpertise
