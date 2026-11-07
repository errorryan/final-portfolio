
import portfolioData from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-950 text-black dark:text-white py-28 px-6 scroll-mt-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
  
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            About <span className="text-gray-400 dark:text-gray-500">Me.</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Passionate about technology,
              <span className="text-gray-400 dark:text-gray-500">
                {" "}creativity, and continuous learning.
              </span>
            </h3>
          </div>

          {/* Right Side */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-8">
              {portfolioData.about}
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Based in
              </p>

              <p className="text-black dark:text-white font-semibold mt-1">
                {portfolioData.location}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 border-t border-gray-200 dark:border-gray-800"></div>

      </div>
    </section>
  );
}
