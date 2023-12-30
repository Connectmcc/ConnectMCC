import React from 'react'
import { TbCircleDashed } from "react-icons/tb"

export const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full ">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full "
            src=" https://cdn.pixabay.com/photo/2023/10/19/21/08/sunset-8327637_1280.jpg "
            alt=" "
          />
        </div>


        <div className=" ml-3 space-y-5"> 
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button>Edit profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>


            <div>
              <span className="font-semibold mr-2">5</span>
              <span>follower</span>
            </div>

            <div>
              <span className="font-semibold mr-2">7</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className='font-semibold'>Anuv Jain</p>
            <p className='font-thin text-sm'>Be Kind and Generous!!!!<br></br>
              MCC 25'
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
