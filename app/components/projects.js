
import portfolioData from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-950 text-black dark:text-white py-28 px-6 scroll-mt-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">

          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400 mb-4">
            My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            Selected Projects
            <span className="text-gray-400 dark:text-gray-500">.</span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl">
            A collection of applications and websites I've developed
            while exploring different technologies and improving
            my development skills.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {portfolioData.projects.map((project, index) => (
            <article
              key={project.title}
              className="group h-full min-w-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden flex flex-col hover:border-black dark:hover:border-white hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Screenshot */}
              <div className="w-full h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-gray-400 dark:text-gray-500 text-sm">
                    Project Preview
                  </div>
                )}

              </div>

              {/* Project Details */}
              <div className="p-7 flex flex-col flex-1">

                {/* Project Number */}
               

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-7 mb-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">

                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 px-3 py-2 rounded-full transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Project Links */}
                <div className="mt-auto pt-5 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-6">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition"
                    >
                      Live Demo ↗
                    </a>
                  )}

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
