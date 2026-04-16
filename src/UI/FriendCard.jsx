import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    return (
        <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100 w-full rounded-2xl shadow-sm">
                            <div className='flex justify-center pt-8'>
                                <div className="h-32 w-32 overflow-hidden rounded-full">
                                <img
                                src={friend.picture}
                                alt={friend.name}
                                className="w-full h-full object-cover object-top" />
                                </div>
                            </div>
                            <div className="card-body items-center text-center space-y-3">
                                <h2 className="card-title text-2xl font-bold">{friend.name}</h2>
                                <p className='text-sm text-[#64748B]'>{friend.days_since_contact}d ago</p>
                                <div className='flex flex-wrap gap-1 justify-center'>
                                    {
                                        friend.tags.map((tag,ind)=>(
                                            <span key={ind} className='badge bg-[#CBFADB] text-sm font-semibold rounded-full px-2 py-1 uppercase'>{tag}</span>
                                        ))
                                    }
                                </div>
                                <div className={`text-white px-5 py-1 rounded-full text-sm font-bold capitalize ${friend.status=='almost due' ?'bg-[#EFAD44]': friend.status=='overdue'?'bg-[#EF4444]':friend.status=='on-track'?'bg-[#244D3F]':''}`}>
                                    {
                                        friend.status
                                    }
                                </div>
                            </div>
                        </Link>
    );
};

export default FriendCard;