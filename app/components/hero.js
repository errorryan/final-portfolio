
import portfolioData from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white flex items-center px-6 py-24 scroll-mt-20 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - INTRODUCTION */}
        <div className="order-2 md:order-1">

          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-6">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Hi, I'm
            <br />
            <span className="text-gray-400 dark:text-gray-500">
              {portfolioData.name}.
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            {portfolioData.role}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            I am passionate about building digital experiences,
            exploring technology, and developing practical solutions
            through web development and networking.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="bg-black dark:bg-white text-white dark:text-black px-7 py-3.5 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-300 transition duration-300"
            >
              Explore My Work →
            </a>

            <a
              href="/RYAN_FALLORE_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black dark:border-white text-black dark:text-white px-7 py-3.5 rounded-full font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
            >
              View My Resume
            </a>

          </div>

          {/* LOCATION */}
        

        </div>

        {/* RIGHT SIDE - PROFILE PICTURE */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">

          <div className="relative w-72 h-80 md:w-[420px] md:h-[480px]">

            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-black dark:border-white rounded-3xl translate-x-5 translate-y-5"></div>

            {/* Profile Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <img
                src="/profile.jpg.png"
                alt="Ryan's Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-6 -left-8 bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded-xl shadow-xl">
              <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                Focused on
              </p>

              <p className="font-semibold text-sm">
                Technology & Innovation
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
