import { React, useState } from "react";

function Data(props) {
  // const [newData, setNewData] = useState(null);
  // props.func(newData)
  const handleclick = () => {
      props.func(false)
  };
  console.log(props.open);
  return (
    <div>
      {props.open ? (
        <div className=" absolute h-full flex justify-center items-center w-full top-0 backdrop-blur-md flex-col">
          <button
            className="btn hover:bg-white hover:text-blue-600 border-2 hover:border-blue-600 hover:border-2 mb-1"
            onClick={() => handleclick()}
          >
            Close
          </button>
          <div className=" relative py-3 px-6 bg-white font-Roboto font-medium shadow-2xl">
            <h1 className=" text-center text-3xl font-extrabold mb-5">M</h1>
            <h3 className=" mb-1">Name: {props.info.attributes.name}</h3>
            <p className=" mb-1">Age: {props.info.attributes.age}</p>
            <p className=" mb-1">Blood Type: {props.info.attributes.blood_type}</p>
            <p className=" mb-1">Ailment: {props.info.attributes.ailment}</p>
            <p className=" mb-1">Medicine: {props.info.attributes.medicine}</p>
            <p className=" mb-1">Last visit: {props.info.attributes.last_visit}</p>
            <p className=" mb-1">Allergies: {props.info.attributes.allergies}</p>
            <p className=" mb-1">Next of Kin: {props.info.attributes.next_of_kin}</p>
            <p className=" mb-1">Next of Kin Contact: {props.info.attributes.next_of_kin_contact}</p>
            <p className=" mb-1">Address: {props.info.attributes.address}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Data;
