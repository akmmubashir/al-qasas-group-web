"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    {
      id: 1,
      src: '/assets/projects/safa-gate.png',
      title: 'Safa Gate',
      description: 'Luxury 1 & 2-BR apartments'
    },
    {
      id: 2,
      src: '/assets/projects/damac-islands.png',
      title: 'DAMAC Islands',
      description: 'Exclusive waterfront living'
    },
    {
      id: 3,
      src: '/assets/projects/damac-sea-crest.png',
      title: 'DAMAC Sea Crest',
      description: 'Sea facing apartments in Maritime City'
    },
    {
      id: 4,
      src: '/assets/projects/damac-violet-4.png',
      title: 'DAMAC Violet 4',
      description: '4-bedroom townhouses in DAMAC Hills 2'
    },
    {
      id: 5,
      src: '/assets/projects/damac-lagoon-views.png',
      title: 'DAMAC Lagoon Views',
      description: 'Mediterranean-inspired living'
    },
    {
      id: 6,
      src: '/assets/projects/natura.png',
      title: 'Natura',
      description: 'Nature-inspired townhouses'
    },
  ]

  const openFullscreen = (index: number) => {
    setCurrentIndex(index)
    setSelectedImage(index)
  }

  const closeFullscreen = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeFullscreen()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <div className='bg-[#f6f3ec]'>
      <div className='p-[80px_0px_80px] max-xl:p-[60px_40px_60px] max-lg:p-[40px_20px_40px] max-w-300 mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col gap-6 mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className='border-2 border-[#D9BAA0] items-center p-[10px_20px] max-lg:p-[8px_16px] max-w-max flex justify-center rounded-full cursor-default'
          >
            <h3 className='uppercase whitespace-nowrap text-[#3a3a3a] text-[16px] max-lg:text-[14px] font-semibold'>Gallery</h3>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className='text-[#282828] text-[48px] max-lg:text-[24px] w-2/3 max-lg:w-full'
          >
            Explore Our Stunning Collection of Luxury Properties
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-12 gap-5 max-lg:gap-4'>
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${
                index === 0 || index === 5
                  ? 'col-span-8 max-lg:col-span-full'
                  : 'col-span-4 max-lg:col-span-full'
              } group relative h-80 max-lg:h-70 rounded-[20px] overflow-hidden cursor-pointer`}
              onClick={() => openFullscreen(index)}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              {/* Overlay */}
              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 p-6 max-lg:p-4'>
                  <h4 className='text-white text-[24px] max-lg:text-[20px] font-semibold mb-1'>
                    {image.title}
                  </h4>
                  <p className='text-white/90 text-[16px] max-lg:text-[14px]'>
                    {image.description}
                  </p>
                </div>
                {/* View Icon */}
                <div className='absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center'
            onClick={closeFullscreen}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className='absolute cursor-pointer top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors'
              aria-label='Close fullscreen'
            >
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>

            {/* Image Container */}
            <div className='relative w-full h-full flex items-center justify-center p-20 max-lg:p-10' onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className='relative w-full h-full max-w-[90vw] max-h-[80vh]'
              >
                <Image
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].title}
                  fill
                  className='object-contain'
                  priority
                />
              </motion.div>

              {/* Image Info */}
              {/* <div className='absolute bottom-30 left-1/2 -translate-x-1/2 text-center'>
                <motion.h3
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='text-white text-[28px] max-lg:text-[22px] font-semibold mb-2'
                >
                  {galleryImages[currentIndex].title}
                </motion.h3>
                <motion.p
                  key={`desc-${currentIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className='text-white/80 text-[16px] max-lg:text-[14px]'
                >
                  {galleryImages[currentIndex].description}
                </motion.p>
                <p className='text-white/60 text-[14px] mt-2'>
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div> */}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className='cursor-pointer absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-colors'
              aria-label='Previous image'
            >
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className='cursor-pointer absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-colors'
              aria-label='Next image'
            >
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </button>

            {/* Thumbnail Navigation */}
            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4'>
              {galleryImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentIndex(idx)
                  }}
                  className={`cursor-pointer relative w-16 h-16 max-lg:w-12 max-lg:h-12 rounded-lg overflow-hidden shrink-0 transition-all ${
                    idx === currentIndex ? 'ring-2 ring-white scale-110' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className='object-cover'
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery