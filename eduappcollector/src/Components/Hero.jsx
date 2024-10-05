import React from "react";

const Hero = () => {
    return (
        <section className="px-4 py-16 pt-0 lg:pt-8 md:pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-1 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Free, Fast, and Open Source...</p>
                </div>
                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                  Simplify Your GPA Calculation, 
                  {/* <br className="hidden md:block" />
                  &nbsp;for FREE{' '} */}
                  {/* <span className="inline-block text-deep-purple-accent-400">is real</span> */}
                </h2>
                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                 
                 
                <span className="inline-block text-deep-purple-accent-400"> with MyGPA</span> 
                </h2>
                <p className="text-gray-700 text-base md:text-lg">Calculate your GPA with ease using our free and open-source tool. Whether you're a high school or university student, this app helps you stay on top of your academic performance, free from distractions.</p>
              </div>
              <div className="flex items-center space-x-3">
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                  <span>Download</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:w-1/2">
              <div className="w-2/5">
                <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
              </div>
              <div className="w-5/12 -ml-16 lg:-ml-32">
                <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
              </div>
            </div>
          </div>
          {/* <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
            </svg>
          </a> */}
        </section>
      );
}

export default Hero;