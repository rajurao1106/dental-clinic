import AboutUs from '@/components/homepage/About'
import Booking from '@/components/homepage/CTA'
import FAQ from '@/components/homepage/FAQ'
import Hero from '@/components/homepage/Hero'
import Services from '@/components/homepage/Services'
import Testimonials from '@/components/homepage/Testimonials'
import WhyChooseUs from '@/components/homepage/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
      <FAQ/>
      <Booking/>
    </div>
  )
}
