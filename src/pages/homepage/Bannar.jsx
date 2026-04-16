import React from 'react';
import BannarCard from './BannarCard';

const Bannar = () => {
    
    return (
        <div className='container mx-auto my-10'>
            <div className='text-center space-y-6'>
                <h2 className='font-bold text-5xl'>Friends to keep close in your life</h2>
            <p className='text-sm text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br /> the relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white'>+ Add a Friend</button>
            </div>
            <BannarCard/>
        </div>
    );
};

export default Bannar;