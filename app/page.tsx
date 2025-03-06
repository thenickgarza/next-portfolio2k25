import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 dark:from-gray-800 dark:to-gray-700 dark:text-gray-200">
    <div className="max-w-3xl text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold">
        Hello, I'm <span className="text-blue-400">Nick Garza</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 dark:text-gray-100">
        JavaScript Developer | WordPress & HubSpot Expert | Full-Stack Enthusiast
      </p>
      <p className="mt-2 text-gray-400 dark:text-gray-300">
        I build fast, responsive, and scalable web applications.
      </p>
      
      <div className="mt-6 flex justify-center space-x-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-medium transition-all dark:bg-blue-400 dark:hover:bg-blue-500"
        >
          View My Work
        </a>
        <a
          href="/#contact"
          className="px-6 py-3 border border-gray-300 hover:border-blue-400 text-lg font-medium rounded-lg transition-all dark:border-gray-600 dark:hover:border-blue-500"
        >
          Contact Me
        </a>
      </div>
  
      <div className="mt-6 flex justify-center space-x-4">
        <a href="https://github.com/yourgithub" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-white">
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a href="https://linkedin.com/in/yourlinkedin" className="text-gray-400 hover:text-white dark:text-gray-600 dark:hover:text-white">
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
      </div>
    </div>
  </section>
  
  )
}
