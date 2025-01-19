import useThemeStore from '@/app/store/themeStore'
import { Check } from 'lucide-react'
import Image from "next/image"
import Container from '../shared/container/container'

export default function HeroSection() {
  const features = [
    "Hand-Picked Authors",
    "Easy To Follow Curriculum",
    "Free Courses", 
    "Money-Back Guarantee"
  ]

  const {isDarkMode} = useThemeStore()

  return (
   <Container>
     <div className="min-h-screen ">
      <div className="  px-4 py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-purple-600">Learn</span> new skills when
              <br />and where you like.
            </h1>
            
            <p className="text-gray-600 text-lg">
              Use the list below to bring attention to your product's key differentiator.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="rounded-full bg-purple-100 p-1">
                    <Check className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className={`${!isDarkMode ? "text-gray-900" : "text-[white]"}`}>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-purple-900 hover:bg-purple-800 text-white px-8 py-3 text-lg rounded-lg">
              Join Free
            </button>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about.png"
              alt="Learning platform hero image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-sky-400/20 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </div>

   </Container>  )
}

