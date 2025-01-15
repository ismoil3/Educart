"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../images/logo-white.svg";
import logo2 from "../../../../images/logo-no-text — копия.png";

import Container from "../container/container";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Switch,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useThemeStore from "@/app/store/themeStore";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [age, setAge] = React.useState("tj");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="bg-[#140342]">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Image src={logo} alt="educrat" width={150} height={50} />
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Image
                sx={{ display: { xs: "block", md: "none" } }}
                src={logo2}
                alt="educrat"
                width={55}
                height={50}
              />
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
            <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
                sx={{color:"white",border:"1px solid white"}}
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

          {/* Mobile Menu Icon */}
          {/* <IconButton
            sx={{ display: { xs: "block", lg: "none" } }}
            onClick={toggleMenu}
          >
            <MenuOpenIcon sx={{ color: "white" }} />
          </IconButton> */}
        </div>
      </Container>

      {/* Mobile Drawer for Menu */}
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
        <Box
          sx={{
            width: 300,
            padding: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Close Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Log in / Sign Up
            </Typography>
            <IconButton onClick={toggleMenu}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <List>
            {[
              "Home",
              "Courses",
              "Blog",
              "Shop",
              "Events",
              "Pages",
              "About",
              "Contact",
            ].map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "18px 20px",
                  "&:hover": {
                    backgroundColor: "#6440fb12",
                    borderRadius: "8px",
                    color: "#6440fb",
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    style: {
                      fontWeight: "500",
                      fontSize: "15px",
                    },
                  }}
                  sx={{
                    "&:hover": {
                      color: "#6440fb",
                    },
                  }}
                />
                <ArrowForwardIosIcon fontSize="small" sx={{ color: "#999" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
