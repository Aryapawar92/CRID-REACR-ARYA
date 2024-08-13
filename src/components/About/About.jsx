import React from "react";
import Grid from "./CardGrid.jsx";
import Footer from "../Footer/Footer.jsx";
import CardGrid from "./CardGrid.jsx";

function About() {
  return (
    <div className="hero min-h-screen pt-16 flex flex-col items-center justify-start relative">
      {/* Background Pattern with Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-custom-dark-blue bg-[linear-gradient(to_right,#d0d0d0_2px,transparent_2px),linear-gradient(to_bottom,#d0d0d0_2px,transparent_2px)] bg-[size:6rem_4rem] bg-blend-overlay"></div>

      <div className="mt-0.5 text-center">
        <h1 className="text-white text-4xl font-bold font-redHat">
          About
          <span className="font-redHat"> CRID</span>
        </h1>
        <p className="mt-4 text-white text-lg max-w-xl mx-auto text-justify font-space text-shadow">
          CRID is a comprehensive platform dedicated to fostering community and
          innovation through research and development. Our mission is to bridge
          the gap between academia and industry, facilitating groundbreaking
          projects and fostering collaborative growth. Join us in our pursuit of
          excellence and be a part of the future of innovation.
        </p>
      </div>

      <div className="mt-0.5 text-center">
        <h1 className="text-white text-4xl font-bold font-redHat py-8">
          Meet Our Team
        </h1>
      </div>

      <div className="py-2 my-2">
        <CardGrid />
      </div>

      {/* Add Footer Component */}
      <Footer />
    </div>
  );
}

export default About;
