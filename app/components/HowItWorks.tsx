import React from 'react'

const HowItWorks = () => {
  return (
    <div className="relative flex items-center justify-center bg-p-grey-dark h-screen">
      <section className="z-10 text-center px-4">
        <div className="max-w-3xl mx-auto">
            <h1 className="lg:text-8xl md:text-7xl text-6xl font-extrabold text-p-cream mb-4">
                printerQ
            </h1>
            <h1 className="lg:text-6xl md:text-5xl text-4xl font-extrabold bg-linear-to-r from-p-cream to-text-secondary-light bg-clip-text text-transparent mb-4">
                Printer on Wheels
            </h1>
            <p className="lg:text-2xl md:text-xl text-lg font-medium text-text-secondary-light">
                Print documents anywhere, anytime with printerQ's mobile printing service.
            </p>
            <button className="mt-8 px-6 py-3 bg-s text-white text-lg font-bold rounded-full hover:bg-s/80 transition-colors relative">
                Join Waitlist
            </button>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
