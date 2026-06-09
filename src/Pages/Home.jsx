import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutSection from "../components/AboutSection";
import Tracks from "../components/Tracks";
import ImportantDates from "../components/ImportantDates";
import CallForPapers from "../components/CallForPapers";
import Venue from "../components/Venue";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection/>
      <Tracks />
      <ImportantDates/>
      <CallForPapers/>
      <Venue/>
      <Contact/>
      <Footer/>
    </>
  )
}
