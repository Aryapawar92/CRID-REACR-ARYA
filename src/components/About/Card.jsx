import { Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl w-80 border border-white">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl h-64">
        <img
          src={item.image}
          alt="profile-picture"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 text-center">
        <h4 className="block mb-2 font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
          {item.name}
        </h4>
        <p className="block font-sans text-base font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
          {item.role}
        </p>
      </div>
      <div className="flex justify-center p-4 pt-2 gap-5">
        {item.Linkedin && (
          <Link
            to={item.Linkedin}
            className="block text-xl font-normal leading-relaxed text-blue-600 hover:text-blue-800"
          >
            <Linkedin />
          </Link>
        )}
        {item.instagram && (
          <Link
            to={item.instagram}
            className="block text-xl font-normal leading-relaxed text-purple-600 hover:text-purple-800"
          >
            <Instagram />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card;
