import React from "react";
import { assets } from "../assets/assets";
import {
  ArrowRight,
  ArrowRightCircle,
  Calendar1Icon,
  Clock1Icon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-[url("/backgroundImage.png")] flex flex-col justify-center items-start gap-4 px-6 md:px-16 lg:px-36 bg-cover bg-center h-screen'>
      <img src={assets.marvelLogo} className="max-h-11 lg:h-11 mt-20" />

      <h1 className="text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110">
        Guardians <br /> of the Galaxy{" "}
      </h1>
      <div className="flex items-center gap-4 text-gray-300">
        <span>Action | Adventure | SciFi</span>
        <div className="flex items-center gap-1">
          <Calendar1Icon className="w-4.5 h-4.5" /> 2018
        </div>
        <div className="flex items-center gap-1">
          <Clock1Icon className="w-4.5 h-4.5" /> 2h 8m
        </div>
      </div>

      <p className="max-w-md text-gray-300">
        Peter Quill and his fellow Guardians are hired by a powerful alien race,
        the Sovereign, to protect their precious batteries from invaders. When
        it is discovered that Rocket has stolen the items they were sent to
        guard, the Sovereign dispatch their armada to search for vengeance. As
        the Guardians try to escape, the mystery of Peter's parentage is
        revealed.
      </p>
      <button
        onClick={() => navigate("/movies")}
        className="bg-primary hover:bg-primary-dull flex items-center gap-1 px-6 py-3 text-sm transition rounded-full font-medium cursor-pointer"
      >
        Explore Movies
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HeroSection;
