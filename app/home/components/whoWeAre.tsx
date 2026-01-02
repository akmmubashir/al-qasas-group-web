"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const WhoWeAre = () => {
    const contentData = [
        { id: 1, text: 'Founded', result: `28 January 1982`, text2: "by Hussain Sajwani" },
        { id: 2, text: 'Headquarters', result: `Dubai, UAE`, text2: "DAMAC Group" },
        { id: 3, text: 'Revenue', result: `$1.66 billion`, text2: "in 2018" },
        { id: 4, text: 'Employees', result: `1,600+`, text2: "in 2018" },
    ]
    return (
        <div className='grid grid-cols-12 items-center gap-10 max-lg:gap-6 p-[80px_0px_80px] max-xl:p-[60px_40px_60px] max-lg:p-[40px_20px_40px] max-w-300 mx-auto'>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4 }}
                className="col-span-4 max-lg:col-span-full h-full"
            >
                <div className='border-2 border-[#D9BAA0] items-center p-[10px_20px] max-lg:p-[8px_16px] max-w-max flex justify-center rounded-full cursor-default'>
                    <h3 className='uppercase whitespace-nowrap text-[#3a3a3a] text-[16px] max-lg:text-[14px] font-semibold'>Who We Are</h3>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="col-span-8 max-lg:col-span-full"
            >
                <h2 className={` text-[#282828] text-[56px] lg:leading-16.5 max-lg:text-[24px] font-bold `}>
                    The largest privately held real estate investors and managers in the UAE
                </h2>
            </motion.div>
            <div className="col-span-full flex flex-col gap-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className='text-[18px] max-lg:text-[16px] max-md:text-[14px] text-justify text-[#3a3a3a]'
                >DAMAC Properties is a prominent real estate developer headquartered in Dubai, UAE, widely recognized for delivering ultra-luxury residences including apartments, studios, townhouses, and villas across both residential and commercial segments. Established in 2002 by Hussain Sajwani, the company has expanded its footprint globally, becoming synonymous with Dubai’s high-end luxury real estate boom.</motion.p>
                <p className='text-[18px] max-lg:text-[16px] max-md:text-[14px] text-justify text-[#3a3a3a]'>Customer-centricity has been a key driver of DAMAC’s growth, supported by innovative marketing strategies and a strong emphasis on design quality and delivered value. Beyond architectural excellence, the company has received numerous awards for creating well-planned communities, reinforcing its commitment to building spaces that truly enhance lifestyle. Reflecting its adaptability to economic shifts, 2023 marked a significant milestone for DAMAC, with rising revenues driven by substantial growth in business inflows.</p>
                <p className='text-[18px] max-lg:text-[16px] max-md:text-[14px] text-justify text-[#3a3a3a]'> Over the years, DAMAC has built a strong and diverse portfolio featuring landmark developments such as DAMAC Hills, DAMAC Islands, and DAMAC Lagoons. Operating in a highly competitive and constantly evolving market, the company has consistently positioned itself at the forefront of premium real estate by focusing on distinctive design, innovation, and scale.</p></div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="col-span-6 max-lg:col-span-full"
            >
                <div className='relative'>
                    <div className='absolute w-50 h-12.5 right-0 top-0 bg-white rounded-[0_0px_0px_30px]'></div>
                    <div className='absolute w-7.5 h-7.5 right-50 top-0 bg-white rotate-180' style={{ clipPath: 'path("M0 0 Q0,30 30,30 L 0 30 Z")' }}></div>
                    <div className='absolute w-7.5 h-7.5 right-0 top-12.5 bg-white rotate-180' style={{ clipPath: 'path("M0 0 Q0,30 30,30 L 0 30 Z")' }}></div>

                    <div className='max-h-195 max-lg:max-h-100 overflow-hidden rounded-[30px]'>
                        <Image
                            src="/assets/common/aboutSideImg.png"
                            alt='About DAMAC Properties'
                            width={2000}
                            height={1000}
                        />
                    </div>
                </div>
            </motion.div>
            <div className="col-span-6 max-lg:col-span-full grid grid-cols-12 gap-7.5 max-lg:gap-5">
                {contentData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="col-span-6 min-h-55 max-lg:min-h-50 bg-[#f6f6f6] rounded-[20px] max-lg:rounded-xl p-5 flex flex-col gap-2 shadow-lg"
                    >
                        <h4 className='text-black font-semibold text-[16px] max-lg:text-[14px] uppercase pb-2.5 border-b border-[#D9BAA0] mb-auto'>{item.text}</h4>
                        <div className='flex flex-col mt-auto gap-1'>
                            <p className="text-black text-[24px] max-lg:text-[18px] font-medium">{item.result}</p>
                            <p className="text-[#666666] text-[16px] max-lg:text-[14px]">{item.text2}</p>
                        </div>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    id='projects'
                    className='col-span-full rounded-[20px] max-lg:rounded-xl overflow-hidden shadow-lg'
                >
                    <Image
                        src="/assets/common/aboutPanorama.png"
                        alt='About DAMAC Properties image'
                        width={1000}
                        height={800}
                    />
                </motion.div>
            </div>

        </div>
    )
}

export default WhoWeAre