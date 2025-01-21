"use client";
import { useEffect, useRef, useState } from "react";
import Header from "./components/shared/header/header";
import useThemeStore from "./store/themeStore";
import Container from "./components/shared/container/container";
import { Avatar, Box, Button, Slide, SvgIcon, Typography } from "@mui/material";
import WaveAnimation from "./components/wave/wave";
import Image from "next/image";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CourseList from "./components/home/courseList";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { TestimonialSlider } from "./components/home/TestimonialSlider";
import HeroSection from "./components/home/sectionGirl";
import FeaturesSection from "./components/home/learn";
import InstructorsSection from "./components/home/instructorsSection";
import { MobileSection } from "./components/home/mobile-section";
import ResourcesNews from "./components/home/resourcesNews";

export default function Home() {
  const { isDarkMode } = useThemeStore();
  console.log(isDarkMode);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settingsSection3 = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  const features = [
    {
      id: 1,
      title: "Art & Humanities",
      courses: 1,
      imageUrl:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c1.svg",
    },
    {
      id: 2,
      title: "Science & Technology",
      courses: 5,
      imageUrl:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c2.svg",
    },
    {
      id: 3,
      title: "Business & Management",
      courses: 3,
      imageUrl:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c3.svg",
    },
    {
      id: 4,
      title: "Graphic Design",
      courses: 3,
      imageUrl:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c4.svg",
    },
    {
      id: 5,
      title: "Sales Marketing",
      courses: 3,
      imageUrl:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c5.svg",
    },
    {
      id: 6,
      title: "IT and Software",
      courses: 3,
      imageUrl:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/c6.svg",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation will only happen once
      easing: "ease-in-out", // Animation easing function
    });
  }, []);

  return (
    <div>
      {/* section 1 */}
      <div className="bg-home_section1  pt-[30px] w-full relative ">
        {" "}
        {/* 'relative' барои позиционинг */}
        <Container>
          <div className="flex justify-between  ">
            {/* section 1 left div */}
            <div>
              <h1 className="text-[35px]  text-[#FFFFFF] capitalize leading-[50px] md:text-[55px] md:leading-[80px] max-w-[630px]">
                Learn New Skills Online with Top{" "}
                <span className="text-[#00FF84] underline cursor-pointer ">
                  Educators
                </span>
              </h1>
              <p className="text-[#FFFFFF] text-[17px] capitalize leading-[35px] max-w-[500px]">
                Build skills with courses, certificates, and degrees online from
                world-class universities and companies.{" "}
              </p>
              <br />
              <div className="flex flex-wrap gap-[15px]">
                <Button
                  sx={{
                    backgroundColor: "#6440FB",
                    color: "#FFFFFF",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                    },
                    fontFamily: '"GT Walsheim Pro", sans-serif',
                    padding: {
                      xs: "8px 20px",
                      sm: "10px 40px",
                      md: "12px 40px",
                    },
                    textTransform: "none",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#5435D9",
                    },
                  }}
                >
                  Join For Free
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#00FF84",
                    fontFamily: '"GT Walsheim Pro", sans-serif',
                    padding: {
                      xs: "8px 20px",
                      sm: "10px 40px",
                      md: "12px 40px",
                    },
                    textTransform: "none",
                    borderRadius: "4px",
                    borderColor: "#00FF84",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#00E476",
                      boxShadow: "none",
                      color: "#fff",
                    },
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                    },
                  }}
                >
                  Find Courses
                </Button>
              </div>
              <br />
              <div className="flex gap-[20px] w-full flex-wrap">
                <div className="flex gap-[10px] text-[#ffff]">
                  <SchoolOutlinedIcon sx={{ color: "#ffff" }} />
                  <p>Over 12 million students</p>
                </div>
                <div className="flex gap-[10px] text-[#ffff]">
                  <SlideshowOutlinedIcon sx={{ color: "#ffff" }} />
                  <p>More than 60,000 courses</p>
                </div>
                <div className="flex gap-[10px] text-[#ffff]">
                  <SvgIcon sx={{ fontSize: 24, color: "white" }}>
                    <path d="M20.2224 12.6562H19.684C19.3694 10.467 17.6089 8.73858 15.4043 8.47317C16.339 7.57678 16.9219 6.31612 16.9219 4.92188C16.9219 2.20795 14.7139 0 12 0C9.2861 0 7.07814 2.20795 7.07814 4.92188C7.07814 6.31617 7.66103 7.57678 8.59577 8.47317C6.39119 8.73858 4.63066 10.467 4.31608 12.6562H3.77767C2.49297 12.6562 1.50836 13.7959 1.68935 15.0629L2.86628 23.3952C2.91527 23.7421 3.21217 24 3.56252 24H20.4375C20.7879 24 21.0848 23.7421 21.1338 23.3952L22.3106 15.0639C22.4921 13.7932 21.5047 12.6562 20.2224 12.6562ZM8.48439 4.92188C8.48439 2.98336 10.0615 1.40625 12 1.40625C13.9385 1.40625 15.5156 2.98336 15.5156 4.92188C15.5156 6.86039 13.9385 8.4375 12 8.4375C10.0615 8.4375 8.48439 6.86039 8.48439 4.92188ZM9.18752 9.84375H14.8125C16.5103 9.84375 17.9308 11.0535 18.2575 12.6562H5.74253C6.06921 11.0535 7.48975 9.84375 9.18752 9.84375ZM20.9183 14.8662L19.8267 22.5938H4.1733L3.08163 14.865C3.02097 14.441 3.34853 14.0625 3.77767 14.0625C3.97202 14.0625 20.141 14.0625 20.2224 14.0625C20.651 14.0625 20.9792 14.44 20.9183 14.8662Z" />
                    <path d="M12.0001 16.9219C10.837 16.9219 9.89069 17.8681 9.89069 19.0312C9.89069 20.1944 10.837 21.1406 12.0001 21.1406C13.1632 21.1406 14.1094 20.1944 14.1094 19.0312C14.1094 17.8681 13.1632 16.9219 12.0001 16.9219ZM12.0001 19.7344C11.6124 19.7344 11.2969 19.419 11.2969 19.0312C11.2969 18.6435 11.6124 18.3281 12.0001 18.3281C12.3878 18.3281 12.7032 18.6435 12.7032 19.0312C12.7032 19.419 12.3878 19.7344 12.0001 19.7344Z" />
                  </SvgIcon>
                  <p>Learn anything online</p>
                </div>
              </div>
            </div>
            {/* section right div */}
            <div className=" rig relative p-8 w-full  justify-end hidden lg:flex">
              {/* Container for the stacked layout */}
              <div className="relative max-w-[550px] w-full">
                {/* Central Image */}
                <div className="absolute mx-auto w-[300px] left-0 h-[300px] z-10">
                  <Image
                    className="rounded-lg"
                    src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about.png"
                    alt="Main Profile"
                    width={300}
                    height={300}
                  />
                </div>

                {/* Top Right Image */}
                <div className="absolute top-[-40px] right-[-40px] z-20">
                  <Image
                    className="rounded-lg"
                    src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home1-1.png"
                    alt="Top Right"
                    width={150}
                    height={150}
                  />
                </div>

                {/* Bottom Right Image */}
                <div className="absolute bottom-[-40px] right-[-30px] z-10">
                  <Image
                    className="rounded-lg"
                    src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home1-2.png"
                    alt="Bottom Right"
                    width={200}
                    height={200}
                  />
                </div>

                {/* Overlay Text - Card 1 */}
                <div className=" ov absolute flex items-center gap-[20px] bottom-[-30px] left-[-70px] bg-white p-4 rounded-lg shadow-lg z-30">
                  <Avatar src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about.png" />
                  <div>
                    <p className="text-[#EB6652] font-normal text-sm">
                      3,000+{" "}
                    </p>
                    <p className="text-[#8B8EA8] ">Free Courses</p>
                  </div>
                </div>

                {/* Overlay Text - Card 2 */}
                <div className=" ov absolute flex gap-[20px] items-center top-[60px] right-8 transform  bg-white p-[10px_10px] rounded-lg shadow-lg z-30">
                  <Avatar src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home1-1.png" />
                  <div>
                    <p className="text-[#1B0B47] font-bold text-sm">
                      Ali Tufan
                    </p>
                    <p className="text-gray-600 text-xs ">UX/UI Designer</p>
                    <p className="text-yellow-400 text-sm">★★★★★</p>
                  </div>
                </div>

                {/* Overlay Text - Card 3 */}
                <div className=" ov absolute flex gap-[20px] items-center bottom-[-60px] right-[-20px] bg-white p-4 rounded-lg shadow-lg z-30">
                  <Avatar src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about.png" />
                  <div>
                    <p className="text-[#BAA9FD] font-bold text-sm">
                      Congrats!
                    </p>
                    <p className="text-gray-600 text-xs">
                      Your Admission Completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>{" "}
        <br />
        <WaveAnimation />
      </div>
      {/* section 2 */}
      <div className={`${isDarkMode ? "bg-gray-900" : "bg-gray-50 "}`}>
        <Container>
          <p
            style={{ color: isDarkMode ? "#fff" : "#140342" }}
            className={`text-center mt-[40px] text-[18px] `}
          >
            Trusted by the world’s best
          </p>
          <div className="w-[95%] mt-[30px]  m-auto">
            <Slider arrows={false} {...settings}>
              <div className="p-[20px]">
                <Image
                  src={
                    "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand1.png"
                  }
                  alt="work"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-[20px]">
                <Image
                  src={
                    "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand2.png"
                  }
                  alt="work"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-[20px]">
                <Image
                  src={
                    "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand3.png"
                  }
                  alt="work"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-[20px]">
                <Image
                  src={
                    "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand4.png"
                  }
                  alt="work"
                  width={150}
                  height={100}
                />
              </div>
              <div className="p-[20px]">
                <Image
                  src={
                    "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand5.png"
                  }
                  alt="work"
                  width={140}
                  height={100}
                />
              </div>
              <div className="p-[20px]">
                <Image
                  src={
                    "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/brand6.png"
                  }
                  alt="work"
                  width={140}
                  height={100}
                />
              </div>
            </Slider>
          </div>
        </Container>
      </div>

      {/* section 3 */}
      <br />
      <br />
      <br />
      <Container>
        <div data-aos="flip-left" className="text-center">
          <h2
            className="mb-2 text-3xl font-bold sm:text-4xl"
            style={{
              color: isDarkMode
                ? ""
                : "rgb(17 24 39 / var(--tw-text-opacity, 1))",
            }}
          >
            Our Most Popular Courses
          </h2>
          <p className="text-lg text-gray-600">
            20,000+ unique online course list designs
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="slider-container">
          <Slider arrows={false} {...settingsSection3}>
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`banner-content-wrapper max-w-[190px] h-[250px] flex flex-col items-center justify-center text-center p-4 md:p-6 
        ${
          isDarkMode
            ? "bg-[#1f2937] hover:bg-[#4B5563] text-white"
            : "bg-[#EEF2F6] hover:bg-[#140342] hover:text-[#ffff]"
        } 
        rounded-lg transition-all duration-300 ease-in-out`}
              >
                <div className="bg-white p-[20px] inline-block rounded-full">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={feature.imageUrl}
                    alt={`${feature.title} Icon`}
                    className="m-auto"
                  />
                </div>
                <div className="right-inner mt-4 flex flex-col items-center">
                  <h3 className={`banner-title text-xl font-semibold `}>
                    {feature.title}
                  </h3>
                  <div className={`number text-sm mt-2 `}>
                    <span>{feature.courses}</span> Course
                    {feature.courses > 1 ? "s" : ""}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
      {/* section 4 */}
      <CourseList />
      <TestimonialSlider />
      <HeroSection />
      <FeaturesSection />
      <InstructorsSection />
      <MobileSection />
      <ResourcesNews />

      <div className="w-full bg-[#6366f1] py-8 px-4 mt-[50px] md:py-12">
        <Container>
          <div className=" flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-[30px] max-w-[350px] md:text-3xl  font-bold text-white text-center md:text-left">
              Join more than{" "}
              <span className="text-[#4ade80]">10 million learners</span>{" "}
              worldwide
            </h2>
            <button className="bg-white text-[#1a1a3c] px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Start Learning For Free
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
