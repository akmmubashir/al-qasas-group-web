"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEnquiryModal } from '../../components/enquiryContext'
// import Link from 'next/link'

const ProjectList = () => {
  const { openModal } = useEnquiryModal()
  const projectListData = [
    {
      id: 1,
      title: 'Safa Gate',
      description: "1 & 2-BR apartments from AED 1.99 million*",
      imageUrl: '/assets/projects/safa-gate.png',
      location: "Dubai, UAE",
      status: "Coming Soon",
      features: {
        bedrooms: "2",
        bathrooms: "2",
        area: "2,500 Sq Ft"
      },
      price: "1,99 M*",
      link: "#"
    },
    {
      id: 2,
      title: 'DAMAC Islands',
      description: "Luxury townhouses and villas in Dubailand",
      imageUrl: '/assets/projects/damac-islands.png',
      location: "Dubai, UAE",
      status: "New Launch",
      features: {
        bedrooms: "2",
        bathrooms: "2",
        area: "2,500 Sq Ft"
      },
      price: "1,99 M*",
      link: "#"
    },
    {
      id: 3,
      title: 'DAMAC SEA CREST DUBAI',
      description: "DAMAC Sea Crest is a new launch luxury sea facing apartments in Dubai Maritime City",
      imageUrl: '/assets/projects/damac-sea-crest.png',
      location: "Dubai, UAE",
      status: "New Launch",
      features: {
        bedrooms: "2",
        bathrooms: "2",
        area: "2,500 Sq Ft"
      },
      price: "1,99 M*",
      link: "#"
    },
    {
      id: 4,
      title: 'DAMAC Violet 4',
      description: "4-bedroom townhouses in DAMAC Hills 2",
      imageUrl: '/assets/projects/damac-violet-4.png',
      location: "Dubai, UAE",
      status: "New Launch",
      features: {
        bedrooms: "4",
        bathrooms: "3",
        area: "2,500 Sq Ft"
      },
      price: "1,99 M*",
      link: "#"
    },
    {
      id: 5,
      title: 'DAMAC Lagoon Views',
      description: "Mediterranean-inspired apartments in DAMAC Lagoons. Starting price at AED 1.30 million",
      imageUrl: '/assets/projects/damac-lagoon-views.png',
      location: "Dubai, UAE",
      status: "New Launch",
      features: {
        bedrooms: "4",
        bathrooms: "3",
        area: "2,500 Sq Ft"
      },
      price: "1,30 M*",
      link: "#"
    },
    {
      id: 6,
      title: 'Natura',
      description: "4-bedroom townhouses in DAMAC Hills 2",
      imageUrl: '/assets/projects/natura.png',
      location: "Dubai, UAE",
      status: "New Launch",
      features: {
        bedrooms: "4",
        bathrooms: "3",
        area: "2,500 Sq Ft"
      },
      price: "1,30 M*",
      link: "#"
    },

  ]
  return (
    <div className='bg-[#f6f3ec]'>
      <div className='grid grid-cols-12 gap-6 max-lg:gap-6 p-[80px_0px_80px] max-xl:p-[60px_40px_60px] max-lg:p-[40px_20px_40px] max-w-300 mx-auto'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="col-span-2 max-lg:col-span-full h-full"
        >
          <div className='border-2 border-[#D9BAA0] items-center p-[10px_20px] max-lg:p-[8px_16px] max-w-max flex justify-center rounded-full cursor-default'>
            <h3 className='uppercase whitespace-nowrap text-[#3a3a3a] text-[16px] max-lg:text-[14px] font-semibold'>Our Projects</h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="col-span-6 max-lg:col-span-full"
        >
          <h2 className={` text-[#282828] text-[48px] max-lg:text-[24px]`}>
            Crafted Spaces That Set New Benchmarks in Luxury and Design</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="col-span-4 max-lg:col-span-full flex"
        >
          <p className='text-[#3a3a3a] text-[16px] max-lg:text-[14px] text-justify'>
            DAMAC Properties is widely recognized for developing luxury residential towers, premium master-planned communities, and exclusive island resort residences. From refined apartments in Dubai to contemporary urban retreats, each development combines forward-thinking design with world-class amenities to create an elevated living experience.
          </p>
        </motion.div>
        <div className='col-span-full grid grid-cols-12 mt-5 gap-7.5 max-lg:gap-[20px_0]' >
          {projectListData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="col-span-6 outline-none! max-lg:col-span-full h-100 overflow-hidden relative bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.imageUrl})`,
                // filter: 'grayscale(40%)',
              }}
            >
              {/* start of absolute content */}
              <div className='z-20 absolute w-33 h-15 right-0 bottom-0 bg-[#f6f3ec] rounded-[30px_0px_0px_0px]'></div>
              <div className='z-20 absolute w-7.5 h-7.5 right-33 bottom-0 bg-[#f6f3ec] -rotate-90' style={{ clipPath: 'path("M0 0 Q0,30 30,30 L 0 30 Z")' }}></div>
              <div className='z-20 absolute w-7.5 h-7.5 right-0 bottom-15 bg-[#f6f3ec] -rotate-90' style={{ clipPath: 'path("M0 0 Q0,30 30,30 L 0 30 Z")' }}></div>
              {/* enquire button */}
              <div className='z-30 absolute right-0 bottom-0'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='cursor-pointer uppercase text-[16px] p-[12px_20px] rounded-[20px_10px_0px_10px] bg-[#d9baa0] border border-[#d9baa0] text-[#160A0A] hover:bg-[#d9baa0]/20 hover:border hover:border-[#d9baa0] transition-colors duration-300 font-medium shadow-2xl'
                  onClick={openModal}
                >
                  Enquire
                </motion.button>
              </div>
              {/* status badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className='absolute left-7.5 top-7.5 max-lg:left-5 max-lg:top-5 bg-black rounded-full p-[8px_12px] shadow-2xl flex flex-col items-center justify-center'
              >
                <p className='text-white font-medium text-[14px]'>{project.status}</p>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                className='z-20 absolute right-5 bottom-20 flex gap-1 items-center mb-auto'
              >
                <div className='w-7.5 h-7.5 max-lg:w-5.5 max-lg:h-5.5'>
                  <Image src={"/assets/icons/dirham.svg"} alt="dirham-icon" width={100} height={100} />
                </div>
                <p className='text-[24px] max-lg:text-[20px] font-medium text-white'>{project.price}</p>
              </motion.div>
              {/* end of absolute content */}

              {/* content section start */}
              <div className='absolute bottom-0 left-0 p-[100px_20px_20px] max-lg:p-[80px_20px_20px] w-full items-start gap-5 max-lg:gap-3 bg-linear-to-t from-black/85 via-black/60 to-transparent text-white'>
                <div className='w-2/3 flex flex-col gap-2.5 max-lg:gap-1.5'>
                  <div className='flex gap-1 items-center'>
                    <div className=''>
                      <Image src={"/assets/icons/location.svg"} alt="location-icon" width={20} height={20} />
                    </div>
                    <p className='text-white text-[16px] max-lg:text-[14px]'>{project.location}</p>
                  </div>
                  <h6 className='text-[26px] max-lg:text-[20px] font-medium text-white'>{project.title}</h6>
                  <p className='text-white text-[16px] max-lg:text-[14px]'>{project.description}</p>
                  <div className='flex max-lg:flex-wrap items-center gap-6'>
                    <div className='flex gap-2 items-center'>
                      <div className=''>
                        <Image src={"/assets/icons/bedroom.svg"} alt="bedroom-icon" width={20} height={20} />
                      </div>
                      <p className='text-white text-[16px] max-lg:text-[14px]'>{project.features.bedrooms}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className=''>
                        <Image src={"/assets/icons/bathroom.svg"} alt="bathroom-icon" width={20} height={20} />
                      </div>
                      <p className='text-white text-[16px] max-lg:text-[14px]'>{project.features.bathrooms}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <div className=''>
                        <Image src={"/assets/icons/area.svg"} alt="area-icon" width={20} height={20} />
                      </div>
                      <p className='text-white text-[16px] max-lg:text-[14px]'>{project.features.area}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* content section start */}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="col-span-full flex flex-col items-center gap-4"
        >
          <p className='text-[#3a3a3a] text-[16px] max-lg:text-[14px] text-justify italic'>*Terms and conditions apply. Prices and availability are subject to change without prior notice. Please contact our sales team for the most up-to-date information.</p>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='cursor-pointer uppercase text-[16px] max-md:text-[14px] p-[12px_20px] max-md:p-[8px_12px] rounded-lg bg-[#d9baa0] border border-[#d9baa0] text-[#160A0A] hover:bg-[#d9baa0]/20 hover:border hover:border-[#d9baa0] transition-colors duration-300 font-medium shadow-2xl'
              onClick={openModal}
            >
              view more
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectList