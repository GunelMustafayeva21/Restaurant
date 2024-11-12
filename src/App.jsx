import React from 'react'
import BgImage from "./assets/1.png";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TopList from './components/TopList/TopList'
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

const BgStyle={
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center"
}

const App = () => {
  return (
    <div className='overflow-x-hidden' style={BgStyle}>
      <div className='min-h-screen bg-white/30 backdrop-blur-lg'>
      <Navbar/>
      <Hero/>
      <TopList/>
      <Banner/>
      <Services/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
