import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection";
import Tracks from "../components/Tracks";
import ImportantDates from "../components/ImportantDates";
import Venue from "../components/Venue";
import Contact from "../components/contact";
import Footer from "../components/Footer";
import Countdown from "../components/Countdown";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <Countdown/>
      <AboutSection/>
      <Tracks />
      <ImportantDates/>
      <Venue/>
      <Contact/>
      <Footer/>
    </>
  )
}
