import React, { createContext, useContext, useEffect, useState } from 'react';
import { addTimelineToLocalDB, getTimelineFromLocalDB } from '../../utils/LocalDB';

export const TimelineContext = createContext();

const TimelineProvider = ({children}) => {
    const [timeline,setTimeline] = useState([]);
    useEffect(()=> {
        const saved = getTimelineFromLocalDB();
        if(saved?.length) setTimeline(saved)
    },[])

    const addEntry = (entry) =>{
        const updated = [entry, ...timeline];
        setTimeline(updated);
        addTimelineToLocalDB(entry)
    }
    const data = {
        timeline,
        setTimeline,
        addEntry
    };
      
    return <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
};

export default TimelineProvider;