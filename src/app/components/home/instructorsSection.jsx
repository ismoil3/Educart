'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Linkedin, Users, PlayCircle, Star } from 'lucide-react';
import useThemeStore from '@/app/store/themeStore';

export default function InstructorsSection() {
  // Hardcoded list of instructors
  const instructors = [
    {
      name: "Albert Flores",
      role: "Digital Marketing",
      image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg",
      rating: 3.9,
      students: 7,
      courses: 2
    },
    {
      name: "Ali Tufan",
      role: "Web Designer",
      image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg",
      rating: 3.9,
      students: 42,
      courses: 4
    },
    {
      name: "John Doe",
      role: "President of Sales",
      image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg",
      rating: 3.9,
      students: 28,
      courses: 4
    },
    {
      name: "Robert Fox",
      role: "Marketing",
      image: "https://demoapus1.com/educrat/learnpress/wp-content/uploads//learn-press-profile/2/63d287ea071d7c542c93366748a91fbc.jpeg",
      rating: 3.9,
      students: 26,
      courses: 2
    }
  ];

  // Get the dark mode status from the theme store
  const { isDarkMode } = useThemeStore();

  return (
    <section
      className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2
              className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1a0b3b]'} mb-2`}
            >
              Learn from the best instructors
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <button
            className={`py-2 px-4 rounded-md ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-purple-50 text-purple-600'} hover:${isDarkMode ? 'bg-gray-600' : 'bg-purple-100'}`}
          >
            View All Instructors
          </button>
        </div>

        {/* Instructor Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className={`group relative rounded-xl  overflow-hidden shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
            >
              {/* Image Container */}
              <div className="h-[200px] w-full relative">
                <Image
                  src={instructor.image || '/placeholder.svg'}
                  alt={instructor.name}
                  fill
                  className="object-cover transition-transform duration-300 "
                />
                {/* Social Icons Overlay */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                  <div className="flex gap-4 -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    {[{ Icon: Facebook }, { Icon: Twitter }, { Icon: Youtube }, { Icon: Linkedin }].map(
                      ({ Icon }, idx) => (
                        <Link
                          key={idx}
                          href="#"
                          className="bg-white p-2.5 rounded-full hover:bg-purple-600 text-[black] hover:text-white transform hover:-translate-y-1 transition-all duration-200"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <Icon size={20} />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`p-4 ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
                <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-[#1a0b3b]'}`}>{instructor.name}</h3>
                <p className="text-sm mb-3">{instructor.role}</p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    <span>{instructor.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{instructor.students} Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PlayCircle className="w-4 h-4" />
                    <span>{instructor.courses} Courses</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className={`text-center mt-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Want to help people learn, grow and achieve more in life?{' '}
          <a href="#" className="text-purple-600 hover:text-purple-700">
            Become an instructor
          </a>
        </div>
      </div>
    </section>
  );
}
