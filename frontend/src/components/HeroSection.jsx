import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className='w-full bg-neutral-800 mt-16 text-gray-50'>
            <div className='max-w-3xl px-3 mx-auto flex items-center justify-center py-12 md:py-24'>

                <div className='text-center py-3'>
                    <h1 className='text-5xl md:text-8xl text-center text-gray-50 mb-6 font-medium tracking-tighter'>Your Voice, Your Platform</h1>
                    <p className='text-gray-400 text-xl'>Start blogging in seconds.  Share your thoughts, stories</p>
                    <Link to="/startwriting">
                        <button className="relative px-6 py-3  cursor-pointer mt-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md md:text-2xl font-medium text-gray-50 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 ">✍️ Start Writing</button>

                    </Link>

                </div>
            </div>
        </div>
    )
}

export default HeroSection