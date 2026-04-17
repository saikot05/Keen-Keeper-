import React, { useContext, useEffect, useState } from 'react';
import { TimelineContext } from '../../components/context/TimelineContext';

const BannarCard = () => {
    const {timeline} = useContext(TimelineContext)
    const [friends,setFriends] = useState([]);
    useEffect(()=>{
        fetch("/data.json").then(res=>res.json()).then(data => setFriends(data));

    },[]);
    
    const totalFriends = friends.length;

    const onTrack = timeline.filter(item => item.title.includes('Call')).length;

    const needAttention = timeline.filter(item => 
    item.title.includes('Text') || item.title.includes('Video')
    ).length;
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const interactionsThisMonth = timeline.filter(item => {
    const date = new Date(item.date);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    }).length;
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-10'>
            <div className='card bg-base-200 rounded-xl p-6 text-center shadow-sm'>
                <h3 className='text-3xl font-bold text-[#244D3F] '>{totalFriends}</h3>
                <p className='text-lg text-[#64748B] '>Total Friends</p>
            </div>
            <div className='card bg-base-200 rounded-xl p-6 text-center shadow-sm'>
                <h3 className='text-3xl font-bold text-[#244D3F] '>{onTrack}</h3>
                <p className='text-lg text-[#64748B] '>On Track</p>
            </div>
            <div className='card bg-base-200 rounded-xl p-6 text-center shadow-sm'>
                <h3 className='text-3xl font-bold text-[#244D3F] '>{needAttention}</h3>
                <p className='text-lg text-[#64748B] '>Need Attention</p>
            </div>
            <div className='card bg-base-200 rounded-xl p-6 text-center shadow-sm'>
                <h3 className='text-3xl font-bold text-[#244D3F] '>{interactionsThisMonth}</h3>
                <p className='text-lg text-[#64748B] '>Interactions This Month</p>
            </div>
        </div>
    );
};

export default BannarCard;