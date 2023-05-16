import Stats from "./Stats";
import DailyTask from "../components/dailyTask";
export default function Home() {
  return (
    <div className="Home pages">
      <DailyTask />
      <hr></hr>
      <Stats />
    </div>
  );
}
