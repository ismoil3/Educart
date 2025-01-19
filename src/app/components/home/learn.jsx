"use client";

import { Laptop, GraduationCap, Briefcase } from "lucide-react";
import Container from "../shared/container/container";
import useThemeStore from "@/app/store/themeStore";

export default function FeaturesSection() {
  const features = [
    {
      icon: Laptop,
      number: "01",
      title: "Learn",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorit adipiscing elit. Felis donec massa aliqua.",
    },
    {
      icon: GraduationCap,
      number: "02",
      title: "Graduate",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorit adipiscing elit. Felis donec massa aliqua.",
    },
    {
      icon: Briefcase,
      number: "03",
      title: "Work",
      description:
        "Lorem ipsum dolor sit amet, consectetur dolorit adipiscing elit. Felis donec massa aliqua.",
    },
  ];

  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`min-h-screen py-16 px-4 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-[#1a0b3b]"
      }`}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-[#ffff]"
            }`}
          >
            Why learn with our courses?
          </h2>
          <p
            className={`transition-colors duration-300 ${
              isDarkMode ? "text-gray-400" : "text-gray-200"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className={`rounded-2xl p-8 border transition-all duration-300 cursor-pointer transform
                ${"border-gray-700 bg-transparent hover:bg-gray-700 hover:shadow-lg "}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div
                    className={`p-4 rounded-lg transition-colors duration-300 ${"text-[#00ffbb] group-hover:text-white"}`}
                  >
                    <Icon size={32} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-bold text-xl transition-colors duration-300 ${"text-white group-hover:text-[#00ffbb]"}`}
                  >
                    {feature.number}. {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`transition-colors duration-300 ${
                      
                         "text-gray-400 group-hover:text-gray-200"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
