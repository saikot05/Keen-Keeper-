import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../components/context/TimelineContext';
import callImg from '../../assets/assets/call.png'
import textImg from '../../assets/assets/text.png'
import videoImg from '../../assets/assets/video.png'

const Filter_option = ['All','Call','Text','Video'];
const Timeline = () => {

    const {timeline} = useContext(TimelineContext)
    const [filter,setFilter]=useState('All')
    
    const getIcon = (title) =>{
        if(title.includes('Call')) return callImg
        if(title.includes('Text')) return textImg
        if(title.includes('Video')) return videoImg
        return null;
    }

    const filteredTimeline = filter === 'All' ? timeline : timeline.filter(item => item.title.includes(filter));
    return (
        <div className='container mx-auto px-4 py-8'>
            <h2 className='text-3xl font-bold mb-6'>Timeline</h2>
            <div className="mb-6">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-500 bg-white shadow-sm cursor-pointer"
                >
                    {Filter_option.map(option => (
                        <option key={option} value={option}>
                            {option === 'All' ? 'Filter timeline' : option}
                        </option>
                    ))}
                </select>
            </div>
  
            {
                filteredTimeline.map((item,ind)=>{
                    return <div key={ind} className='bg-white shadow-sm rounded-lg mb-5  p-4 flex items-center gap-4'>
                       <div className='w-10 h-10'>
                            <img src={getIcon(item.title)} alt="type" className='w-full h-full object-contain' />
                        </div> 
                        <div>
                            <p className='text-sm font-semibold'>{item.title}</p>
                            <p className='text-xs text-gray-500'>{item.date}</p>
                        </div>
                    </div>
                })   
            }
        </div>
    );
};

export default Timeline;