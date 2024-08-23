import LOGO from "../../assets/img/logo_sjsm.png";
import {
  FaLocationArrow,
  FaFax,
  FaMobile,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <footer className="flex h-auto w-full bg-custom-primary-color border-custom-secondary-color border-t-8 text-white font-serif pb-24 pt-16">
        {/* PACKAGE ALL CONTENTS FOR ALIGNMENT */}
        <div className="flex flex-row justify-around ">
          {/* COLUMN 1 */}
          <div className="w-1/3">
            <div className="flex flex-row items-center select-none mb-4">
              <img
                src={LOGO}
                alt="SJSM Logo"
                className="object-contain h-20 w-20 mr-4"
                draggable="false"
              />
              <p className="text-2xl text-nowrap">
                St. Joseph's School of Mactan, INC
              </p>
            </div>
            <p className="text-wrap mr-8">
              St. Joseph’s School of Mactan is an institution of learning, owned
              and administered by the Franciscan Sisters of the Immaculate
              Conception of the Holy Mother of God, Philippine South Province
              (SFIC-PSP)
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="w-1/4 text-nowrap">
            <p className="text-4xl font-medium mb-8">Contact Information</p>
            <ul className="grid gap-y-2">
              <li className="flex flex-row items-center space-x-3">
                <FaLocationArrow />
                <p>8252+VQX, Mactan Airport Rd, Lapu-Lapu City, Cebu</p>
              </li>
              <li className="flex flex-row items-center space-x-3">
                <FaFax />
                <p>341-2399</p>
              </li>
              <li className="flex flex-row items-center space-x-3">
                <FaMobile />
                <p>(+63) 922-402-4230</p>
              </li>
              <li className="flex flex-row items-center space-x-3">
                <FaPhoneAlt />
                <p>340-5939</p>
              </li>
              <li className="flex flex-row items-center space-x-3">
                <FaEnvelope />
                <p>sjsofmactan@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="w-1/4">
            <p className="text-4xl font-medium mb-8">Quick Links</p>
            <div>
              <ul className="grid grid-cols-3 gap-y-2">
                <li className="cursor-pointer" onClick={() => navigate("/")}>
                  Home
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigate("/offerings")}
                >
                  Offerings
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigate("/about")}
                >
                  About Us
                </li>
                <li className="cursor-pointer">Academics</li>
                <li
                  onClick={() => navigate("/blogs")}
                  className="cursor-pointer"
                >
                  Blogs
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </li>
                <li className="cursor-pointer">Admission</li>
                <li className="cursor-pointer">Events</li>
                <li className="cursor-pointer">Gallery</li>
              </ul>
            </div>
            <div className="mt-4 flex flex-row space-x-2">
              <FaFacebookSquare size={40} />
              <FaSquareXTwitter size={40} />
              <FaInstagramSquare size={40} />
              <FaYoutubeSquare size={40} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
