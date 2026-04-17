import React from 'react';
import instaImg from '../../assets/assets/instagram.png'
import facebookImg from '../../assets/assets/facebook.png'
import twitterImg from '../../assets/assets/twitter.png'

const Footer = () => {
    return (
        <footer className='bg-[#244D3F] mt-5'>
            <div className='container mx-auto px-4 pt-10'>
                <div className='text-center space-y-3 mb-5'>
                    <h2 className='text-white font-bold text-3xl sm:text-4xl md:text-5xl'>KeenKeeper</h2>
                    <p className='text-gray-400 text-sm max-w-xl mx-auto px-2'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p className='text-white text-xl font-bold'>Social Links</p>
                    <div className='flex items-center justify-center gap-3'>
                        <div className='bg-white rounded-full flex items-center justify-center'>
                            <img src={instaImg} alt="instagram" />
                        </div>
                        <div className=' bg-white rounded-full flex items-center justify-center'>
                            <img src={facebookImg} alt="facebook"/>
                        </div>
                        <div className=' bg-white rounded-full flex items-center justify-center'>
                            <img src={twitterImg} alt="twitter"/>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-500 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-xs sm:text-sm'>
                    <p className='text-center md:text-left'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex flex-wrap justify-center gap-4 md:gap-8'>
                        <p className='cursor-pointer hover:text-white transition-colors'>Privacy Policy</p>
                        <p className='cursor-pointer hover:text-white transition-colors'>Terms of Service</p>
                        <p className='cursor-pointer hover:text-white transition-colors'>Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;