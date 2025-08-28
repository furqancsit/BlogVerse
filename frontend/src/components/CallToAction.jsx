import React from 'react'

const CallToAction = ({
  headline = "Ready to get started?",
  subtext = "Join us today and make your workflow easier.",
  buttonText = "Get Started",
  onClick,
  buttonLink = "#"
}) => {
  return (
    <div className="w-full bg-transparent py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          {headline}
        </h2>
        <p className="text-lg text-red-100 mb-8">
          {subtext}
        </p>
        <div>
          <a
            href={buttonLink}
            onClick={onClick}
            className="inline-block px-6 py-3 text-base font-medium text-red-600 bg-white rounded-md shadow hover:bg-gray-100 transition duration-300"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction