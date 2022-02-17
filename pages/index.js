import styles from "../styles/Home.module.css";
import Topnav from "./Components/Topnav";
import Landing from "./Components/Landing";
import Record from "./Components/Record";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import axios from "axios";

import { useEffect, useState } from "react";


export default function Home() {
  const url = "http://localhost:8081/fetchpatients";

  const url2 = "http://localhost:1337/api/patient-names";
  // const createData = (newData) => axios.post(url2, newData);
  var response;
  const [sent,dataSent] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      response = result.data;
      console.log(response);
      sendData();
    };
    fetchData();
  }, []); 

  const sendData = async () => {
    if (sent==false) {
      try {
        response.forEach((response) => {
          // console.log(response.name);
          axios.post(url2, {
            data: {
              name: response.name,
              surname: response.surname,
              age: response.age,
              blood_type: response.bloodtype,
              ailment: response.ailment,
              medicine: response.medicine,
              last_visit: response.last_visit,
              allergies: response.allergies,
              next_of_kin: response.next_of_kin,
              next_of_kin_contact: response.next_of_kin_contact,
              gender: response.gender,
              address: response.address,
            },
          });
        });
      } catch (error) {
        console.log(error);
      }
      dataSent(true)
    } else {
      console.log("data already uploaded")
    }
   
  };
  return (
    <div className="font-Roboto">
      <Topnav />
      <Landing />
      <Record />
      <Cards />
      <Footer />
    </div>
  );
}
