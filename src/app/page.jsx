"use client";
import { useState } from "react";
import Header from "./components/shared/header/header";
import useThemeStore from "./store/themeStore";
import Container from "./components/shared/container/container";
import { Avatar, Button, SvgIcon } from "@mui/material";
import WaveAnimation from "./components/wave/wave";
import Image from "next/image";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";

export default function Home() {
  const { isDarkMode } = useThemeStore();
  console.log(isDarkMode);

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
                <div  className="flex gap-[10px] text-[#ffff]">
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
                <div className="absolute top-[-40px] right-[-50px] z-20">
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
                    <p className="text-gray-600 text-xs">UX/UI Designer</p>
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
    </div>
  );
}
