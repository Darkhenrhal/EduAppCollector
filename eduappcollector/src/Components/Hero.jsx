import React from "react";
import { toast, Toaster } from "react-hot-toast"; // Import the toast functionality
import add from "../../src/assets/mockups/add.png";
import login from "../assets/mockups/login.png";
import summery from "../assets/mockups/Summary.png";

const Hero = () => {
  
  // Function to handle the download click
  const handleDownloadClick = () => {
    // Simulate download logic
    const downloadUrl = "/MyGPA.apk";

    fetch(downloadUrl)
      .then((response) => {
        if (response.ok) {
          // If the download is successful
          toast.success("Download started successfully!");
        } else {
          // If there's an error
          throw new Error("Download failed");
        }
      })
      .catch(() => {
        toast.error("Error occurred. Please contact the developer.");
      });
  };

  return (
    <section className="px-4 py-16 pt-10 lg:pt-8 md:pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* Toaster to render the toast notifications */}
      <Toaster position="top-right" />

      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="font-sans text-3xl font-bold tracking-tight text-grey  sm:text-4xl sm:leading-none max-w-lg mb-6">
              Simplify Your GPA Calculation,
            </h2>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-grey sm:text-4xl sm:leading-none max-w-lg mb-6">
              <span className="inline-block text-deep-purple-accent-400 text-purple">
                <span className="text-grey">with</span> MyGPA
              </span>
            </h2>
            <p className="text-grey text-base md:text-lg">
              Calculate your GPA with ease using our free and open-source tool. Whether you're a high school or university student, this app helps you stay on top of your academic performance, free from distractions.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {/* Attach download event handler */}
            <a href="/MyGPA.apk" download="MyGPA.apk" onClick={handleDownloadClick}>
              <button className="bg-grey hover:bg-black text-greylight font-bold py-2 px-4 rounded inline-flex items-center transform transition-transform duration-200 active:scale-95">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download Now</span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2 relative">
          {/* Left phone */}
          <div className="w-2/5 relative">
            <img className="object-cover transform translate-x-10" src={login} alt="Left phone" />
          </div>

          {/* Center phone */}
          <div className="w-3/5 relative z-10">
            <img className="object-cover" src={add} alt="Center phone" />
          </div>

          {/* Right phone */}
          <div className="w-2/5 relative">
            <img className="object-cover transform -translate-x-10" src={summery} alt="Right phone" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
