import React, { useEffect, useState } from 'react';
import FriendCard from '../../UI/FriendCard';
import { ScaleLoader } from 'react-spinners';


const FriendData = () => {
    
    const [friends,setFriends] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch("/data.json");
            const data = await res.json();
            console.log(data);
            setFriends(data);
            setLoading(false);
        }
        fetchData();
    },[])
    //console.log(friends,'friends');
    return (
        <div className='container mx-auto px-4 py-8'>
            <h2 className='font-bold text-3xl mb-10'>Your Friends</h2>
            {
                loading ? (
                    <div className='flex justify-center items-center'>
                        <ScaleLoader />
                    </div>
                ):(
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    friends.map((friend,ind)=>{
                        return <FriendCard friend={friend} ind={ind} />
                        
                    })
                }
            </div>
                )

            }
            
        </div>
    );
};

export default FriendData;