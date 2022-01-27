import React from 'react';
import Image from 'next/image';
function Landing() {
  return <div>
      <section className=' relative'>
          {/* hero section */}
        <div className=' container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28'>
            {/* content */}
            <div className='flex flex-1 flex-col items-center lg:items-start'>
                <h2 className=' text-3xl text-blue-600 md:text-4xl lg:text-5xl text-center lg:text-left mb-6'>
                    Search and get Result of Patients Records using the StrapiCMS
                </h2>
                <p className=' text-lg text-center lg:text-left mb-6 text-gray-600'>
                    A simple app mimicking digitalized hospital records. Built on NextJs and powered by Strapi.
                </p>
                <div className=' flex justify-center flex-wrap gap-6'>
                    <button className=' btn hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2'>Try it out</button>
                </div>
            </div>
            {/* image */}
            <div className=' flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
                <Image src="/hosrecords.png" height={500} width={500} className=' w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full'  alt="stethoscope and record"/>
            </div>
        </div>
        {/* container attachment shape */}
        <div className='hidden md:block overflow-hidden bg-blue-600 rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:right-36 lg:w-2/5'></div>
      </section>
  </div>;
}

export default Landing;
