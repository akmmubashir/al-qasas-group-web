"use client"

import React, { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEnquiryModal } from '../../components/enquiryContext'

const contactChannels = [
    {
        name: 'WhatsApp', color: 'bg-[#25D366]', icon: (
            <svg className='w-8 h-8 max-lg:w-6 max-lg:h-6' viewBox='0 0 32 32' fill='currentColor'>
                <path d='M16.04 6c-4.97 0-9 3.96-9 8.84 0 1.56.42 3.09 1.22 4.44L7 26l6.88-1.8c1.07.3 2.17.46 3.28.46h.01c4.97 0 9-3.96 9-8.84 0-2.36-.96-4.57-2.7-6.23C21.74 6.88 19 6 16.04 6Zm5.19 12.42c-.22.62-1.25 1.18-1.74 1.26-.45.08-1.02.12-1.65-.1-.38-.13-.86-.28-1.48-.54-2.61-1.14-4.3-3.78-4.43-3.95-.13-.17-1.06-1.41-1.06-2.68 0-1.27.67-1.89.91-2.16.22-.24.59-.35.95-.35.11 0 .21 0 .3.01.27.01.41.03.59.46.22.54.75 1.87.82 2.01.07.13.11.28.02.45-.08.17-.12.27-.24.42-.11.13-.24.29-.35.39-.11.11-.24.22-.1.43.13.22.58.95 1.25 1.54.86.77 1.57 1.01 1.8 1.12.22.11.35.09.48-.05.13-.13.55-.64.7-.85.15-.22.3-.18.51-.11.21.07 1.33.63 1.56.74.22.11.37.17.43.26.06.1.06.63-.16 1.25Z' />
            </svg>
        )
    },
    {
        name: 'Telegram', color: 'bg-[#229ED9]', icon: (
            <svg className='w-8 h-8 max-lg:w-6 max-lg:h-6' viewBox='0 0 24 24' fill='currentColor'>
                <path d='M9.72 15.13 9.5 18.3c.36 0 .52-.16.7-.35l1.68-1.6 3.48 2.56c.64.36 1.1.17 1.28-.59l2.32-10.89.01-.01c.21-.96-.35-1.33-.97-1.1L3.84 10.15c-.93.36-.92.88-.16 1.11l4.27 1.33 9.92-6.24c.47-.3.9-.14.55.16l-8.69 8.62Z' />
            </svg>
        )
    }
]

const ContactModal = () => {
    const { isOpen, closeModal } = useEnquiryModal()

    const formFields = useMemo(() => ([
        { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
        { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Enter your phone number' },
    ]), [])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='fixed inset-0 z-999 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeModal}
                >
                    <motion.div
                        className='relative w-full max-w-3xl max-lg:h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-2xl overflow-auto'
                        initial={{ scale: 0.95, y: 30, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 30, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className='flex flex-col max-lg:flex-col-reverse md:flex-row items-start md:items-start justify-between gap-4 px-6 py-5 border-b border-[#d9baa0]/40 relative'>
                            <div>
                                <p className='text-[18px] max-2xl:text-[16px] max-lg:text-[14px] font-semibold tracking-[0.2em] text-[#a58261] mb-1'>GET A CALL BACK</p>
                                <h3 className='text-[26px] max-lg:text-[20px] font-semibold text-[#160A0A]'>Speak With Our Property Advisor</h3>
                                <p className='text-[16px] max-lg:text-[14px] text-gray-600 mt-1'>Share your details and we will reach out within 15 minutes.</p>
                            </div>
                            <button
                                onClick={closeModal}
                                className='cursor-pointer self-end md:self-auto p-2 text-[#160A0A] bg-gray-100 rounded-full shadow hover:bg-gray-100 transition-colors'
                                aria-label='Close modal'
                            >
                                <svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                        </div>

                        {/* Form */}
                        <form className='px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-4' onSubmit={(e) => e.preventDefault()}>
                            {formFields.map((field) => (
                                <div key={field.name} className='flex flex-col gap-2'>
                                    <label className='text-sm font-semibold text-[#160A0A]' htmlFor={field.name}>{field.label}*</label>
                                    <input
                                        id={field.name}
                                        name={field.name}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className='w-full rounded-lg border h-12 border-gray-200 px-3 py-3 text-[16px] max-lg:text-[14px] text-black focus:border-[#d9baa0] focus:ring-2 focus:ring-[#d9baa0]/40 outline-none transition'
                                        required
                                    />
                                </div>
                            ))}

                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-semibold text-[#160A0A]' htmlFor='project'>Project of Interest</label>

                                <div className='px-3 h-12 rounded-lg border flex items-center border-gray-200 focus:border-[#d9baa0] focus:ring-2 focus:ring-[#d9baa0]/40 transition'>
                                    <select
                                        id='project'
                                        name='project'
                                        className='w-full py-4 text-[16px] max-lg:text-[14px] text-black transition focus:outline outline-none'
                                        defaultValue=''
                                    // required
                                    >
                                        <option value='' disabled>Select a project</option>
                                        <option value='safa-gate'>Safa Gate</option>
                                        <option value='damac-islands'>DAMAC Islands</option>
                                        <option value='sea-crest'>DAMAC Sea Crest</option>
                                        <option value='violet-4'>DAMAC Violet 4</option>
                                        <option value='lagoon-views'>DAMAC Lagoon Views</option>
                                        <option value='natura'>Natura</option>
                                        <option value='others'>Others</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2 md:col-span-2'>
                                <label className='text-sm font-semibold text-[#160A0A]' htmlFor='message'>Additional Details</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    placeholder='Tell us what you are looking for'
                                    className='w-full rounded-lg border border-gray-200 px-3 py-3 text-[16px] max-lg:text-[14px] text-black min-h-30 focus:border-[#d9baa0] focus:ring-2 focus:ring-[#d9baa0]/40 outline-none transition'
                                />
                            </div>

                            <div className='flex flex-col gap-5 md:col-span-2'>
                                <button
                                    type='submit'
                                    className='cursor-pointer w-full md:w-auto px-6 py-3 rounded-lg bg-[#d9baa0] text-[#160A0A] font-semibold shadow-lg hover:bg-[#c9a080] transition-colors'
                                >
                                    Request a Call Back
                                </button>

                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <p className='text-[16px] max-lg:text-[14px] text-center font-semibold text-[#160A0A]'>Or contact us instantly</p>
                                    <div className='flex gap-3'>
                                        {contactChannels.map((channel) => (
                                            <div
                                                key={channel.name}>
                                                <button
                                                    key={channel.name}
                                                    type='button'
                                                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[16px] max-lg:text-[14px] text-white font-medium cursor-pointer shadow ${channel.color} hover:brightness-110 transition`}
                                                >
                                                    {channel.icon}
                                                    <span>{channel.name}</span>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ContactModal
