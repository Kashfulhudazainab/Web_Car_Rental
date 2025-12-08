import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/home/Hero'
import ServicesSection from "../Components/ServicesSection";

function Home() {
    return (
        <div>
           <Navbar/> 
           <Hero/>
           <ServicesSection />
        </div>
    )
}

export default Home
