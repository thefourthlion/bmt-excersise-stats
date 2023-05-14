import React, { useState } from "react";
import Input from "../components/Input";
import { date } from "../context/date";
import { refreshPage } from "../context/refresh";

const Daily = () => {
  const [pushUps, setPushUps] = useState("");
  const [sitUps, setSitUps] = useState("");
  const [mile, setMile] = useState("");

  const sendFormToDb = () => {
    Axios.post("https://localhost:3001/api/daily/create", {
      pushUps: pushUps,
      sitUps: sitUps,
      mile: mile,
      timestamp: date,
    }).then(() => {
      refreshPage();
    });
  };

  return (
    <div className="Daily pages">
      <div className="container">
        <h1 className="content-header">Daily</h1>

        <h3>Push Ups</h3>
        <Input
          placeholder="Push Ups"
          onChange={(e) => {
            setPushUps(e.target.value);
          }}
        />

        <h3>Sit Ups</h3>
        <Input
          placeholder="Sit Ups"
          onChange={(e) => {
            setSitUps(e.target.value);
          }}
        />

        <h3>1.5 Mile</h3>
        <Input
          placeholder="Time"
          onChange={(e) => {
            setMile(e.target.value);
          }}
        />

        <button
          onClick={() => {
            sendFormToDb();
          }}
          className="primary-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Daily;
