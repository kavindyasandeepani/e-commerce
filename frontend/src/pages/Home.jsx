//Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import ShopBySkinConcern from '../components/ShopBySkinConcern'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Footer from '../components/Footer'
import BestOfKBeauty from '../components/BestOfKBeauty'
import PerfectRoutine from '../components/PerfectRoutine'
import JapaneseHairCare from '../components/JapaneseHairCare'
import HairCare from '../components/HairCare'
import BeautyOfJoseon from '../components/BeautyOfJoseon'
import NewAndTrending from '../components/NewAndTrending'
import ThreeImg from '../components/ThreeImg'
import ShopByBrand from '../components/ShopByBrand'
import TestimonialSection from '../components/TestimonialSection'


const Home = () => {
  return (
    <div >
      <Hero/>
      <LatestCollection/>
      <ShopBySkinConcern/>
      <BestOfKBeauty/>
      <JapaneseHairCare/>
      <PerfectRoutine/>
      <BestSeller/>
      <BeautyOfJoseon/>
      <HairCare/>
      <NewAndTrending/>
      <ThreeImg/>
      <ShopByBrand/>
      <TestimonialSection/>
      <OurPolicy/>
      <NewsletterBox/>
      
    </div>
  )
}

export default Home 