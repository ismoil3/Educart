'use client'
import { useState } from "react";
import Header from "./components/shared/header/header";
import useThemeStore from "./store/themeStore";
import Container from "./components/shared/container/container";
import { Avatar, Button } from "@mui/material";
import WaveAnimation from "./components/wave/wave";
import Image from "next/image";

export default function Home() {
  const { isDarkMode } = useThemeStore()
  console.log(isDarkMode);

  return (
    <div>
      {/* section 1 */}
      <div className="bg-home_section1  pt-[30px] w-full relative"> {/* 'relative' барои позиционинг */}
        <Container>
          <div className="flex justify-between">
            {/* section 1 left div */}
            <div >
              <h1 className="text-[35px]  text-[#FFFFFF] capitalize leading-[50px] md:text-[55px] md:leading-[80px] max-w-[630px]">Learn New Skills Online with Top <span className="text-[#00FF84] underline cursor-pointer ">Educators</span></h1>
              <p className="text-[#FFFFFF] text-[17px] capitalize leading-[35px] max-w-[500px]">
                Build skills with courses, certificates, and degrees online from
                world-class universities and companies. </p><br />
              <div className="flex flex-wrap gap-[15px]">
                <Button
                  sx={{
                    backgroundColor: '#6440FB',
                    color: '#FFFFFF',
                    fontSize: {
                      xs: '12px',
                      sm: '14px',
                      md: '16px',
                    },
                    fontFamily: '"GT Walsheim Pro", sans-serif',
                    padding: {
                      xs: '8px 20px',
                      sm: '10px 40px',
                      md: '12px 40px',
                    },
                    textTransform: 'none',
                    borderRadius: '4px',
                    '&:hover': {
                      backgroundColor: '#5435D9',
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
                      xs: '8px 20px',
                      sm: '10px 40px',
                      md: '12px 40px',
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
                      xs: '12px',
                      sm: '14px',
                      md: '16px',
                    },
                  }}
                >
                  Find Courses
                </Button>
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
                    <p className="text-[#EB6652] font-normal text-sm">3,000+ </p>
                    <p className="text-[#8B8EA8] ">Free Courses</p>
                  </div>
                </div>

                {/* Overlay Text - Card 2 */}
                <div className=" ov absolute flex gap-[20px] items-center top-[60px] right-8 transform  bg-white p-[10px_10px] rounded-lg shadow-lg z-30">
                  <Avatar src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home1-1.png" />
                  <div>
                    <p className="text-[#1B0B47] font-bold text-sm">Ali Tufan</p>
                    <p className="text-gray-600 text-xs">UX/UI Designer</p>
                    <p className="text-yellow-400 text-sm">★★★★★</p>
                  </div>
                </div>

                {/* Overlay Text - Card 3 */}
                <div className=" ov absolute flex gap-[20px] items-center bottom-[-60px] right-[-20px] bg-white p-4 rounded-lg shadow-lg z-30">
                  <Avatar src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about.png" />
                  <div>
                    <p className="text-[#BAA9FD] font-bold text-sm">Congrats!</p>
                    <p className="text-gray-600 text-xs">Your Admission Completed</p>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </Container> <br />
      </div>
    </div>
  );
}
