import ImagesSection from "./components/ImagesSection.jsx";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar.jsx";
import PlayReel from "./components/PlayReel.jsx";
import SectionSeparator from "./components/SectionSeparator.jsx";
import SpreadSection from "./components/SpreadSection.jsx";
import WorkSection from "./components/WorkSection";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full">
      <Navbar />
      <Landing />
      <SectionSeparator />
      <WorkSection />
      {/* <PlayReel />
      <ImagesSection /> 
      <SpreadSection /> */}
    </div>
  );
}

export default App;
