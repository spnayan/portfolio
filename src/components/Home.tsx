/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'next/image'
import profileImage from '../assets/images/profile_portfolio.jpg'

const Intro = ({ data }: any) => {
  console.log(data, 'data')
  return (
    <div className='h-[calc(100vh-3rem)] flex items-center justify-center bg-[#F6F5F1]'>
      <div className='flex items-center flex-wrap-reverse'>
        <div className='basis-1/2 space-y-1 sm:space-y-3'>
          <h2 className='font-300 text-[2rem] sm:text-[3rem]'>
            {data.position}
          </h2>
          <h1 className='font-bold md:text-[3.4rem]'>{data.name}</h1>
          <div className='border-l-4 border-l-gray-300 p-5 w-[20rem] mx-auto space-y-4'>
            <p>{data.description}</p>
            <div className='flex gap-x-4'>
              {data.social_links.map((item: any) => (
                <span className='material-icons cursor-pointer' key={item.id}>
                  {item.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='md:basis-1/2 p-2 w-full flex justify-center'>
          <div className=''>
            <Image
              alt='profile'
              src={profileImage}
              className='rounded-full w-[200px] h-[200px] md:w-[500px] md:h-[500px] object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
