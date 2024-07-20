import Image from 'next/image'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
{/* <Image src="/star2.svg" alt="camp" width={40} height={50} /> */}
<p className="box-header">
</p>
<div className="box-content">
  <h2 className="box-title">About The Conference</h2>
  <p className="box-text">
    The International Conference on Computer Vision, IoT, and Applications (ICCVIA 2025) is a conference that specifically addresses the integration of advanced research in computer vision, the Internet of Things (IoT), and their practical implementations. This conference is a momentous occasion for scholars, practitioners, and professionals in various domains, offering an opportunity to engage in discussions about progress, difficulties, and forthcoming developments. The technical session of the conference will be conducted in hybrid (physical and online) mode. All the presented papers will be published by IEEE (In process).
  </p>
</div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/meet.png"
          alt="boat"
          width={1440}
          height={1000}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[4%] lg:top-4%">
          <Image 
            src="/linev.png"
            alt="meter"
            width={16}
            height={1}
            className="h-90 w-15"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="bold-16 text-blue-900">Tracks</p>
                {/* <p className="bold-16 text-green-50">Tracks</p> */}
              </div>
              <p className="bold-12 mt-2">1. Deep Learning Powered Computer Vision</p>
              <p className="bold-12 mt-2">2. Physics Inspired Computer Vision and Applications</p>
              <p className="bold-12 mt-2">3. Quantum Computing based Computer Vision</p>
              <p className="bold-12 mt-2">4. Computer Vision in Underwater Research</p>
              <p className="bold-12 mt-2">5. Satellite/Aerial Imaging using Computer Vision and Its Applications</p>
              <p className="bold-12 mt-2">6. Computer vision in Robotics</p>
              <p className="bold-12 mt-2">7. Motion Analysis and Tracking using Vision and IoT</p>
              <p className="bold-12 mt-2">8. Object Recognition and its Behavior Analysis using Computer Vision</p>
              <p className="bold-12 mt-2">9. 3D Pose Estimation using Vision and its Applications</p>
              <p className="bold-12 mt-2">10. Computer Vision in Surveillance and Security Systems</p>
              <p className="bold-12 mt-2">11. Computer Vision and IoMT for Healthcare</p>
              <p className="bold-12 mt-2">12. IoT Driven Computer Vision in 5G IIoT</p>
              <p className="bold-12 mt-2">13. Computer Vision and IoT in Agriculture</p>
              <p className="bold-12 mt-2">14. e-Health Tools and Applications using Vision and IoT</p>
              <p className="bold-12 mt-2">15. Refinement in Education using IoT</p>
              <p className="bold-12 mt-2">16. IoT in Smart Cities</p>
              <p className="bold-12 mt-2">17. General Track- AI & ML, Edge Computing, Cloud Computing, Federated Learning</p>
            </div>

            {/* <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20"></p>
              <h4 className="bold-20 mt-2 whitespace-nowrap"></h4>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide