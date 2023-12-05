import React from "react";
import holistic from "../assets/holistic.jpg";
import masseus from "../assets/masseus.jpg";
import nail from "../assets/nail.jpg";
import owner from "../assets/owner.jpg";
import skinexpert from "../assets/skinexpert.jpg";
import therapist from "../assets/therapist.jpg";

const Team = () => {
  return (
    <div className="bg-[rgb(171,175,124)] w-full md:h-screen pb-4 pt-2">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full ">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold mb-2">
            Meet Our Specialist
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={holistic} alt="" className="rounded-md" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-2 py-1 text-green-900 text-xs">
                Jass Choo, M.S. - Master Stylist and Hair Care Scientist
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={therapist} alt="" className="rounded-md" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-2 py-1 text-green-900 text-xs">
                Kirana Serenius, D.C. - Certified Chiropractor and Massage
                Therapist
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={nail} alt="" className="rounded-md" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-2 py-1 text-green-900 text-xs">
                Olivia Radiance - Licensed Esthetician
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={owner} alt="" className="rounded-md" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-2 py-1 text-green-900 text-xs">
                Vindy Ephyvania - Hollistic Nutritionist
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={skinexpert} alt="" className="rounded-md" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-2 py-1 text-green-900 text-xs">
                Gaby Stephany Sane - Master of Balinese Massage
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={masseus} alt="" className="rounded-md" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-2 py-1 text-green-900 text-xs">
                Anne Marrie - Licensed cosmetology & Esthetician
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
