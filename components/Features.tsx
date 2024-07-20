import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/meet2.png"
            alt="meet2"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <Image
              src="/star.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-20px] top-[-28px] w-10 lg:w-[40px]"
            />
            <h2 className="bold-40 lg:bold-64">Keynote Speakers</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
          {FEATURES.map((feature) => (
  <FeatureItem 
    key={feature.title}
    title={feature.title} 
    icon={feature.icon}
    className="large-icon"
    description={feature.description}
  />
))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  className?: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="flex justify-center">
        <div className="rounded-full overflow-hidden w-28 h-28 lg:w-32 lg:h-32">
          <Image src={icon} alt="map" width={128} height={128} className="object-cover w-full h-full" />
        </div>
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features