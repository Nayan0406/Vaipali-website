import React from 'react'
import HomeSection from '../component/HomeSection'
import InnovationSection from '../component/InnovationSection'
import HomeService from '../component/HomeService'
import HomeTestimonial from '../component/HomeTestimonial'
import SubscriptionSection from '../component/SubscriptionSection'

const Home = () => {
  return (
    <div>
      <HomeSection />
      <InnovationSection />
      <HomeService />
      <HomeTestimonial />
      <SubscriptionSection />
    </div>
  )
}

export default Home
