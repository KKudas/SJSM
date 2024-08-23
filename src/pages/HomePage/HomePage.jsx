import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Images
import HomeImage from "../../assets/img/home_image.png";

//data
import Blogs from "../../blogs.js";

import { FaBook, FaGraduationCap, FaCalendarDays } from "react-icons/fa6";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className=" bg-custom-bg-color font-serif space-y-16 pb-12">
        {/* CANDIDATE FOR BEING A COMPONENT BY: TEXT WITH BACKGROUND IMAGE */}
        <header
          className="bg-cover relative text-white  backdrop-brightness-75"
          style={{ backgroundImage: `url(${HomeImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="drop-shadow-lg w-1/2 ml-16 pt-32 pb-16 space-y-4">
            <h1 className="text-7xl">Welcome Joseph and Josephines!</h1>
            <p className="text-xl">
              PAASCU Accredited Level II | ESC Certified School | K-12 Compliant
            </p>
            <button
              className="bg-custom-primary-color border-custom-secondary-color border-2 pt-4 pb-4 pl-8 pr-8 rounded-lg"
              onClick={() => navigate("/about")}
            >
              <p className="text-xl">Learn more</p>
            </button>
          </div>
        </header>

        {/* CANDIDATE FOR COMPONENT SINCE THIS IS CARDS */}
        <div className="flex flex-row justify-around ">
          {/* COLUMN 1 */}
          <div className="w-1/4 p-8 bg-custom-primary-color text-custom-secondary-color space-y-2">
            <div className="flex flex-row items-center space-x-2">
              <FaBook size={24} />
              <h3 className="text-lg font-bold">Why SJSM?</h3>
            </div>
            <p className="text-wrap">
              Join our school for a transformative educational experience where
              curiosity meets opportunity. Discover limitless possibilities,
              cultivate lifelong friendships, and embark on a journey of
              academic excellence. Your future starts here.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="w-1/4 p-8 bg-custom-secondary-color text-custom-primary-color space-y-2">
            <div className="flex flex-row items-center space-x-2">
              <FaGraduationCap size={24} />
              <h3 className="text-lg font-bold">Campus Life @ SJSM</h3>
            </div>
            <p className="text-wrap ">
              From kindergarten to 12th grade, our campus is buzzing with
              excitement! Join us for fun activities, lasting friendships, and a
              supportive environment where every student thrives. Your adventure
              starts now!
            </p>
          </div>

          {/* COLUMN 3 */}
          <div className="w-1/4 p-8 bg-white text-black space-y-2">
            <div className="flex flex-row items-center space-x-2">
              <FaCalendarDays size={24} />
              <h3 className="text-lg font-bold">School Calendar 2024</h3>
            </div>

            <p className="text-wrap">Calendar for School Year 2024-2025</p>
          </div>
        </div>

        {/* LATEST BLOGS */}
        <div className="text-custom-primary-color">
          <div className="justify-between flex flex-row mr-16 ml-16 items-end">
            <h1 className="text-3xl font-bold">Latest Blogs</h1>
            <p
              className="text-lg cursor-pointer"
              onClick={() => navigate("/blogs")}
            >
              See all
            </p>
          </div>

          <div className="flex flex-row justify-around ml-12 mr-12">
            {Blogs.map((blog) => (
              <div key={blog.blog_id} className="w-1/4 text-wrap space-y-4 m-4">
                <img src={blog.thumb} />
                <h3 className="text-2xl font-semibold">{blog.blog_title}</h3>
                <p>
                  {blog.contentDetails.content &&
                  blog.contentDetails.content.length > 150
                    ? `${blog.contentDetails.content.substring(0, 150)}...`
                    : blog.contentDetails.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
