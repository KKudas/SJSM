import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import LOGO from "../../assets/img/logo_sjsm.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HeaderBar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="h-20 w-full bg-custom-primary-color border-custom-secondary-color border-b-4 drop-shadow-lg flex flex-row justify-between sticky top-0 z-10">
        <div className="flex flex-row items-center select-none">
          <img
            src={LOGO}
            alt="SJSM Logo"
            className="object-contain h-12 w-12 ml-4 mr-4"
            draggable="false"
          />
          <p className="font-serif text-white text-2xl">
            St. Joseph's School of Mactan, INC
          </p>
        </div>

        <div className="flex items-center mr-8 space-x-12">
          <ul className="flex space-x-12 font-serif text-white text-xl">
            <li className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/about")}>
              About us
            </li>
            <li className="cursor-pointer">Academics</li>
            <li className="cursor-pointer">Admission</li>
            <li className="cursor-pointer" onClick={() => navigate("/contact")}>
              Contact us
            </li>
          </ul>
          <button
            className="p-2 border-custom-secondary-color border-2"
            onClick={isModalOpen ? closeModal : openModal}
          >
            <GiHamburgerMenu size={24} color="#EEE966" />
          </button>
        </div>

        {isModalOpen && (
          <div ref={modalRef} className="absolute top-20 left-0 w-full">
            <div className="absolute inset-0 bg-custom-primary-color opacity-95"></div>
            <div className="relative shadow-md">
              <div className="flex items-center  space-x-12 justify-end pr-16">
                <ul className="font-sans text-custom-secondary-color text-2xl text-right m-8 space-y-2 w-full">
                  <li
                    onClick={() => navigate("/offerings")}
                    className="cursor-pointer hover:underline hover:underline-offset-4"
                  >
                    Offerings
                  </li>
                  <li
                    onClick={() => navigate("/blogs")}
                    className="cursor-pointer hover:underline hover:underline-offset-4"
                  >
                    Blogs
                  </li>
                  <li className="cursor-pointer hover:underline hover:underline-offset-4">
                    Events
                  </li>
                  <li className="cursor-pointer hover:underline hover:underline-offset-4">
                    Gallery
                  </li>
                </ul>
                <div className="w-1 bg-custom-secondary-color absolute top-8 bottom-8" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
