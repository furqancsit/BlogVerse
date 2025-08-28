import React from 'react'

const steps = [
    {
        id: 1,
        title: "Create an Account",
        description: "Sign up in seconds using your email or social login.",
        icon: "👤",
    },
    {
        id: 2,
        title: "Write Your Post",
        description: "Use our clean editor to draft, format, and preview your thoughts.",
        icon: "✍️",
    },
    {
        id: 3,
        title: "Publish Instantly",
        description: "Hit 'Publish' and share your post with the world instantly.",
        icon: "🚀",
    },

];


const HowitWork = () => {
    return (
        <div className='w-full bg-neutral-800 py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-8 text-center'>
                <h1 className='text-4xl font-bold mb-12 text-white'>How it Works</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className='rounded-lg bg-gradient-to-b from-neutral-700 to-neutral-800 border border-neutral-600 p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300'
                        >
                            <div className='text-5xl text-red-600 mb-4'>{step.icon}</div>
                            <h2 className='text-2xl font-bold text-white mb-2'>{step.title}</h2>
                            <p className='text-gray-300'>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    )
}

export default HowitWork