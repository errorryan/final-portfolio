
import portfolioData from "../data";

export default function Contact() {
  return (
    <section
      id="contacts"
      className="bg-white dark:bg-gray-950 text-black dark:text-white py-28 px-6 scroll-mt-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="max-w-4xl mb-16">

         

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            Let's work
            <br />
            <span className="text-gray-400 dark:text-gray-500">
              together.
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-8 max-w-2xl">
            Interested in my work or have an opportunity to discuss?
            I'd be happy to connect. Feel free to reach out through
            any of my contact channels.
          </p>

        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Email */}
          {portfolioData.email && (
            <a
              href={`mailto:${portfolioData.email}`}
              className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-7 hover:border-black dark:hover:border-white hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  EMAIL
                </span>
                <span className="text-2xl text-black dark:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                  ↗
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                Email Me
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 break-all">
                {portfolioData.email}
              </p>
            </a>
          )}

          {/* GitHub */}
          {portfolioData.github && (
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-7 hover:border-black dark:hover:border-white hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  GITHUB
                </span>
                <span className="text-2xl text-black dark:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                  ↗
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                GitHub Profile
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore my projects and code.
              </p>
            </a>
          )}

          {/* LinkedIn */}
          {portfolioData.linkedin && (
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-7 hover:border-black dark:hover:border-white hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  LINKEDIN
                </span>
                <span className="text-2xl text-black dark:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition">
                  ↗
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                LinkedIn Profile
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Let's connect professionally.
              </p>
            </a>
          )}

        </div>

        {/* Bottom Divider */}
        <div className="mt-24 border-t border-gray-200 dark:border-gray-800"></div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">

          <a
            href="#home"
            className="text-sm font-medium text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition"
          >
            Back to Top ↑
          </a>

        </div>

      </div>
    </section>
  );
}
