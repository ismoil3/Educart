"use client";
import { useState } from "react";
import { Book, Clock, BarChart } from "lucide-react";
import useThemeStore from "@/app/store/themeStore";
import Container from "../shared/container/container";

// Course data (same as before)
const courses = [
  {
    id: 1,
    title: "Learn Figma – UI/UX Design Essential Training",
    image:
      "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg",
    rating: 4.7,
    reviews: 3,
    lessons: 5,
    duration: "15 Day",
    level: "All Levels",
    instructor: {
      name: "Ali Tufan",
      avatar:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg",
    },
    originalPrice: 75,
  },
  {
    id: 2,
    title: "The Complete Financial Analyst Training & Investing",
    image:
      "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/16-615x435.jpg",
    rating: 4.0,
    reviews: 2,
    lessons: 1,
    duration: "12 Day",
    level: "All Levels",
    instructor: {
      name: "John Doe",
      avatar:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/16-615x435.jpg",
    },
    originalPrice: 85,
    salePrice: 50,
    isSale: true,
  },
  {
    id: 3,
    title: "Angular – The Complete Guide (2023 Edition)",
    image:
      "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/14-615x435.jpg",
    rating: 4.7,
    reviews: 3,
    lessons: 1,
    duration: "20 Day",
    level: "Expert",
    instructor: {
      name: "Robert Fox",
      avatar:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/14-615x435.jpg",
    },
    originalPrice: 90,
  },
  {
    id: 4,
    title: "Learn 3D Modelling And Design For Beginners",
    image:
      "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/15-615x435.jpg",
    rating: 3.5,
    reviews: 2,
    lessons: 1,
    duration: "7 Day",
    level: "Expert",
    instructor: {
      name: "John Doe",
      avatar:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/15-615x435.jpg",
    },
    originalPrice: 85,
    salePrice: 60,
    isSale: true,
  },
  {
    id: 5,
    title: "Learn Figma – UI/UX Design Essential Training",
    image:
      "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg",
    rating: 4.7,
    reviews: 3,
    lessons: 5,
    duration: "15 Day",
    level: "All Levels",
    instructor: {
      name: "Ali Tufan",
      avatar:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/7-615x435.jpg",
    },
    originalPrice: 75,
  },
  {
    id: 6,
    title: "The Complete Financial Analyst Training & Investing",
    image:
      "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/16-615x435.jpg",
    rating: 4.0,
    reviews: 2,
    lessons: 1,
    duration: "12 Day",
    level: "All Levels",
    instructor: {
      name: "John Doe",
      avatar:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/16-615x435.jpg",
    },
    originalPrice: 85,
    salePrice: 50,
    isSale: true,
  },
  {
    id: 7,
    title: "Angular – The Complete Guide (2023 Edition)",
    image:
      "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/14-615x435.jpg",
    rating: 4.7,
    reviews: 3,
    lessons: 1,
    duration: "20 Day",
    level: "Expert",
    instructor: {
      name: "Robert Fox",
      avatar:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/14-615x435.jpg",
    },
    originalPrice: 90,
  },
  {
    id: 8,
    title: "Learn 3D Modelling And Design For Beginners",
    image:
      "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/15-615x435.jpg",
    rating: 3.5,
    reviews: 2,
    lessons: 1,
    duration: "7 Day",
    level: "Expert",
    instructor: {
      name: "John Doe",
      avatar:
        "https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/15-615x435.jpg",
    },
    originalPrice: 85,
    salePrice: 60,
    isSale: true,
  },
];

const categories = [
  "All Courses",
  "IT & Software",
  "Graphic Design",
  "Digital Marketing",
  "Web Development",
];

export default function CourseList() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const { isDarkMode } = useThemeStore();

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFilteredCourses(courses);
  };

  return (
    <main
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } mt-[50px] min-h-screen`}
    >
     <Container>
     <div className=" px-4 py-12">
        <div className="text-center">
          <h2
            className="mb-2 text-3xl font-bold sm:text-4xl"
            style={{
              color: isDarkMode
                ? ""
                : "rgb(17 24 39 / var(--tw-text-opacity, 1))",
            }}
          >
            Our Most Popular Courses
          </h2>
          <p className="text-lg text-gray-600">
            20,000+ unique online course list designs
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-purple-100"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`overflow-hidden ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-lg rounded-lg transition-all hover:shadow-2xl`}
            >
              <div className="relative">
                {course.isSale && (
                  <div className="absolute right-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                    SALE
                  </div>
                )}
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="p-4">
                {/* Rating */}
                <div className="mb-2 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(course.rating)
                          ? "fill-current text-yellow-400"
                          : "fill-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600">
                    {course.rating} ({course.reviews})
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4 line-clamp-2 text-lg font-semibold">
                  {course.title}
                </h3>

                {/* Course details */}
                <div className="mb-4 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Book className="h-4 w-4" />
                    {course.lessons} Lessons
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="h-4 w-4" />
                    {course.level}
                  </div>
                </div>

                {/* Instructor and price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.instructor.avatar || "/placeholder.svg"}
                      alt={course.instructor.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="text-sm">{course.instructor.name}</span>
                  </div>
                  <div className="text-right">
                    {course.salePrice ? (
                      <>
                        <span className="text-lg font-bold text-purple-600">
                          ${course.salePrice}
                        </span>
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${course.originalPrice}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-purple-600">
                        ${course.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </Container>
    </main>
  );
}
