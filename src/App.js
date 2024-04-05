import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Enquiry from "./components/Enquiry";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";


function App() {
  return (
    <div>
      <Navbar/>    
      <Banner/>
      <Clients/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Explore/>
      <Enquiry/>
      <Footer/>
    </div>
  );
}

export default App;
