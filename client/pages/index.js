import Stats from "./Stats";
import DailyTask from "../components/DailyTask";
export default function Home() {
  return (
    <div className="Home pages">
      <DailyTask />
      <hr></hr>
      <Stats />
    </div>
  );
}
