import React from 'react'
import Hero from '../components/Hero'
import PopularDestination from '../components/PopularDestination';
import TredingPackage from '../components/TredingPackage'
import Discount from '../components/Discount';
import Replace from '../components/Replace';
import TravelGuid from '../components/TravelGuid';
import Multimedia from '../components/Multimedia';
import SocialProof from '../components/SocialProof';
import Faq from '../components/Faq';
import Map from '../components/Map';
import Review from '../components/Review';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';

function Home() {
  return (
    <>
  <Hero/>
  <PopularDestination/>
  <TredingPackage/>
  <Discount/>
  <Replace/>
  <TravelGuid/>
  <Multimedia/>
  <SocialProof/>
  <Faq/>
  <Map/>
  <HowItWorks/>
  <Review/>
  
  </>
  )
}

export default Home