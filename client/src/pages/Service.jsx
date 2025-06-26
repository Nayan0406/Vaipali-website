import React from 'react'
import ServiceSection from '../component/ServiceSection.jsx'
import ServiceKnowSection from '../component/ServiceKnowSection.jsx'
import Services from '../component/Services.jsx'
import FAQSection from '../component/FAQSection.jsx'
import SubscriptionSection from '../component/SubscriptionSection.jsx'

const Service = () => {
  return (
    <div>
      <ServiceSection />
      <ServiceKnowSection />
      <Services />
      <FAQSection />
      <SubscriptionSection />
    </div>
  )
}

export default Service
