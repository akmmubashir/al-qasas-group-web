"use client"
import React, { useEffect, useState } from 'react' 
import Logo from './logo';
import Navigation from './navigation';
import { useEnquiryModal } from './enquiryContext';
// import Navigation from './navigation'


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { openModal } = useEnquiryModal();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`'flex justify-center fixed w-full left-0 top-0 z-50 ${scrolled ? 'bg-white shadow-2xl' : 'bg-transparent'} `}>
            <div className={`p-[30px_0px] max-xl:p-[30px_40px] max-md:p-[20px_20px] max-w-300 mx-auto flex items-center justify-between`}>
                <Logo color={scrolled ? 'black' : 'white'} />
                <Navigation type={scrolled ? 'scroll' : 'transparent'} />
                <button
                    className='cursor-pointer uppercase text-[16px] max-md:text-[14px] p-[10px_20px] max-md:p-[8px_12px] rounded-lg bg-[#d9baa0] hover:bg-white text-[#160A0A] hover:scale-95 transition-all duration-300 font-medium shadow-2xl'
                    onClick={openModal}
                >
                    Enquire
                </button>
            </div>
        </div>
    )
}

export default Header
