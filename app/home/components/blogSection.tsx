"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface BlogPost {
    id: number
    title: string
    excerpt: string
    fullContent: string
    author: string
    date: string
    readTime: string
    category: string
    image: string
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Dubai Real Estate Market Trends 2025",
        excerpt: "Explore the latest trends shaping Dubai's luxury real estate market, including emerging neighborhoods and investment hotspots.",
        fullContent: "The Dubai real estate market continues to evolve with remarkable momentum in 2025. The city has witnessed unprecedented growth in luxury developments, particularly in areas like Dubai Hills Estate, Mohammed Bin Rashid City, and Dubai Creek Harbour.\n\nKey market trends include the rise of sustainable luxury properties, smart home integration, and community-centric developments. International investors are increasingly attracted to Dubai's tax-free environment, high rental yields averaging 7-9%, and the Golden Visa program offering long-term residency.\n\nThe off-plan property sector has shown exceptional performance, with developers offering flexible payment plans and attractive returns on investment. High-net-worth individuals from Europe, Asia, and the Americas continue to view Dubai as a safe haven for wealth preservation and growth.\n\nLooking ahead, experts predict continued appreciation in property values, driven by Expo 2020's lasting impact, infrastructure developments, and Dubai's position as a global business hub.",
        author: "Sarah Johnson",
        date: "Dec 15, 2025",
        readTime: "5 min read",
        category: "Market Insights",
        image: "/assets/images/high-rental-yields.png"
    },
    {
        id: 2,
        title: "Top 10 Luxury Communities in Dubai",
        excerpt: "Discover the most prestigious residential communities that define luxury living in Dubai, from beachfront estates to golf course villas.",
        fullContent: "Dubai's luxury residential landscape is home to some of the world's most exclusive communities. Here are the top 10 destinations for discerning buyers:\n\n1. Emirates Hills - Often called the 'Beverly Hills of Dubai,' this gated community features magnificent villas surrounding the Montgomerie Golf Course.\n\n2. Palm Jumeirah - The iconic man-made island offering beachfront living with stunning views of the Arabian Gulf and Dubai skyline.\n\n3. Dubai Hills Estate - A master-planned community blending urban convenience with natural surroundings, featuring parks, schools, and the Dubai Hills Mall.\n\n4. Arabian Ranches - Family-friendly community with Spanish-style villas, polo club, and excellent schools.\n\n5. Downtown Dubai - The epicenter of luxury high-rise living, home to Burj Khalifa, Dubai Mall, and Opera District.\n\n6. Jumeirah Golf Estates - Golf enthusiasts' paradise with two championship courses and luxurious villas.\n\n7. Al Barari - An ecological community featuring lush landscapes, botanical gardens, and sustainable luxury villas.\n\n8. District One - Ultra-luxury community in Mohammed Bin Rashid City with Crystal Lagoon access and contemporary mansions.\n\n9. Bluewaters Island - Modern island development with luxury residences and direct access to Ain Dubai.\n\n10. Dubai Marina - Vibrant waterfront community with high-rise towers, yacht club, and cosmopolitan lifestyle.\n\nEach community offers unique amenities, investment potential, and lifestyle advantages for residents.",
        author: "Michael Chen",
        date: "Dec 12, 2025",
        readTime: "8 min read",
        category: "Lifestyle",
        image: "/assets/projects/natura.png"
    },
    {
        id: 3,
        title: "Investment Guide: Off-Plan vs Ready Properties",
        excerpt: "A comprehensive comparison to help investors make informed decisions between off-plan developments and ready-to-move properties.",
        fullContent: "One of the most crucial decisions for property investors in Dubai is choosing between off-plan and ready properties. Each option offers distinct advantages depending on your investment goals.\n\nOff-Plan Properties:\n• Lower entry prices (typically 20-30% below market value)\n• Flexible payment plans during construction\n• Higher potential capital appreciation\n• Modern designs with latest amenities\n• Risk factors include construction delays\n• No immediate rental income\n\nReady Properties:\n• Immediate rental income generation\n• No construction risk or delays\n• Ability to inspect before purchase\n• Immediate occupancy or tenancy\n• Generally higher initial investment\n• Established communities with proven track records\n\nFinancial Considerations:\nOff-plan properties typically require 20% down payment with remaining balance during construction. Ready properties usually need 25% down payment with immediate full financing. However, rental yields on ready properties provide immediate cash flow.\n\nMarket Timing:\nDubai's current market favors both options. Off-plan properties in emerging areas like Dubai South and Tilal Al Ghaf offer strong appreciation potential. Ready properties in established areas like Dubai Marina and Downtown provide stable rental returns.\n\nRecommendation:\nDiversified investors should consider a balanced portfolio containing both property types. First-time buyers seeking immediate residency should prefer ready properties, while investors with longer horizons can benefit from off-plan opportunities.\n\nAlways conduct thorough due diligence, verify developer credentials, and consult with real estate professionals before making investment decisions.",
        author: "Emma Williams",
        date: "Dec 10, 2025",
        readTime: "6 min read",
        category: "Investment",
        image: "/assets/images/investment.png"
    },
    {
        id: 4,
        title: "UAE Golden Visa: Complete Property Investor's Guide",
        excerpt: "Everything you need to know about obtaining UAE's Golden Visa through real estate investment and its long-term benefits.",
        fullContent: "The UAE Golden Visa program has revolutionized property investment in Dubai by offering long-term residency opportunities. Here's your complete guide to obtaining this prestigious visa through real estate.\n\nEligibility Criteria:\n• Property investment of AED 2 million or more\n• Property must be maintained for at least 3 years\n• Can be single property or multiple properties totaling AED 2 million\n• Property can be residential or commercial\n• Off-plan properties qualify if payment exceeds AED 2 million\n\nVisa Duration:\nGolden Visa provides 10-year renewable residency for investors and their families, including spouse and children of any age.\n\nBenefits:\n• Long-term stability without sponsor requirement\n• 100% ownership of business in UAE\n• Ability to sponsor family members\n• No minimum stay requirements\n• Access to education and healthcare\n• Freedom to work or establish businesses\n• Multiple entry visa with extended validity\n\nApplication Process:\n1. Purchase property worth AED 2 million or more\n2. Obtain title deed from Dubai Land Department\n3. Apply through ICP (Federal Authority for Identity and Citizenship)\n4. Submit required documents including passport, photos, Emirates ID\n5. Pass medical fitness test\n6. Pay visa fees (approximately AED 3,000-5,000)\n7. Receive Golden Visa within 30-60 days\n\nRenewals and Compliance:\nVisa renews every 10 years provided property ownership is maintained. If property is sold before 3 years, visa may be revoked.\n\nRecommended Investment Areas:\nPopular locations for Golden Visa investments include Downtown Dubai, Dubai Marina, Palm Jumeirah, and Dubai Hills Estate, offering both lifestyle benefits and strong rental yields.\n\nThe Golden Visa transforms Dubai property investment from purely financial opportunity to lifestyle and residency advantage, making it attractive for global citizens seeking stability in one of the world's most dynamic cities.",
        author: "David Kumar",
        date: "Dec 8, 2025",
        readTime: "7 min read",
        category: "Legal & Visa",
        image: "/assets/images/visa.png"
    },
    {
        id: 5,
        title: "Sustainable Luxury: Green Buildings in Dubai",
        excerpt: "How Dubai's commitment to sustainability is transforming luxury real estate with eco-friendly designs and technologies.",
        fullContent: "Dubai's luxury real estate sector is embracing sustainability without compromising on opulence. The city's commitment to becoming a leader in green architecture is evident in its latest developments.\n\nKey Sustainable Features:\n• LEED and BREEAM certified buildings\n• Solar panel integration\n• Smart energy management systems\n• Water conservation technologies\n• Green building materials\n• Vertical gardens and green walls\n• Electric vehicle charging stations\n• Waste recycling facilities\n\nPioneering Developments:\nProjects like The Sustainable City, Al Barari, and various DAMAC Hills properties showcase how luxury and sustainability coexist. These communities feature organic farms, solar-powered homes, and car-free zones.\n\nEconomic Benefits:\n• 30-50% reduction in utility costs\n• Higher property values (10-15% premium)\n• Increased rental demand from eco-conscious tenants\n• Long-term cost savings on maintenance\n• Potential government incentives\n\nDubai 2040 Urban Master Plan:\nThe city's vision includes doubling green spaces, achieving net-zero emissions, and ensuring all new buildings meet high sustainability standards.\n\nInvestment Perspective:\nSustainable properties are no longer niche; they represent the future of luxury real estate. Early investors in green developments benefit from appreciation as sustainability becomes standard expectation.\n\nFor buyers, choosing sustainable luxury means contributing to environmental goals while enjoying reduced operating costs and enhanced property values.",
        author: "Lisa Anderson",
        date: "Dec 5, 2025",
        readTime: "5 min read",
        category: "Sustainability",
        image: "/assets/images/best-amenities.png"
    },
    {
        id: 6,
        title: "Smart Home Technology in Modern Dubai Villas",
        excerpt: "Explore the cutting-edge smart home features that are becoming standard in Dubai's luxury properties and their impact on daily living.",
        fullContent: "Modern luxury villas in Dubai are transforming into intelligent living spaces with advanced smart home technologies that enhance comfort, security, and efficiency.\n\nCore Smart Home Systems:\n• Integrated home automation platforms\n• Voice-controlled lighting and climate\n• Smart security with facial recognition\n• Automated window treatments\n• Multi-room audio-visual systems\n• Smart kitchen appliances\n• Energy monitoring and optimization\n• Remote access via mobile apps\n\nSecurity Innovations:\nAI-powered surveillance, biometric access control, and smart locks provide unprecedented security. Real-time alerts and video feeds accessible from anywhere ensure peace of mind.\n\nEnergy Efficiency:\nSmart thermostats learn resident preferences and optimize HVAC usage, reducing energy consumption by up to 40%. Automated lighting adjusts based on natural light and occupancy.\n\nEntertainment:\nIntegrated systems allow seamless control of entertainment across all rooms, from home theaters to outdoor entertainment areas. Voice commands control music, TV, and ambient settings.\n\nPopular Brands:\nLeading developers partner with Control4, Crestron, Savant, and Lutron to deliver premium smart home experiences. These systems integrate seamlessly with IoT devices.\n\nReturn on Investment:\nSmart home features add 5-10% to property values and significantly reduce utility costs. Properties with advanced automation sell faster and command premium rentals.\n\nFuture Trends:\nExpect AI-driven predictive maintenance, augmented reality interfaces, and deeper integration with autonomous vehicles and delivery systems.\n\nFor today's luxury property buyers, smart home technology isn't optional—it's expected. Developments incorporating these features lead the market in both sales velocity and appreciation.",
        author: "Robert Martinez",
        date: "Dec 2, 2025",
        readTime: "6 min read",
        category: "Technology",
        image: "/assets/images/smart-home.png"
    }
]

const BlogSection = () => {
    const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)

    const openBlog = (blog: BlogPost) => {
        setSelectedBlog(blog)
        // eslint-disable-next-line react-hooks/immutability
        document.body.style.overflow = 'hidden'
    }

    const closeBlog = () => {
        setSelectedBlog(null)
        document.body.style.overflow = 'unset'
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section className='bg-[#f6f3ec]'>
            <div className='p-[80px_0px_80px] max-xl:p-[60px_40px_60px] max-lg:p-[40px_20px_40px] max-w-300 mx-auto'>
                {/* Header */}
                <motion.div
                    className='text-center mb-16 max-lg:mb-10'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >

                    <div className='border-2 mx-auto border-[#D9BAA0] items-center p-[10px_20px] max-lg:p-[8px_16px] max-w-max flex justify-center rounded-full cursor-default mb-4'>
                        <h3 className='uppercase whitespace-nowrap text-[#3a3a3a] text-[16px] max-lg:text-[14px] font-semibold'> INSIGHTS & UPDATES</h3>
                    </div>

                    <h2 className='text-[48px] max-lg:text-[24px] font-bold text-[#160A0A] mb-4'>
                        Latest From Our Blog
                    </h2>
                    <p className='text-gray-600 text-[18px] max-2xl:text-[16px] max-lg:text-[14px] max-w-2xl mx-auto'>
                        Stay informed with expert insights, market trends, and valuable guides on Dubai real estate
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {blogPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            className='group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                        >
                            {/* Image */}
                            <div className='relative h-56 overflow-hidden'>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className='object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                                <div className='absolute top-4 left-4'>
                                    <span className='px-3 py-1 bg-[#d9baa0] text-[#160A0A] text-xs font-semibold rounded-full'>
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='p-6'>
                                {/* Meta Info */}
                                <div className='flex items-center gap-4 text-sm text-gray-500 mb-3'>
                                    <div className='flex items-center gap-1'>
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                                        </svg>
                                        <span>{post.date}</span>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                        </svg>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 onClick={() => openBlog(post)} className='cursor-pointer text-xl font-bold text-[#160A0A] mb-3 line-clamp-2 group-hover:text-[#b07f58] transition-colors'>
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className='text-gray-600 text-sm mb-4 line-clamp-3'>
                                    {post.excerpt}
                                </p>

                                {/* Author & Read More */}
                                <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-8 h-8 rounded-full bg-[#d9baa0]/20 flex items-center justify-center'>
                                            <span className='text-[#160A0A] font-semibold text-sm'>
                                                {post.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <span className='text-sm text-gray-700 font-medium'>{post.author}</span>
                                    </div>
                                    <motion.button
                                        onClick={() => openBlog(post)}
                                        className='cursor-pointer flex items-center gap-1 text-[#b07f58] font-semibold text-sm group-hover:gap-2 transition-all'
                                        whileHover={{ x: 5 }}
                                    >
                                        Read More
                                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                                        </svg>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>

            {/* Blog Modal */}
            <AnimatePresence>
                {selectedBlog && (
                    <motion.div
                        className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBlog}
                    >
                        <motion.div
                            className='relative bg-white overflow-hidden max-w-4xl w-full max-h-[90vh] max-lg:h-[calc(100vh-8rem)] overflow-y-auto max-lg:rounded-[20px]'
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeBlog}
                                className='sticky cursor-pointer top-4 right-4 float-right z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors'
                            >
                                <svg className='w-6 h-6 text-[#160A0A]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>

                            {/* Blog Content */}
                            <div className='p-8 max-lg:p-5'>
                                {/* Featured Image */}
                                <div className='relative h-80 w-full rounded-xl overflow-hidden mb-8 max-lg:mb-4'>
                                    <Image
                                        src={selectedBlog.image}
                                        alt={selectedBlog.title}
                                        fill
                                        className='w-full object-cover'
                                    />
                                    <div className='absolute bottom-4 left-4'>
                                        <span className='px-4 py-2 bg-[#d9baa0] text-[#160A0A] text-sm font-semibold rounded-full'>
                                            {selectedBlog.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Meta Info */}
                                <div className='flex flex-wrap items-center gap-6 max-lg:gap-4 text-sm text-gray-500 mb-6'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-10 h-10 rounded-full bg-[#d9baa0]/20 flex items-center justify-center'>
                                            <span className='text-[#160A0A] font-semibold'>
                                                {selectedBlog.author.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <span className='font-medium text-gray-700'>{selectedBlog.author}</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                                        </svg>
                                        <span>{selectedBlog.date}</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                        </svg>
                                        <span>{selectedBlog.readTime}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className='text-[40px] max-lg:text-[24px] font-bold text-[#160A0A] mb-6'>
                                    {selectedBlog.title}
                                </h2>

                                {/* Full Content */}
                                <div className='prose prose-lg max-w-none'>
                                    {selectedBlog.fullContent.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className='text-gray-700 text-[16px] max-lg:text-[14px] mb-4 leading-relaxed'>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Share & Actions */}
                                {/* <div className='mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4'>
                                    <div className='flex items-center gap-3'>
                                        <span className='text-gray-600 font-medium'>Share:</span>
                                        <div className='flex gap-2'>
                                            {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
                                                <button
                                                    key={platform}
                                                    className='p-2 rounded-full bg-gray-100 hover:bg-[#d9baa0] hover:text-white transition-colors'
                                                    title={`Share on ${platform}`}
                                                >
                                                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                                        <path d='M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z' />
                                                    </svg>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <motion.button
                                        className='px-6 py-3 bg-[#d9baa0] text-[#160A0A] font-semibold rounded-lg hover:bg-[#c9a080] transition-colors'
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Contact Us
                                    </motion.button>
                                </div> */}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default BlogSection
