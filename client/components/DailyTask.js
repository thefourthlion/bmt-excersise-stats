import React, { useState, useEffect } from "react";
import Axios from "axios";
import Link from "next/link";
const DailyTask = () => {
  const [lastWeekly, setLastWeekly] = useState([]);

  const fetchLastWeekly = async () => {
    await Axios.get("https://api.bmt.everettdeleon.com/api/weekly/read").then(
      (res) => {
        const data = res.data;
        setLastWeekly(data[data.length - 1]);
        console.log(data[data.length - 1]);
      }
    );
  };

  useEffect(() => {
    fetchLastWeekly();
  }, []);

  return (
    <div className="DailyTask">
      {lastWeekly != [] && (
        <div className="container">
          <h1 className="content-header">Daily Task</h1>

          <h3>You get to do 3 sets (1 minute ea) of.</h3>

          <h4> Push Ups - {Math.ceil(lastWeekly.pushUps / 3)}</h4>

          <h4> Sit Ups - {Math.ceil(lastWeekly.sitUps / 3)}</h4>

          <Link href="/Daily">
            <button className="primary-btn">Set New Daily</button>
          </Link>

          <br />

          <Link href="/Weekly">
            <button className="primary-btn">Set New Weekly</button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default DailyTask;
