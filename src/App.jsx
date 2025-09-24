
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Problem from './components/Problem/Problem'
import Solution from './components/Solution/Solution'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonial/Testimonial'
import FAQ from './components/Faq/Faq'
import Closing from './components/Closing/Closing'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />  
      <Problem />
      <Solution />  
      <Pricing />
      <Testimonials />
      <FAQ />
      <Closing />
      <Footer />
    </>
  )
}

export default App
