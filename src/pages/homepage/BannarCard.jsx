import React from 'react';

const BannarCard = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10'>
            <div className='card bg-base-200 rounded-xl p-6 text-center shadow-sm'>
                <h3 className='text-3xl font-bold text-[#244D3F] '>10</h3>
                <p className='text-lg text-[#64748B] '>Total Friends</p>
            </div>
            <div className='card bg-base-200 rounded-xl p-6 text-center shadow-sm'>
                <h3 className='text-3xl font-bold text-[#244D3F] '>3</h3>
                <p className='text-lg text-[#64748B] '>On Track</p>
            </div>
            <div className='card bg-base-200 rounded-xl p-6 text-center shadow-sm'>
                <h3 className='text-3xl font-bold text-[#244D3F] '>6</h3>
                <p className='text-lg text-[#64748B] '>Need Attention</p>
            </div>
            <div className='card bg-base-200 rounded-xl p-6 text-center shadow-sm'>
                <h3 className='text-3xl font-bold text-[#244D3F] '>12</h3>
                <p className='text-lg text-[#64748B] '>Interactions This Month</p>
            </div>
        </div>
    );
};

export default BannarCard;