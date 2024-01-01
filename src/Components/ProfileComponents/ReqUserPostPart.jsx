import React, { useState } from 'react'
import { BiBookmark } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiTag } from "react-icons/fi";
import ReqUserPostCard from './ReqUserPostCard';

const ReqUserPostPart = () => {
    const [activeTab, setActiveTab] = useState();

    const tabs = [
        {
            tab: "Post",
            icon: <FaRegEnvelope></FaRegEnvelope>,
            activeTab: ""
        },
        {
            tab: "Saved",
            icon: <BiBookmark></BiBookmark>
        },
        {
            tab: "Tagged",
            icon: <FiTag></FiTag>
        }
    ]
    return (
        <div>
            <div className='flex space-x-32 border-t border-black relative'>
                {tabs.map((item) => <div onClick={() => setActiveTab(item.tab)} className={`${activeTab === item.tab ? "border-t border-black relative" : "opacity-50"}flex items-center cursor-pointer py-5 text-sm`}>
                    <p>{item.icon}</p>
                    <p className='ml-2'>{item.tab}</p>
                </div>)}

            </div>
            <div>
                <div className='flex flex-wrap'>
                    {[1,1,1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
                </div>
            </div>
        </div>
    )
}

export default ReqUserPostPart