import React, { useState, useEffect } from "react";
import Axios from "axios";
const Stats = () => {
  const [dailies, setDailies] = useState([]);
  const [weeklies, setWeeklies] = useState([]);
  const [lastDaily, setLastDaily] = useState([]);
  const [firstWeekly, setFirstWeekly] = useState([]);
  const [lastWeekly, setLastWeekly] = useState([]);
  const [secondToLastWeekly, setSecondToLastWeekly] = useState([]);
  const fetchDailies = async () => {
    await Axios.get("http://localhost:4005/api/daily/read").then(
      (res) => {
        const data = res.data;
        setDailies(data);
        setLastDaily(data[data.length - 1]);
      }
    );
  };

  const fetchWeeklies = async () => {
    await Axios.get("http://localhost:4005/api/weekly/read").then(
      (res) => {
        const data = res.data;
        setWeeklies(data);
        setFirstWeekly(data[0]);
        setLastWeekly(data[data.length - 1]);
        setSecondToLastWeekly(data[data.length - 2]);
      }
    );
  };

  useEffect(() => {
    fetchDailies();
    fetchWeeklies();
  }, []);

  return (
    <div className="Stats pages">
      <div className="container">
        <h1 className="content-header">Stats</h1>

        <b>
          <h3>Starting</h3>
        </b>

        <h4>
          {firstWeekly.pushUps} / {firstWeekly.sitUps} / {firstWeekly.mile}
        </h4>

        <b>
          <h3>Latest</h3>
        </b>

        <h4>
          <span className={lastWeekly.pushUps > firstWeekly.pushUps && "green"}>
            {lastWeekly.pushUps}
          </span>{" "}
          /{" "}
          <span className={lastWeekly.sitUps > firstWeekly.sitUps && "green"}>
            {lastWeekly.sitUps}
          </span>{" "}
          /{" "}
          <span className={lastWeekly.mile > firstWeekly.mile && "green"}>
            {lastWeekly.mile}
          </span>
        </h4>

        <b>
          <h3>Weekly</h3>
        </b>
        <div className="weekly-stats">
          <div>
            <h4>{secondToLastWeekly.pushUps}</h4>
            <h4>{secondToLastWeekly.sitUps}</h4>
            <h4>{secondToLastWeekly.mile}</h4>
          </div>
          <div>
            <h4
              className={
                lastWeekly.pushUps > secondToLastWeekly.pushUps && "green"
              }
            >
              {lastWeekly.pushUps}
            </h4>
            <h4
              className={
                lastWeekly.sitUps > secondToLastWeekly.sitUps && "green"
              }
            >
              {lastWeekly.sitUps}
            </h4>
            <h4
              className={lastWeekly.mile > secondToLastWeekly.mile && "green"}
            >
              {lastWeekly.mile}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;
