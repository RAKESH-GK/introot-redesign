import React from 'react';
import Header from './Header';
import Home from './Home';
import TrustedBy from './TrustedBy';
import VisionMission from './VisionMission';
import SuperPowers from './SuperPowers';
import IndustriesMarquee from './IndustriesMarquee';
import ProcessSteps from './ProcessSteps';
// import BookCall from './BookCall';                                                            
import Footer from './Footer';
import OurWorks from './OurWorks';
import VocalForLocalSection from './VocalForLocalSection';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <TrustedBy/>
      <OurWorks/>
      <VisionMission/>
      <VocalForLocalSection/>
      <SuperPowers/>
      <IndustriesMarquee/>
      <ProcessSteps/>
      <Footer/>
    </div>
  );
};

export default App;
