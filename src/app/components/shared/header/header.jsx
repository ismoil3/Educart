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
  Drawer,
  Typography,
  List,
  ListItem,
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

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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

      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          display: { xs: "block", lg: "none" },
        }}
      >
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
            onClick={toggleDrawer(true)}
          />
        </BottomNavigation>
      </Box>
      <Drawer
        anchor="bottom"
        sx={{
          height: "60vh",
          "& .MuiDrawer-paper": {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            backgroundColor: isDarkMode ? "#1e1e2f" : "#ffffff",
            color: isDarkMode ? "#ffffff" : "#000000",
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            p: "20px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: isDarkMode ? "#ffffff" : "#000000",
              marginBottom: "20px",
            }}
          >
            Choose Language
          </Typography>
          <List sx={{ width: "100%" }}>
            {[
              { value: "en", label: "English", flag: "🇺🇸" },
              { value: "ru", label: "Русский", flag: "🇷🇺" },
              { value: "tj", label: "Тоҷикӣ", flag: "🇹🇯" },
            ].map((item) => (
              <ListItem
                key={item.value}
                onClick={() => setAge(item.value)}
                sx={{
                  cursor: "pointer",
                  padding: "15px",
                  textAlign: "center",
                  borderRadius: "10px",
                  transition: "all 0.3s ease",
                  backgroundColor: age === item.value ? "#6440fb" : "#2104",
                  color:
                    age === item.value
                      ? "#ffffff"
                      : isDarkMode
                      ? "#ffffff"
                      : "#000000",
                  "&:hover": {
                    backgroundColor: "#6440fb",
                    color: "#ffffff",
                    transform: "scale(1.01)",
                  },
                  mb: "20px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: age === item.value ? "bold" : "normal",
                  }}
                >
                  <span>{item.flag}</span> {item.label}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
