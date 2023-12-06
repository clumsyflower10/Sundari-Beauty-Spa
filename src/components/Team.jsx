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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              img: holistic,
              text: "Jass Choo, M.S. - Master Stylist and Hair Care Scientist",
            },
            {
              img: therapist,
              text: "Kirana Serenius, D.C. - Certified Chiropractor and Massage Therapist",
            },
            { img: nail, text: "Olivia Radiance - Licensed Esthetician" },
            { img: owner, text: "Vindy Ephyvania - Holistic Nutritionist" },
            {
              img: skinexpert,
              text: "Anne Marrie - Licensed Cosmetology & Esthetician ",
            },
            {
              img: masseus,
              text: "Gaby Stephany Sane - Master of Balinese Massage",
            },
          ].map(({ img, text }, index) => (
            <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={img}
                alt=""
                className="rounded-md w-full h-48 object-cover"
              />
              <div className="flex items-center justify-center">
                <button className="w-full px-2 py-1 text-green-900 text-xs">
                  {text}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
