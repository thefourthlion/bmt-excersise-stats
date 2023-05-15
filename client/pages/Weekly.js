import React, { useState, useEffect } from "react";
import { date } from "../context/date";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { refreshPage } from "../context/refresh";

import Axios from "axios";

const Weekly = () => {
  const [pushUps, setPushUps] = useState("");
  const [sitUps, setSitUps] = useState("");
  const [mile, setMile] = useState("");
  const [id, setId] = useState("");

  const [dailies, setDailies] = useState([]);

  const sendFormToDb = () => {
    Axios.post("https://api.bmt.everettdeleon.com/api/Weekly/create", {
      id: id,
      pushUps: pushUps,
      sitUps: sitUps,
      mile: mile,
      timestamp: date,
    }).then(() => {
      refreshPage();
    });
  };

  const fetchData = async () => {
    await Axios.get("https://api.bmt.everettdeleon.com/api/Weekly/read").then(
      (res) => {
        const data = res.data;
        setDailies(data);
      }
    );
  };

  useEffect(() => {
    fetchData();
    setId(dailies.length + 1);
  }, []);

  return (
    <div className="Weekly pages">
      <div className="container">
        <h1 className="content-header">Weekly</h1>

        <h3>Push Ups</h3>
        <FloatingLabel
          className="search-input-label form-label"
          label="Push Ups"
        >
          <Form.Control
            className="search-input-form-control form-input"
            type="text"
            placeholder="Push Ups"
            onChange={(e) => {
              setPushUps(e.target.value);
            }}
          />
        </FloatingLabel>

        {/* <input type="text" /> */}

        <h3>Sit Ups</h3>
        <FloatingLabel
          className="search-input-label form-label"
          label="Sit Ups"
        >
          <Form.Control
            className="search-input-form-control form-input"
            type="text"
            placeholder="Sit Ups"
            onChange={(e) => {
              setSitUps(e.target.value);
            }}
          />
        </FloatingLabel>

        <h3>1.5 Mile</h3>
        <FloatingLabel className="search-input-label form-label" label="Time">
          <Form.Control
            className="search-input-form-control form-input"
            type="text"
            placeholder="Time"
            onChange={(e) => {
              setMile(e.target.value);
            }}
          />
        </FloatingLabel>

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
export default Weekly;
