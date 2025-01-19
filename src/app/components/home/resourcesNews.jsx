import Image from "next/image";
import Link from "next/link";
import Container from "../shared/container/container";
import useThemeStore from "@/app/store/themeStore";

export default function ResourcesNews() {
  const featuredPosts = [
    {
      category: "GYM",
      title: "10 marketing trends that you should be prepared for in 2022",
      date: "July 28, 2022",
      image:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/elementor/thumbs/6-pue7ltuppa30x2xkqkg9b9ugbqn60jyfqby3wempau.jpg",
    },
    {
      category: "GYM",
      title: "How to design a simple, yet unique and memorable brand identity",
      date: "July 28, 2022",
      image:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/elementor/thumbs/7-pue7ltuppa30x2xkqkg9b9ugbqn60jyfqby3wempau.jpg",
    },
  ];

  const sidebarPosts = [
    {
      category: "SCHOOL",
      title: "Increasing engagement with Instagram and Facebook",
      date: "July 28, 2022",
      image:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/elementor/thumbs/8-pue7ltumcof9c0i0um2vwdwgrfwc5n3li0g9i9pkhy.jpg",
    },
    {
      category: "HIGH SCHOOL",
      title: "Engendering a culture of professional development",
      date: "July 28, 2022",
      image:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/elementor/thumbs/9-pue7ltumcof9c0i0um2vwdwgrfwc5n3li0g9i9pkhy.jpg",
    },
    {
      category: "COLLEGE",
      title: "Education in Our Lives: We Can Change the Future",
      date: "July 28, 2022",
      image:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/elementor/thumbs/10-pue7ltumcof9c0i0um2vwdwgrfwc5n3li0g9i9pkhy.jpg",
    },
  ];

  const { isDarkMode } = useThemeStore();

  return (
    <Container>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2
            className={`text-2xl sm:3xl font-bold ${
              isDarkMode ? "text-white" : "text-[#1a1a3c]"
            }`}
          >
            Resources & News
          </h2>
          <p className={`mt-3 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <Link
          href="#"
          className={`px-2 sm:px-4 mt-[-20px] py-2 rounded-lg transition-colors ${
            isDarkMode
              ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              : "bg-[#f3f1ff] text-[#6366f1] hover:bg-[#6366f1] hover:text-white"
          }`}
        >
          Browse Blog
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <div key={index} className="group">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <span
                  className={`font-medium ${
                    isDarkMode ? "text-[#818cf8]" : "text-[#6366f1]"
                  }`}
                >
                  {post.category}
                </span>
                <h3
                  className={`text-xl font-bold leading-tight ${
                    isDarkMode ? "text-white" : "text-[#1a1a3c]"
                  }`}
                >
                  {post.title}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {sidebarPosts.map((post, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <span
                  className={`text-sm font-medium ${
                    isDarkMode ? "text-[#818cf8]" : "text-[#6366f1]"
                  }`}
                >
                  {post.category}
                </span>
                <h3
                  className={`font-bold leading-tight ${
                    isDarkMode ? "text-white" : "text-[#1a1a3c]"
                  }`}
                >
                  {post.title}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
