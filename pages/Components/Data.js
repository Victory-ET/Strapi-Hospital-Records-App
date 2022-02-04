import React from 'react';

function Data() {
  return <div className=' absolute h-full flex justify-center items-center w-full top-0 backdrop-blur-md flex-col'>
      <button className='btn hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600 hover:border-2'>Close</button>
      <div className=' relative py-3 px-6 bg-white font-Roboto font-medium shadow-2xl'>
          <h1 className=' text-center text-3xl font-extrabold mb-5'>M</h1>
          <h3 className=' mb-1'>Name: John Doe</h3>
          <p className=' mb-1'>Age: 25</p>
          <p className=' mb-1'>Blood Type: O</p>
          <p className=' mb-1'>Ailment: Cancer</p>
          <p className=' mb-1'>Medicine: Aspirin</p>
          <p className=' mb-1'>Last visit: 12/12/12</p>
          <p className=' mb-1'>Allergies: None</p>
          <p className=' mb-1'>Next of Kin: Isaac Doe</p>
          <p className=' mb-1'>Next of Kin Contact: 0700000</p>
          <p className=' mb-1'>1, Main Street, Dublin, Ireland</p>
      </div>
  </div>;
}

export default Data;
