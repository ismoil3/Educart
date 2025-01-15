'use client'
import { useState } from "react";
import Header from "./components/shared/header/header";
import Wave from "./components/wave/wave";
import useThemeStore from "./store/themeStore";

export default function Home() {
  const {isDarkMode} = useThemeStore()
    console.log(isDarkMode);
    
  return (
    <div >
    {/* <Wave/> */}

    </div>
  );
}
