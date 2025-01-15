"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../images/logo-white.svg";
import logo2 from "../../../../images/logo-no-text — копия.png";

import Container from "../container/container";
import {
  Box,
  Button,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import useThemeStore from "@/app/store/themeStore";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  const [age, setAge] = React.useState("tj");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState("recents");

  const handleChangeNavigation = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bg-[#140342]">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Image src={logo} alt="educrat" width={150} height={50} />
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <Image src={logo2} alt="educrat" width={55} height={50} />
            </Box>
          </div>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", lg: "block" }, color: "white" }}>
            <ul className="flex gap-[20px]">
              <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-[7px_15px] rounded-lg ">
                Home
              </li>
              <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-[7px_15px] rounded-lg ">
                Courses
              </li>
              <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-[7px_15px] rounded-lg ">
                Blog
              </li>
              <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-[7px_15px] rounded-lg ">
                Shop
              </li>
              <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-[7px_15px] rounded-lg ">
                Pages
              </li>
              <li className="hover:text-[#00ff84] hover:cursor-pointer hover:bg-[#ffffff26] p-[7px_15px] rounded-lg ">
                Contact
              </li>
            </ul>
          </Box>

          {/* Desktop Actions */}
          <Box
            sx={{
              // display: { xs: "none", lg: "flex" },
              color: "white",
              gap: "15px",
              alignItems: "center",
            }}
            className="flex gap-[15px] items-center"
          >
            <FormControlLabel
              control={
                <DarkModeSwitch
                  size={25}
                  checked={isDarkMode}
                  sunColor="#fff"
                  onChange={toggleTheme}
                />
              }
            />
            <FormControl
              sx={{ m: 1, minWidth: 50, display: { xs: "none", lg: "flex" } }}
              size="small"
            >
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
                sx={{ color: "white", border: "1px solid white" }}
              >
                <MenuItem value={"en"}>ENG</MenuItem>
                <MenuItem value={"ru"}>RUS</MenuItem>
                <MenuItem value={"tj"}>TAJ</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{
                p: "5px 30px",
                backgroundColor: "#FFFFFF",
                color: "#140342",
                border: "2px solid #FFFFFF",
                borderRadius: "8px",
                ":hover": {
                  backgroundColor: "#6440fb",
                  color: "#FFFFFF",
                  borderColor: "#6440fb",
                },
              }}
            >
              Log in
            </Button>
          </Box>
        </div>
      </Container>

      <Box sx={{position:"absolute",bottom:"0",width:"100%",display: { xs: "block", lg: "none" }}}>
        <BottomNavigation value={value} onChange={handleChangeNavigation}>
          <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<HouseOutlinedIcon />}
          />
          <BottomNavigationAction
            label="courses"
            value="courses"
            icon={<WidgetsOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Blog"
            value="Blog"
            icon={<LibraryBooksOutlinedIcon />}
          />
          <BottomNavigationAction
            label="language"
            value="language"
            icon={<LanguageOutlinedIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default Header;
