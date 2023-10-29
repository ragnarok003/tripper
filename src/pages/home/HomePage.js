import React from 'react'
import Header from './Header'
import SearchFlights from './SearchFlights'
import TopFlights from './TopFlights'
import WhyUs from './WhyUs'
import OurCustomerSay from './OurCustomerSay'
import FAQ from './FAQ'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
       <Header />
       <SearchFlights />
       <TopFlights />
       <WhyUs />
       <OurCustomerSay />
       <FAQ />
       <Footer />
    </div>
  )
}

export default HomePage