import React from 'react'
import Image from "next/image";
import Button from './Button';
const Hero = () => {
  return (
    <section
    className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div
      className='hero-map'
      />
      {}

      <div
      className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
        src="/conference.png"
        alt="conference"
        width={25}
        height={25}
        className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
        /> */}
        <h1
        className="regular-10 bold-52 lg:bold-72 text-gray-10">
          <strong
          className='text-white'>
            International Conference 
            </strong>
            <span className="italic"> on Computer Vision, IoT and Applications</span>
            <strong
            className='text-white'> IICVIA 2025</strong>
        </h1>
        <p
        className='italic text-white'>By Division of Core Computing, School of Computing Science and Engineering (SCOPE)</p>
        <p
        className="regular-14 mt-4 text-white">
The International Conference on Computer Vision, IoT, and Applications (ICCVIA 2025) is a conference that specifically addresses the integration of advanced research in computer vision, the Internet of Things (IoT), and their practical implementations. This conference is a momentous occasion for scholars, practitioners, and professionals in various domains, offering an opportunity to engage in discussions about progress, difficulties, and forthcoming developments. The technical session of the conference will be conducted in hybrid (physical and online) mode. All the presented papers will be published by IEEE (In process).        </p>
        <div
        className='my-3 flex flex-wrap gap-5'>
          {/* <div
          className='flex-items-center gap-2'>
            {Array(5).fill(1).map((_,index) => (
              <Image
              src="public/star2.svg"
              key={index}
              alt="star"
              width={24}
              height={24}
              />
            ))}
          </div> */}
          {/* <p className='bold-16 lg:bold-20 text-blue-70'
          >198k
            <span
            className='regular-16 lg:regular-20 ml-1 underline'
            >Excellent Reviews</span>
          </p> */}
        </div>
        <div className='flex flex-col w-full gap-4 sm:flex-row'>
          <Button type={'button'}
          title={'Register Now'}
          variant={'btn_dark_blue'}/>
          <Button type={'button'}
          icon='/register.png'
          title={'Know More'}
          variant={'btn_white_text'}/>
        </div>
      </div>
      <div
      className='relative flex flex-1 items-start justify-end'>
        <div
        className='realtive z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
          <div
          className='flex flex-col'>
            <div
            className='flexBetween'>
              <p
              className='regular-16 text-gray-20'>
                Location
              </p>
              <Image src="/idea.png" alt='close' width={24} height={24}/>
            </div>
            <p
            className='bold-20 text-white'>Auditorium</p>
            </div>
            <div
            className='flexBetween'>
              <div
              className='flex flex-col'>
                <p
                className='regular-16 block text-gray-20'>Date</p>
                <p
                className='bold-20 text-white'>24/04/25 - 26/04/25</p>
              </div>
              <div
              className='flex flex-col'>
                <p
                className='regular-16 block text-gray-20'>Starts</p>
                <p
                className='bold-20 text-white'>13:00</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero