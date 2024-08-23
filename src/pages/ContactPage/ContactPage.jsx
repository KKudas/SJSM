import PHOTO_MAP from "../../assets/img/map_sjsm.png";
import { useEffect } from "react";
//ICONS
import {
  FaLocationArrow,
  FaFax,
  FaMobile,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    <>
      <div className="bg-custom-bg-color font-serif space-y-16 pb-12 text-custom-primary-color">
        <header className="container p-16 space-y-4 bg-amber-200 text-center">
          <h1 className="text-4xl font-bold">Contact us</h1>
          <p className="w-2/3 mx-auto">
            We're here to help! Whether you have a question, feedback, or need
            assistance, feel free to reach out. You can contact us through the
            form below, or use the provided contact details.
          </p>
        </header>

        <div className="flex flex-row justify-center space-x-32">
          <div className="w-1/3 space-y-4 content-center">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold ">Get in Touch</h2>
              <p>
                We'd love to hear from you! Whether you're looking for more
                information about our services, have a suggestion, or just want
                to say hello, don't hesitate to get in touch.
              </p>
            </div>

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
          <img src={PHOTO_MAP} alt="location of sjsm" />
        </div>

        {/* TEXT BOX */}
        <div></div>
      </div>
    </>
  );
}
