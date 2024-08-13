import React from "react";

function About() {
  return (
    <div className="hero min-h-screen  pt-16 flex flex-col items-center justify-start relative">
      {/* Background Pattern with Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-custom-dark-blue bg-[linear-gradient(to_right,#d0d0d0_2px,transparent_2px),linear-gradient(to_bottom,#d0d0d0_2px,transparent_2px)] bg-[size:6rem_4rem] bg-blend-overlay"></div>

      <div className="absolute bottom-[-10%] left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-[-10%] right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div
        aria-hidden="true"
        className="absolute inset-x-8 inset-y-12 mx-auto w-36 rotate-45 scale-x-140 scale-y-150 rounded-full bg-gradient-to-b from-pink-500 to-purple-600 opacity-80 blur-3xl"
      ></div>

      <div className="mt-0.5 text-center">
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
      </div>
    </div>
  );
}

export default About;
