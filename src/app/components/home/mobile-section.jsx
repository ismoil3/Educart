import useThemeStore from "@/app/store/themeStore";
import { Apple, Play } from "lucide-react";
import Image from "next/image";
import Container from "../shared/container/container";

export function MobileSection() {
  const { isDarkMode } = useThemeStore();

  return (
    <div
      className={`py-16 md:py-24 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <Container>
        <div className="grid lg:grid-cols-2 justify-between gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/app.png"
              alt="Mobile and tablet devices showing the learning platform"
              width={800}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div
            className={`space-y-6 m-auto max-w-[460px] order-1 lg:order-2 ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Learn From <span className="text-[#6366f1]">Anywhere</span>
            </h2>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } text-lg`}
            >
              Take classes on the go with the educrat app. Stream or download to
              watch on the plane, the subway, or wherever you learn best.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-all duration-200 max-w-[200px] ${
                  isDarkMode
                    ? "bg-[#2d2d50] hover:bg-[#3c3c63] text-white"
                    : "bg-[#1a1a3c] hover:bg-[#2c2c5c] text-white"
                }`}
              >
                <Apple className="w-5 h-5" />
                <div className="flex flex-col text-left">
                  <span className="text-xs">Download on the</span>
                  <span className="font-semibold text-sm">App Store</span>
                </div>
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-all duration-200 max-w-[200px] ${
                  isDarkMode
                    ? "bg-[#2d2d50] hover:bg-[#3c3c63] text-white"
                    : "bg-[#1a1a3c] hover:bg-[#2c2c5c] text-white"
                }`}
              >
                <Play className="w-5 h-5" />
                <div className="flex flex-col text-left">
                  <span className="text-xs">Get it on</span>
                  <span className="font-semibold text-sm">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>{" "}
    </div>
  );
}
