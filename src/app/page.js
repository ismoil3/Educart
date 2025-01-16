'use client'
import { useState } from "react";
import Header from "./components/shared/header/header";
import useThemeStore from "./store/themeStore";
import Container from "./components/shared/container/container";
import { Button } from "@mui/material";
import WaveAnimation from "./components/wave/wave";

export default function Home() {
  const { isDarkMode } = useThemeStore()
  console.log(isDarkMode);

  return (
    <div>
      {/* section 1 */}
      <div className="bg-home_section1 pt-[30px] w-full relative"> {/* 'relative' барои позиционинг */}
        <Container>
          <div>
            <h1 className="text-[55px] text-[#FFFFFF] capitalize leading-[80px] max-w-[630px]">Learn New Skills Online with Top <span className="text-[#00FF84] underline cursor-pointer ">Educators</span></h1>
            <p className="text-[#FFFFFF] text-[17px] capitalize leading-[35px] max-w-[500px]">
              Build skills with courses, certificates, and degrees online from
              world-class universities and companies. </p><br/>
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
                  md: '12px 50px',
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
          </div>
        </Container> <br/>

        {/* Позиционинг аниматсия дар поёни сексия */}
      </div>
          <WaveAnimation />
    </div>
  );
}
