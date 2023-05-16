import React, {useState, useEffect} from "react";
import axios from "axios";

export default function BoredApi() {
    const [Bored, setBored] = useState("");
  
    useEffect(() => {
      const getBored = async () => {
        const response = await axios.get("https://www.boredapi.com/api/activity");
        setBored(response.data)
      };
      getBored();
    }, []);
  
    return (
      <div>
        <h1>Personal Information</h1>
        <h2> accessibility: {Bored.accessibilitY}</h2>
        <h3> activity: {Bored.activity}</h3>
        <p> key: {Bored.key}</p>
        {/* <p> link: {Bored.link}</p> */}
        <p> participants: {Bored.participants}</p>
        <p> price: {Bored.price}</p>
        <p> type: {Bored.type}</p>
      </div>
    )
  }
  