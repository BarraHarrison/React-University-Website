import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Programs from './components/programs/programs'
import Title from './components/title/title'
import About from './components/about/about'
import Campus from './components/campus/campus'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our Programmes' title='What we Offer'></Title>
        <Programs></Programs>
        <About></About>
        <Title subTitle='Gallery' title='Campus Photos'></Title>
        <Campus></Campus>
        <Title subTitle='Testimonials' title='What our students say'></Title>
        <Testimonials></Testimonials>
        <Title subTitle='Contact Us' title='Get in Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default App
