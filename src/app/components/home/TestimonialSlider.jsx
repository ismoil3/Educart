"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "@mui/material";
import useThemeStore from "@/app/store/themeStore";
import Container from "../shared/container/container";

const testimonials = [
  {
    category: "Work Hard",
    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    author: {
      name: "Brooklyn Simmons",
      role: "Web Designer",
      image:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test1-2.png",
    },
  },
  {
    category: "Great Work",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
    author: {
      name: "Ronald Richards",
      role: "President of Sales",
      image:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test1-2.png",
    },
  },
  {
    category: "Work Hard",
    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    author: {
      name: "Ali Tufan",
      role: "Product Manager",
      image:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test1-1.png",
    },
  },
  {
    category: "Great Work",
    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
    author: {
      name: "Ronald Richards",
      role: "President of Sales",
      image:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test1-2.png",
    },
  },
];

const stats = [
  { number: "380,000+", label: "Students worldwide" },
  { number: "50,000+", label: "Total course views" },
  { number: "18,000+", label: "Five-star course reviews" },
  { number: "100,000+", label: "Students community" },
];

export function TestimonialSlider() {
  const sliderRef = useRef(null);
  const { isDarkMode } = useThemeStore();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className={`${
        isDarkMode ? "bg-gray-900" : "bg-[#6440fb]"
      } px-4 py-20 transition-colors duration-200`}
    >
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-emerald-400">
            What People Say
          </h2>
          <p className="text-lg text-white/80">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="testimonial-slider ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3 h-[300px]">
                <Card
                  className="relative h-full p-8"
                  sx={{
                    backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                    color: isDarkMode ? "#ffffff" : "inherit",
                    "& .MuiPaper-root": {
                      backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                    },
                  }}
                >
                  <div
                    className={`mb-4 text-lg font-semibold ${
                      isDarkMode ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    {testimonial.category}
                  </div>
                  <Quote
                    className={`absolute right-8 top-8 h-8 w-8 ${
                      isDarkMode ? "text-gray-700" : "text-purple-100"
                    }`}
                  />
                  <p
                    className={`mb-8 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.author.image || "/placeholder.svg"}
                      alt={testimonial.author.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div
                        className={`font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {testimonial.author.name}
                      </div>
                      <div
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {testimonial.author.role}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>

          {/* Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className={`absolute right-20 z-10 translate-y-1/2 rounded-full ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } p-3 shadow-lg transition-all`}
          >
            <ChevronLeft
              className={`h-6 w-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className={`absolute right-4 z-10 translate-y-1/2 rounded-full ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            } p-3 shadow-lg transition-all`}
          >
            <ChevronRight
              className={`h-6 w-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            />
          </button>
        </div>
        <br />
        <br />
        {/* Stats */}
        <div className="mt-20 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="mb-2 text-4xl font-bold text-emerald-400">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
