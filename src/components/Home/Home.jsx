import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import Footer from "../Footer/Footer.jsx";

function Home() {
  const aboutSectionRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-custom-dark-blue overflow-hidden">
      {/* Hero Section */}
      <div className="hero min-h-screen flex flex-col justify-center items-center relative">
        {/* Radial Gradient Circles */}
        <div className="absolute bottom-[-10%] left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-[-10%] right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div
          aria-hidden="true"
          className="absolute inset-x-8 inset-y-12 mx-auto w-36 rotate-45 scale-x-140 scale-y-150 rounded-full bg-gradient-to-b from-pink-500 to-purple-600 opacity-80 blur-3xl"
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              CRID
            </h1>
            <p className="text-white mb-4 text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
            </p>
            <p className="text-white mb-4 text-base sm:text-lg">
              Curabitur ut elit bibendum, cursus quam in, pharetra urna. Sed
              cursus, augue vel fringilla auctor, odio nulla scelerisque mi.
            </p>
            <p className="text-white mb-4 text-base sm:text-lg">
              Phasellus consequat libero ac eros aliquet, vel congue odio
              dictum.
            </p>
            <p className="text-white mb-4 text-base sm:text-lg">
              In ac ipsum nec dolor vehicula sollicitudin. Donec dignissim massa
              non bibendum ullamcorper.
            </p>
            <div className="flex justify-center lg:justify-start text-white">
              <button
                type="button"
                onClick={scrollToAbout}
                className="inline-flex items-center rounded-md bg-white px-5 py-3 text-black text-sm font-semibold hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="/images/data-home.jpg"
              className="max-w-full lg:max-w-md rounded-lg shadow-2xl"
              alt="Hero"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        ref={aboutSectionRef}
        className="py-20 w-full flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-white text-4xl font-bold font-redHat">
          About
          <span className="font-redHat"> CRID</span>
        </h1>
        <p className="mt-4 text-white text-lg max-w-xl mx-auto text-justify font-space">
          CRID is a comprehensive platform dedicated to fostering community and
          innovation through research and development. Our mission is to bridge
          the gap between academia and industry, facilitating groundbreaking
          projects and fostering collaborative growth. Join us in our pursuit of
          excellence and be a part of the future of innovation.
        </p>

        {/* Images Side by Side */}
        <div className="mt-8 flex justify-center gap-12">
          <img
            src="/images/center-image.jpg" // Replace with the actual path to your first image
            alt="Magazine Cover"
            className="max-w-md w-full h-fit rounded-lg shadow-lg"
          />
          <img
            src="/images/SCIPIA-2 FIRST PAGE.jpg" // Replace with the actual path to your second image
            alt="Second Magazine Cover"
            className="max-w-md w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
