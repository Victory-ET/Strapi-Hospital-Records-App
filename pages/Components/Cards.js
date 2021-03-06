import { React, useState } from "react";
import Data from "./data";

function Cards({ results }) {
  const [data, moreData] = useState(false);
  const [fullData, getFullData] = useState([]);
  const pull_data = (dat) => {
    moreData(dat);
    console.log(dat);
  };

  console.log(fullData)

  console.log(results);
  return (
    <div className=" relative">
      <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-8 py-12">
        {results.map((item, index) => (
          <div className=" flex flex-col rounded-md shadow-2xl" key={index}>
            <div className=" p-6 flex flex-col items-center">
              <h1 className=" text-4xl font-black text-blue-600 uppercase">
                {item.attributes.gender == "male" ? "M" : "F"}
              </h1>
              <h3 className=" mt-6 mb-2 text-xl">{item.attributes.name}</h3>
              <hr className=" w-2/5 border-b border-blue-600"></hr>
              <div className=" flex p-6">
                <button
                  className=" btn hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600 hover:border-2 "
                  onClick={() => {
                    moreData(true)
                    getFullData(item)
                  }}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* <div className=' flex flex-col rounded-md shadow-2xl'>
          <div className=' p-6 flex flex-col items-center'>
              <h1 className=' text-4xl font-black text-blue-600 uppercase'>F</h1>
              <h3 className=' mt-6 mb-2 text-xl'>Anita Florence</h3>
              <hr className=' w-2/5 border-b border-blue-600'></hr>
              <div className=' flex p-6'>
              <button className=" btn hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600 hover:border-2">
              More Info
            </button>
              </div>
          </div>
      </div>
      <div className=' flex flex-col rounded-md shadow-2xl'>
          <div className=' p-6 flex flex-col items-center'>
              <h1 className=' text-4xl font-black text-blue-600 uppercase'>M</h1>
              <h3 className=' mt-6 mb-2 text-xl'>James Micheal</h3>
              <hr className=' w-2/5 border-b border-blue-600'></hr>
              <div className=' flex p-6'>
              <button className=" btn hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600 hover:border-2"
              onClick={()=> moreData(true)}
              >
              More Info
            </button>
              </div>
          </div>
      </div> */}
      </div>
      {/* More info on Patient Data */}
      <Data open={data} func={pull_data} info={fullData}/>
    </div>
  );
}

export default Cards;
