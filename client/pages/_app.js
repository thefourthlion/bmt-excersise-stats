import "../styles/DailyTask.scss";
import "../styles/Input.scss";
import "../styles/Footer.scss";
import "../styles/Navbar.scss";
import "../styles/Stats.scss";
import "../styles/Daily.scss";
import "../styles/Weekly.scss";
import "../styles/index.scss";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
