"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEnquiryModal } from '@/app/components/enquiryContext'

const DownloadBrochure = () => {
     const { openModal } = useEnquiryModal()
    return (
        <section className='relative w-full overflow-hidden'>
            {/* Background Image */}
            <div className='absolute inset-0 z-0'>
                <Image 
                    src="/assets/common/image3.png"
                    alt="Dubai Skyline"
                    fill
                    className='object-cover brightness-50'
                    priority={false}
                />
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-linear-to-r from-[#160A0A]/90 via-[#160A0A]/70 to-[#160A0A]/90'></div>
            </div>

            {/* Content */}
            <div className='relative z-10 p-[80px_0px_80px] max-xl:p-[60px_40px_60px] max-lg:p-[40px_20px_40px] max-w-300 mx-auto'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                    {/* Left Content */}
                    <motion.div 
                        className='flex-1 text-white'
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className='uppercase inline-block px-4 py-1.5 bg-[#d9baa0]/20 border border-[#d9baa0]/40 rounded-full text-[#d9baa0] text-[16px] max-lg:text-[14px] font-medium mb-4'>
                                EXCLUSIVE OFFER
                            </h3>
                        </motion.div>
                        
                        <motion.h2 
                            className='text-[48px] max-lg:text-[24px] font-bold mb-4'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Download Our Brochure
                        </motion.h2>
                        
                        <motion.p 
                            className='text-[18px] max-2xl:text-[16px] max-lg:text-[14px] text-gray-300 max-lg:text-white max-w-xl mb-6 lg:mb-0'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Discover our exclusive collection of luxury properties in Dubai. Get detailed information about our premium developments, amenities, and investment opportunities.
                        </motion.p>
                    </motion.div>

                    {/* Right Content - CTA */}
                    <motion.div 
                        className='flex flex-col sm:flex-row items-center gap-6'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {/* Download Button */}
                        <motion.button
                            className='group cursor-pointer relative px-8 py-4 bg-[#d9baa0] text-[#160A0A] font-semibold rounded-lg overflow-hidden shadow-xl'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
                            <div className='relative flex items-center gap-3'>
                                <svg 
                                    className='w-5 h-5' 
                                    fill='none' 
                                    stroke='currentColor' 
                                    viewBox='0 0 24 24'
                                >
                                    <path 
                                        strokeLinecap='round' 
                                        strokeLinejoin='round' 
                                        strokeWidth={2} 
                                        d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' 
                                    />
                                </svg>
                                <span>Download Brochure</span>
                            </div>
                        </motion.button>

                        {/* Contact Button */}
                        <motion.button
                            className='group cursor-pointer px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/60 transition-colors duration-300'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                            onClick={openModal}
                        >
                            <div className='flex items-center gap-3'>
                                <svg 
                                    className='w-5 h-5' 
                                    fill='none' 
                                    stroke='currentColor' 
                                    viewBox='0 0 24 24'
                                >
                                    <path 
                                        strokeLinecap='round' 
                                        strokeLinejoin='round' 
                                        strokeWidth={2} 
                                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' 
                                    />
                                </svg>
                                <span>Contact Us</span>
                            </div>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Stats Bar */}
                <motion.div 
                    className='mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {[
                        { value: '200+', label: 'Premium Properties' },
                        { value: '50+', label: 'Luxury Developments' },
                        { value: '10K+', label: 'Happy Clients' },
                        { value: '25+', label: 'Years Experience' }
                    ].map((stat, index) => (
                        <motion.div 
                            key={index}
                            className='text-center lg:text-left'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                        >
                            <div className='text-3xl font-bold text-[#d9baa0] mb-1'>{stat.value}</div>
                            <div className='text-[18px] max-2xl:text-[16px] max-lg:text-[14px] text-white'>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default DownloadBrochure
