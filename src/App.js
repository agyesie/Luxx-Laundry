import './App.css';
import CommercialService from './layout/CommercialService';
import ContactUs from './layout/ContactUs';
import Footer from './layout/FooterSection';
import Hero from './layout/Hero';
import Navbar from './layout/Navbar';
import OurGoal from './layout/OurGoal';
import Staff from './layout/Staff';
import Testimonials from './layout/Testimonials';
import UniqueSolutions from './layout/UniqueSolutions';
import WhatWeDo from './layout/WhatWeDo';
import WorkProcess from './layout/WorkProcess';
import YoutubeThumbnail from './layout/YoutubeThumbnail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <UniqueSolutions />
      <CommercialService />
      <Staff />
      <OurGoal />
      <YoutubeThumbnail />
      <WorkProcess />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
    
  );
}

export default App;
