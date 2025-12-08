import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/home/Hero'
import Testimonials from "../Components/Testimonials";




function Home() {
    return (
        <div>
           <Navbar/> 
           <Hero/>
           <Testimonials />

        </div>
    )
}

export default Home
