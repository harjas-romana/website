import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/pointer.png"
            alt="map"
            width={16}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>
      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Outside Academic Block"
          subtitle="VIT Bhopal"
          peopleJoined="50+ Joined"
        />
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Inside Academic Block"
          subtitle="VIT Bhopal"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-900 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>About</strong> VIT
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          The VIT legacy, which started from Vellore Engineering College 35 years ago to four Universities in India, today, is a result of constant efforts to impart high quality of education. The Govt. of India has recognized VIT as No. 1 Private Institution for Innovation, ARIIA 2019, and the recent recognition, as an Institution of Eminence, has paved a way to focus more on research with international collaborations to move up in the global ranking and contribute in the capacity building of our nation.          </p>
          <p
          className="regular-14 xl:regular-16 mt-5 text-white">
          VIT Bhopal University, envisioned with a new global outlook will empower its aspirants to attain excellence through learning. The comprehensive teaching methodology designed by the University, redefines the approach to learning, educating and building knowledge-based societies in the country. Collaboration with reputed national and international organizations and strategic partnerships with universities around the world are being established, to prepare a globally competent generation of professionals.

          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp
