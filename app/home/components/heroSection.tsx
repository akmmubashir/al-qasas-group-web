"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const slides = [
  {
    video: '/assets/video/hero-1.mp4',
    heading: 'Integrated Trading & Contracting Solutions',
    body: 'Excellence in movable partitions, project support, transportation, corporate services, and IT solutions driving quality and innovation across the Gulf region.',
    ctaLabel: 'View Services',
    ctaHref: '/services',
  },
  {
    video: '/assets/video/hero-2.mp4',
    heading: 'End-to-End Project Delivery Support',
    body: 'From planning to execution, we streamline procurement, logistics, and on-site support to keep your projects on schedule.',
    ctaLabel: 'Explore Projects',
    ctaHref: '/projects',
  },
  {
    video: '/assets/video/hero-3.mp4',
    heading: 'Trusted Across the Gulf Region',
    body: 'Serving Qatar and Saudi Arabia with reliable partnerships, certified teams, and resilient supply chain expertise.',
    ctaLabel: 'Contact Us',
    ctaHref: '/contact',
  },
]

const SLIDE_DURATION_MS = 8000

const HeroSection = () => {
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const slide = slides[current]

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length)
    }, SLIDE_DURATION_MS)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === current) {
        try {
          v.currentTime = 0
          const p = v.play()
          if (p && typeof p.then === 'function') p.catch(() => { })
        } catch { }
      } else {
        try { v.pause() } catch { }
      }
    })
  }, [current])

  return (
    <div className='relative h-dvh w-full overflow-hidden bg-white'>
      {/* Background Videos */}
      <div className='absolute inset-0'>
        {slides.map(({ video }, i) => (
          <video
            key={video}
            ref={(el) => { videoRefs.current[i] = el }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
            muted
            playsInline
            loop
            preload='auto'
          >
            <source src={video} type='video/mp4' />
          </video>
        ))}
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col justify-between h-full p-[160px_80px_60px] max-xl:p-[140px_40px_60px] max-lg:p-[120px_20px_50px]'>
        <div className='w-full flex flex-col gap-4 max-lg:mt-auto max-lg:mb-2'>
          <div
            className="w-fit inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/30 rounded-full"
          >
            <div className="w-2 h-2 bg-[#0D72B6] rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium tracking-wide">
              QATAR & SAUDI ARABIA
            </span>
          </div>
          <h1 className='text-white font-medium w-2/4 max-lg:w-full text-[60px] max-xl:text-[50px] max-lg:text-[36px] max-md:text-[26px]'>
            {slide.heading}
          </h1>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 max-md:gap-3 max-lg:hidden"
          >
            <Link
              href={slide.ctaHref}
              className="cursor-pointer group px-8 py-4 max-md:px-5 max-md:py-3 bg-white border border-white/90 text-black text-[15px] font-bold hover:bg-white/80 hover:border-white/20 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {slide.ctaLabel}
                <svg
                  className="w-5 h-5 group-hover:rotate-45 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className='w-full grid grid-cols-12 justify-end'>
          <div className='col-span-8 max-lg:hidden' />
          <div className='col-span-4 max-lg:col-span-full'>
            <p
              className="text-gray-200 text-[20px] max-xl:text-[18px] max-lg:text-[16px] leading-relaxed mb-4"
            >
              {slide.body}
            </p>
            <div
              className="flex flex-wrap gap-4 max-md:gap-3 lg:hidden"
            >
              <Link
                href={slide.ctaHref}
                className="cursor-pointer group px-8 py-4 max-md:px-5 max-md:py-3 bg-white border border-white/90 text-black text-[15px] font-bold hover:bg-white/80 hover:border-white/20 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  {slide.ctaLabel}
                  <svg
                    className="w-5 h-5 group-hover:rotate-45 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div className='flex justify-center gap-2 mt-6 max-md:mt-10'>
              {slides.map((_, i) => (
                <button
                  type='button'
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    setCurrent(i)
                    resetTimer()
                  }}
                  className={`cursor-pointer h-1 rounded-full transition-all duration-300 ${i === current ? 'w-full bg-white' : 'w-30 bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default HeroSection