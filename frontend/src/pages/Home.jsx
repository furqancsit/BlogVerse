import React from 'react'
import HeroSection from '../components/HeroSection'
import RecentPost from '../components/RecentPost'
import HowitWork from '../components/HowitWork'
import CallToAction from '../components/CallToAction'

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <RecentPost/>
            <HowitWork/>
            <CallToAction  buttonLink="/signup"/>
            
            {/* Navbar */}
            {/* Hero */}
            {/* RecentPost */}
            {/* HowItWorks */}
            {/* CallToAction */}
            {/* Footer */}

        </div>
    )
}

export default Home