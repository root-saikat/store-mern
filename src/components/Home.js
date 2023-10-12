import React from 'react'
import Slider from './Sliderhero';
import Productonhome from './Productonhome';
import DeliveryBanner from './DeliveryBanner';
import BrandsHome from './BrandsHome';
import Review from './Review';
import ComboPack from './ComboPack';
import PolicyBanner from './PolicyBanner';
import AboutUs from './AboutUs';


const Home = () => {
  return (
    <div className='container my-4'>
       <Slider/>
       <Productonhome/>
       <DeliveryBanner/>
       <BrandsHome/>
       <Review/>
       <ComboPack/>
       <PolicyBanner/>
       <AboutUs/>
    </div>
  )
}

export default Home;
