import React from "react";
import Image from "next/image";
function Landing() {
  return (
    <div>
      <section className=" relative" id="Home">
        {/* hero section */}
        <div className=" container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
          {/* content */}
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h2 className=" text-3xl text-blue-600 md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
              Hospital Patient Records available at the click of a button
            </h2>
            <p className=" text-lg text-center lg:text-left mb-6 text-gray-600">
              A simple app mimicking digitalized hospital records. Built on
              NextJs and powered by Strapi.
            </p>
            <div className=" flex justify-center flex-wrap gap-6">
              <button className=" btn border-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2">
                <a href="#Search">Try it out</a>
              </button>
            </div>
          </div>
          {/* image */}
          <div className=" flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
            <Image
              src="/hosrecords.png"
              height={500}
              width={500}
              className=" w-5/6 h-5/6 sm:h-3/4 md:w-full md:h-full"
              alt="stethoscope and record"
            />
          </div>
        </div>
        {/* container attachment shape */}
        <div className="hidden md:flex items-center justify-center overflow-hidden absolute h-96 w-2/4 top-14 right-0 lg:-bottom-28 lg:right-36 lg:w-2/5">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="450px"
            id="blobSvg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgb(37, 99, 235)"></stop>
                <stop offset="100%" stop-color="rgb(196, 224, 229)"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="8000ms"
                repeatCount="indefinite"
                values="M439.5,306Q444,362,396.5,392Q349,422,299.5,459.5Q250,497,211.5,440.5Q173,384,111,375Q49,366,54,308Q59,250,67.5,200Q76,150,106.5,102Q137,54,193.5,49.5Q250,45,300.5,60Q351,75,381.5,115.5Q412,156,423.5,203Q435,250,439.5,306Z;
                M442.5,289.5Q387,329,378,393Q369,457,309.5,429.5Q250,402,188.5,432.5Q127,463,118.5,397Q110,331,103.5,290.5Q97,250,78,195Q59,140,100,100Q141,60,195.5,52Q250,44,293,72.5Q336,101,359,137.5Q382,174,440,212Q498,250,442.5,289.5Z;
                M435.5,310Q457,370,412.5,412Q368,454,309,459Q250,464,188,464.5Q126,465,83,418Q40,371,56.5,310.5Q73,250,91,209.5Q109,169,134,130.5Q159,92,204.5,67Q250,42,310.5,41.5Q371,41,379.5,105.5Q388,170,401,210Q414,250,435.5,310Z;
                M456,301Q426,352,388.5,388.5Q351,425,300.5,414Q250,403,200.5,412Q151,421,116.5,384Q82,347,79.5,298.5Q77,250,61.5,191Q46,132,105,117Q164,102,207,84.5Q250,67,288.5,92Q327,117,378,132Q429,147,457.5,198.5Q486,250,456,301Z;
                M413,296.5Q411,343,388.5,397Q366,451,308,427Q250,403,194.5,422.5Q139,442,86.5,408.5Q34,375,47,312.5Q60,250,76,204.5Q92,159,119.5,115.5Q147,72,198.5,63.5Q250,55,292.5,79Q335,103,372.5,130Q410,157,412.5,203.5Q415,250,413,296.5Z;
                M439.5,306Q444,362,396.5,392Q349,422,299.5,459.5Q250,497,211.5,440.5Q173,384,111,375Q49,366,54,308Q59,250,67.5,200Q76,150,106.5,102Q137,54,193.5,49.5Q250,45,300.5,60Q351,75,381.5,115.5Q412,156,423.5,203Q435,250,439.5,306Z
                "
                fill="url(#gradient)"
              ></animate>
            </path>
          </svg>
        </div>
      </section>
    </div>
  );
}

export default Landing;
