import React from 'react';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { MdOutlineVideocam } from 'react-icons/md';
import { RiDeleteBinLine, RiMessage2Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData } from 'react-router';

const FriendDetails = () => {
    const friend = useLoaderData();

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] lg:grid-cols-[560px_1fr] gap-6 items-start"> 
                <div className="flex flex-col gap-3">
                    <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center gap-3">
                        <div className="h-32 w-32 rounded-full overflow-hidden">
                            <img src={friend.picture} alt={friend.name} className="w-full h-full object-cover object-top" />
                        </div>
                        <h2 className="text-xl font-bold">{friend.name}</h2>

                        <div className={`text-white px-5 py-1 rounded-full text-sm font-bold capitalize 
                            ${friend.status === 'almost due' ? 'bg-[#EFAD44]'
                            : friend.status === 'overdue' ? 'bg-[#EF4444]'
                            : friend.status === 'on-track' ? 'bg-[#244D3F]' : ''}`}>
                            {friend.status}
                        </div>

                        <div className="flex flex-wrap gap-1 justify-center">
                            {friend.tags.map((tag, ind) => (
                                <span key={ind} className="bg-[#CBFADB] text-sm font-semibold rounded-full px-3 py-1 uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="text-sm text-gray-500 text-center italic">"{friend.bio}"</p>
                        <p className="text-sm text-gray-400">Preferred: email</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-2">
                        <button className="w-full shadow-sm rounded-xl py-2.5 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                            <RiNotificationSnoozeLine /> Snooze 2 Weeks
                        </button>
                        <button className="w-full shadow-sm rounded-xl py-2.5 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                            <FiArchive /> Archive
                        </button>
                        <button className="w-full shadow-sm rounded-xl py-2.5 text-sm font-semibold text-red-500 flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
                            <RiDeleteBinLine /> Delete
                        </button>
                    </div>
                </div>
                <div className="grid grid-rows-[auto_auto_auto] gap-8">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-2xl shadow-sm px-5 py-12 text-center">
                            <p className="text-3xl font-bold text-[#244D3F]">{friend.days_since_contact}</p>
                            <p className="text-sm font-semibold text-gray-500 mt-2">Days Since Contact</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm px-5 py-12 text-center">
                            <p className="text-3xl font-bold text-[#244D3F]">{friend.goal}</p>
                            <p className="text-sm text-gray-500 mt-2">Goal (Days)</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm px-5 py-12 text-center">
                            <p className="text-2xl font-bold text-[#244D3F]">
                                {new Date(friend.next_due_date).toLocaleDateString('en-US', {
                                    month: 'short', day: 'numeric', year: 'numeric'
                                })}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm px-6 py-10">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-bold text-lg text-[#244D3F]">Relationship Goal</h3>
                            <button className="btn px-6 py-2 rounded-lg text-sm">Edit</button>
                        </div>
                        <p className="text-gray-600">Connect every <span className="font-bold">{friend.goal} days</span></p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm px-6 py-8">
                        <h3 className="font-bold text-lg mb-4 text-[#244D3F]">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="rounded-xl py-5 flex flex-col items-center gap-2 text-sm font-medium bg-gray-50 hover:bg-gray-100 transition-colors">
                                <FiPhoneCall size={18} /> Call
                            </button>
                            <button className="rounded-xl py-5 flex flex-col items-center gap-2 text-sm font-medium bg-gray-50 hover:bg-gray-100 transition-colors">
                                <RiMessage2Line size={18} /> Text
                            </button>
                            <button className="rounded-xl py-5 flex flex-col items-center gap-2 text-sm font-medium bg-gray-50 hover:bg-gray-100 transition-colors">
                                <MdOutlineVideocam size={18} /> Video
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;