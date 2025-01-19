"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";
import Container from "../container/container";
import { Box } from "@mui/material";

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  return (
    <footer className="bg-[#1a1a3c]  text-white ">
      <br />
      <br />
      <br />
      <Container>
        {/* Header */}
        <div className="grid grid-cols-1 sm:flex sm:flex-row justify-between items-center mb-16 gap-4">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <div className="bg-[#6366f1] rounded-full p-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Educrat logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <span className="text-xl font-bold">Educrat</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="text-sm sm:text-base">
              Follow Us On Social Media
            </span>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#6366f1] transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#6366f1] transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#6366f1] transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#6366f1] transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mb-16">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-4">ABOUT</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Refund
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-4">CATEGORIES</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Finance & Accounting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  IT & Software
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Sales Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Photography
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#6366f1] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-4">
              GET IN TOUCH
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              We don't send spam so don't worry.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="Your Email..."
                className="flex-1 px-4 py-2 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6366f1] text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#6366f1] rounded-full hover:bg-[#6366f1]/90 transition-colors text-sm sm:text-base whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 sm:flex sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © 2022 Educrat. All Right Reserved.
            </p>
            <div className="grid grid-cols-2 sm:flex gap-x-4 gap-y-2 text-xs sm:text-sm justify-items-center sm:justify-start">
              <Link href="#" className="hover:text-[#6366f1] transition-colors">
                Help
              </Link>
              <Link href="#" className="hover:text-[#6366f1] transition-colors">
                Term Conditions
              </Link>
              <Link href="#" className="hover:text-[#6366f1] transition-colors">
                Security
              </Link>
              <Link href="#" className="hover:text-[#6366f1] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#6366f1] transition-colors">
                Returns Policy
              </Link>
              <button className="flex items-center gap-2 px-4 py-1 bg-[#6366f1]/10 rounded-full hover:bg-[#6366f1]/20 transition-colors col-span-2 sm:col-span-1">
                <Globe className="w-4 h-4" />
                English
              </button>
            </div>
          </div>
        </div>
      </Container>
      <br />
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
       
        <br />
        <br />
        <br />
      </Box>
    </footer>
  );
}
