import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../../components/context/TimelineContext';



const Stats = () => {
     const { timeline } = useContext(TimelineContext);

    const callCount = timeline.filter(item => item.title.includes('Call')).length;
    const textCount = timeline.filter(item => item.title.includes('Text')).length;
    const videoCount = timeline.filter(item => item.title.includes('Video')).length;
    const data = [
  { name: 'Call', value: callCount,fill:"#244D3F" },
  { name: 'Text', value: textCount,fill:"#8B5CF6" },
  { name: 'Video', value: videoCount,fill:"#3DAB6A" },
];
    return (
        <div className='container mx-auto flex flex-col justify-center my-10'>
            <h2 className='font-semibold text-3xl mb-16 text-center'>Friendship Analytics</h2>
            <div className='flex justify-center shadow-sm p-5 border-slate-300'>
                <p className='text-xl font-semibold text-[#244D3F] mb-5'>By Interaction Type</p>
                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="50%"
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
            />
            <Legend />
            <Tooltip />
            </PieChart>
            </div>
        </div>
    );
};

export default Stats;